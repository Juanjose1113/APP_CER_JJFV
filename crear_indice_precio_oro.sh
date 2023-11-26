#!/bin/bash

# URL de Elasticsearch
ELASTICSEARCH_URL="http://localhost:9200"

# Crear el índice 'precio_oro'
curl -X PUT "$ELASTICSEARCH_URL/precio_oro" -H 'Content-Type: application/json' -d '{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 0
  },
  "mappings": {
    "properties": {
      "value": {
        "type": "keyword"
      },
      "@timestamp": {
        "type": "date"
      }
    }
  }
}'

echo "Índice 'precio_oro' creado correctamente con la configuración especificada."

