#!/bin/bash

# URL de Elasticsearch
ELASTICSEARCH_URL="http://localhost:9200"

# Crear el índice 'usuarios'
curl -X PUT "$ELASTICSEARCH_URL/usuarios" -H 'Content-Type: application/json' -d '{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 0
  },
  "mappings": {
    "properties": {
      "username": {
        "type": "keyword"
      },
      "email": {
        "type": "keyword"
      },
      "password": {
        "type": "text"
      }
    }
  }
}'

echo "Índice 'usuarios' creado correctamente con la configuración especificada."


