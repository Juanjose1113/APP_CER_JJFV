"""
BIBLIOTECAS Y CONFIGURACIONES PREVIAS
"""
from flask import Flask, render_template, redirect, request, url_for, session, flash #Flask para crear app flask, render_template para crear plantillas HTML, redirect para redireccionar, request para solicitudes, url_for para construir urls, session para sesiones de usuario y flash para mensajes
from crypt import methods #El módulo crypt de Python sirve para encriptar contraseñas
from threading import local #El módulo threading tiene la clase local, que sirve para poder trabajar varios hilos a la vez con el mismo dato
from typing import Collection #La clase Collection de typing sirve para trabajar con listas, conjuntos o diccionarios, iteracciones y comprobaciones
from datetime import datetime #Fechas y horas

from bs4 import BeautifulSoup #Para extraccion de HTML
import cloudscraper #Sortear medidas de seguridad

import os #Operaciones del sistema
import requests #Solicitudes HTTP
import re #Expresiones regulares
import hashlib #Funciones hash criptográficas
import json #Datos de formato JSON
import threading #Soporte de hilos
import time #Manipulación del tiempo

from elasticsearch import Elasticsearch #Para trabajar con Elasticsearch

from pymongo import MongoClient #Para trabajar con MongoDB Atlas
from pymongo.mongo_client import MongoClient

app = Flask(__name__)
app.secret_key = "ayush"

#URL de la que se sacan los datos del oro
URL = "https://es.investing.com/commodities/gold"

#Encabezados para simular un navegador
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}

html_guardado = 'web_oro_ejemplo.html' #Por si deniega servicio

# Configurar la conexión a Elasticsearch (equipo local)
es = Elasticsearch(['http://localhost:9200'])


#Configurar la conexion a MongoDB (remota)
uri = "mongodb+srv://BBDD_Remota:12345@p1-cer.l6ixjd1.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(uri)
try:
    client.admin.command('ping')
    print("Ping realizado con exito. Se ha conectado a MongoDB Remota")
except Exception as e:
    print(e)

"""
FUNCIÓN PRINCIPAL PAGINA WEB
"""
@app.route('/')
def home():
  #Consulta para obtener el valor más reciente
    resultados = es.search(index='precio_oro_1', body={
        "query": {
            "match_all": {}  #Recuperar todos los valores
        },
        "size": 1,  # Obtener solo un valor (el más reciente)
        "sort": [
            {
                "@timestamp": {
                    "order": "desc"  # Ordenar en orden descendente
                }
            }
        ]
    })

    #Obtener el valor más reciente de los resultados
    if resultados['hits']['total']['value'] > 0:
        valor_más_reciente = resultados['hits']['hits'][0]['_source']
        precio_oro_1 = valor_más_reciente.get("value", None)
    else:
        precio_oro_1 = None

    if not session.get('logged_in'):  # Si no estás logeado
        return render_template("homepage.html", exchangevalue=precio_oro_1)  # Mostrar una página
    # Si estás logeado, mostrar otra página con variables adicionales
    return render_template("homepageregister.html", value=session["username"], exchangevalue=precio_oro_1, localaverageshow="hidden", localaverage=0, remoteaverageshow="hidden", remoteaverage=0, timeslocal=0, timesremote=0, umbralhistoricoshow='hidden', umbralhistorico=0)


"""
INSERCIÓN DE DATOS EN LAS BBDD
"""
def readingdata():
    while True:
        element = None
        #Bucle para que busque hasta que encuentre
        while element is None:
           # Crear un objeto de scraper de nube
           scraper = cloudscraper.create_scraper()

           # Hacer la solicitud a la página web usando cloudscraper
           response = scraper.get(URL)

           #Verificamos si la solicitud fue exitosa
           if response.status_code == 200:
               #Obtener el contenido HTML de la respuesta
               content = BeautifulSoup(response.content, "html.parser")
               print("Contenido HTML obtenido correctamente.")
           else:
               print("Error al obtener el contenido HTML. Código de estado:", response.status_code)
               print("Leyendo contenido HTML guardado en web_oro_ejemplo.html")
               with open(html_guardado, 'r', encoding='utf-8') as archivo_html:
                    #Leer el contenido del archivo en una variable
                    content = archivo_html.read()

           # Encontrar el elemento usando una expresión regular y BeautifulSoup
           pattern = re.compile(r'1\.?\d{1,3},\d{2}')  # Expresión regular para el número en el formato 1.000,00
           element = content.find("div", class_=re.compile("text-5xl/9"), string=pattern)
           
           if element is None:
            print("Elemento no encontrado en el HTML. Reintentando... (", element, ")")

        print("Valor extraido del HTML: ", element, "(", type(element), ")")
        
        element_text = element.text.strip()  # Obtén el texto del objeto
        
        #Extraemos valor en formato string
        res_str = element_text.replace(".", "").replace(",", ".")  # Reemplazar '.' con '' y ',' con '.' para obtener un número válido

        res_str = float(res_str) #Convierte a float
        
        print("Valor a guardar en BBDD: ", res_str, "(", type(res_str), ")")
        
        #Obtener la fecha y hora actual
        date = datetime.now()
        date = date.isoformat()

        # Creamos el documento nuevo
        document = {
            "value": res_str,
            "@timestamp": date  #El campo @timestamp es especial para Elasticsearch
        }

        #Insertar los datos en Elasticsearch
        es.index(index='precio_oro_1', body=document)
        print("Guardado en BBDD Local")
        
        #Insertar los datos en MongoDB
        collection = client['BBDD_remota']['precio_oro_1']  #Obtener la colección precio_oro_1
        collection.insert_one(document)  #Insertar el documento
        print("Guardado en BBDD Remota")
        time.sleep(120)


