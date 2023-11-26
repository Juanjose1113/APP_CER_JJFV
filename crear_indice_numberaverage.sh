#!/bin/bash

# Definir la URL del servidor Elasticsearch (ajusta el host y el puerto según tu configuración)
ES_HOST="localhost"
ES_PORT="9200"

# Definir el mapping para el índice 'numberaverage'
MAPPING='
{
  "mappings": {
    "properties": {
      "username": {
        "type": "keyword"
      },
      "timeslocal": {
        "type": "integer"
      },
      "timesremote": {
        "type": "integer"
      }
    }
  }
}
'

# Enviar la solicitud PUT para crear el índice 'numberaverage' con el mapping definido
curl -X PUT "$ES_HOST:$ES_PORT/numberaverage" -H 'Content-Type: application/json' -d "$MAPPING"

# Verificar la respuesta de la solicitud
if [ $? -eq 0 ]; then
  echo "Índice 'numberaverage' creado exitosamente en Elasticsearch."
else
  echo "Error al crear el índice 'numberaverage' en Elasticsearch."
fi
