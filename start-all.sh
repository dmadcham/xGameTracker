#!/bin/bash

echo "📦 Instalando dependencias del frontend..."
npm install

echo "📦 Instalando dependencias del backend..."
cd server && npm install
cd ..

echo "🐳 Iniciando contenedor Docker con la base de datos MySQL..."
cd server
docker-compose up -d
cd ..

sleep 5  # Esperar a que la base de datos esté lista

echo "🚀 Iniciando backend..."
gnome-terminal --bash -c "cd server && node index.js && node init-db.js; exec bash"

echo "🚀 Iniciando frontend..."
gnome-terminal --bash -c "npm run dev; exec bash"

echo "✅ Todos los servicios han sido iniciados correctamente."