"""
PAGINA WEB DE REGISTRO
"""
@app.route('/register', methods=['GET'])
def register():
    return render_template("register.html")

#Lectura de datos introducidos en registro
@app.route('/register', methods=['POST'])
def registersend():
    username = request.form['username']
    email = request.form['email']
    password = hashlib.sha256(request.form['password'].encode("utf-8")).hexdigest()

    #Verificar ya está registrado en Elasticsearch
    if es.exists(index='usuarios', id=username):
        flash("El usuario ya está registrado")
        return render_template("register.html")

    #Almacenar los datos en Elasticsearch
    usuario = {
        "username": username,
        "email": email,
        "password": password,
        "media_info": 0,
        "media_info_remota": 0,
        "type": "_doc"
    }

    #Insertar el valor en Elasticsearch
    es.index(index='usuarios', body=usuario)

    return redirect(url_for('login'))  #Redirigir a la página de inicio de sesión después del registro

    
"""
PAGINA WEB DE LOGIN
"""
@app.route('/login', methods=['GET'])
def login():
    return render_template("loginpage.html")

#Lectura de datos introducidos en login
@app.route('/login', methods=['POST'])
def loginsend():
    username = request.form['username']
    password = hashlib.sha256(request.form['password'].encode("utf-8")).hexdigest()

#Consultar en Elasticsearch para verificar las credenciales
    resultados = es.search(index='usuarios', body={
        "query": {
            "bool": {
            	"must":[
                	{"match": {"username": username}},
                	{"match": {"password": password}}
                	]
            }
        }
    })

#Verificar si se encontró un usuario con esas credenciales
    if resultados['hits']['total']['value'] == 1:
        #Usuario autenticado
        session["username"] = username
        session['logged_in'] = True
        return redirect(url_for('home'))  # Redirigir a la página inicial después del inicio de sesión
    else:
        flash("Usuario o contraseña incorrecto")  # Error si las credenciales no son válidas
        return render_template("loginpage.html")


"""
CIERRE DE SESIÓN
"""
@app.route('/logout')
def logout():
    if session.get('logged_in'):
        session['logged_in'] = False # Se actualiza la variable de sesion 
    return redirect(url_for('home'))



"""
CALCULAR MEDIA BBDD LOCAL
"""
@app.route('/localaverage')
def localaverage():
    #Consultar los valores en el índice precio_oro
    resultados = es.search(index='precio_oro_1', body={"query": {"match_all": {}}})
        
    #Obtener todos los valores de los documentos
    valores = [hit['_source']['value'] for hit in resultados['hits']['hits']]
    
    print(valores)
    
    #Calcular la media de los valores
    media = sum(valores) / len(valores) if len(valores) > 0 else 0
    
    #Obtener el username de la sesion
    username = session.get('username')
    
    #Buscamos el documento asociado a username
    busqueda_username = es.search(index='usuarios', body={"query": {"term": {"username": username}}})
    
    #Obtener el documento de ese username
    documento_usuario = busqueda_username['hits']['hits'][0]['_source']

    #Obtener el campo numero_medias del documento del usuario
    media_info = documento_usuario.get('media_info', 0)
    
    numero_medias_actualizado = media_info + 1
    
    #Actualizar el campo numero_medias en el documento del usuario en Elasticsearch
    es.update(index='usuarios', id=busqueda_username['hits']['hits'][0]['_id'],
              body={"doc": {"media_info": numero_medias_actualizado}}, retry_on_conflict=3)

    #Imprimimos el valor por consola para verificar
    print("La media de la BBDD Local es: ", media)
    print("Numero de veces que ha solicitado la media: ", numero_medias_actualizado)
    
    #Redirigir al template de resultados
    return redirect('/resultados?media={}&solicitudes={}'.format(media, numero_medias_actualizado))


"""
CALCULAR MEDIA REMOTA
"""
@app.route('/remoteaverage')
def remoteaverage():
    uri = "mongodb+srv://BBDD_Remota:12345@p1-cer.l6ixjd1.mongodb.net/?retryWrites=true&w=majority"

    client = MongoClient(uri)
    try:
        client.admin.command('ping')
        print("Ping realizado con exito. Se ha conectado a MongoDB Remota")
    except Exception as e:
        print(e)
    
    #Obtener la coleccion precio_oro_1
    collection = client['BBDD_remota']['precio_oro_1']
    
    # Imprimir el número total de documentos en la colección
    print("Número total de documentos en la colección:", collection.count_documents({}))
    
    #Obtener todos los documentos de la colección
    documents = list(collection.find({}))

    #Extraer los valores "value" de los documentos
    valores = [document.get('value') for document in documents if document.get('value') is not None]
    
    #Realizamos la media de los valores extraidos
    media = sum(valores) / len(valores) if len(valores) > 0 else 0
    
    #Obtener el username de la sesion
    username = session.get('username')
    
    #Buscamos el documento asociado a username
    busqueda_username = es.search(index='usuarios', body={"query": {"term": {"username": username}}})
    
    #Obtener el documento de ese username
    documento_usuario = busqueda_username['hits']['hits'][0]['_source']

    #Obtener el campo numero_medias del documento del usuario
    media_info_remota = documento_usuario.get('media_info_remota', 0)
    
    numero_medias_actualizado = media_info_remota + 1
    
    #Actualizar el campo numero_medias en el documento del usuario en Elasticsearch
    es.update(index='usuarios', id=busqueda_username['hits']['hits'][0]['_id'],
              body={"doc": {"media_info_remota": numero_medias_actualizado}}, retry_on_conflict=3)

    #Imprimimos el valor por consola para verificar
    print("La media de la BBDD Remota es: ", media)
    print("Numero de veces que ha solicitado la media: ", numero_medias_actualizado)
    
    #Redirigir al template de resultados
    return redirect('/resultados?media={}&solicitudes={}'.format(media, numero_medias_actualizado))


"""
VISUALIZACIÓN DE RESULTADOS
"""
@app.route('/resultados')
def resultados():
    media = request.args.get('media')
    solicitudes = request.args.get('solicitudes')
    
    return render_template('resultados.html', value=session["username"], media=media, solicitudes=solicitudes)


"""
OBTENCIÓN DEL GRÁFICO
"""
@app.route('/remotegraphic', methods=['GET'])
def graphic():
    return render_template("graphic.html", value=session["username"])


"""
UMBRAL HISTORICO
"""
@app.route('/umbralhistorico', methods=['POST'])
def umbralhistorico():
    result = ''
    if session.get('logged_in'):  #Si está logeado
        el = es.search(index='precio_oro_1', body={"query": {"match_all": {}}}, size=1, sort='@timestamp:desc')
        if request.form["umbralhistorico"]:  #Si se solicita el umbral
            umbral = float(request.form["umbralhistorico"])  #El umbral es el valor introducido
            #Buscar valores mayores al umbral
            values = es.search(index='precio_oro_1', body={"query": {"range": {"value": {"gt": umbral}}}},
                               size=5, sort='@timestamp:desc')['hits']['hits']
            for index, item in enumerate(values):  #Ver los valores y mostrarlos
                if index == 4:
                    result = result + str(item["_source"]["value"])
                    break
                result = result + str(item["_source"]["value"]) + ", "  #Mostrar la string
        return render_template("homepageregister.html", value=session["username"], exchangevalue=el["hits"]["hits"][0]["_source"]["value"],
                               localaverageshow="hidden", localaverage=0, remoteaverageshow="hidden", remoteaverage=0,
                               timeslocal=0, timesremote=0, umbralhistoricoshow='', umbralhistorico=result)


"""
MANEJO DE HILOS
"""
if __name__ == "__main__":
    hilo1 = threading.Thread(target=readingdata)  # inicializar el hilo1
    hilo1.start()  #Iniciar el hilo 1
    app.run(host='0.0.0.0', port=5000, debug=False)  # Iniciar la app
