@echo off
echo Instalando dependencias del frontend...
call npm install

echo Instalando dependencias del backend...
cd server
call npm install
cd ..

echo Iniciando contenedor Docker con la base de datos MySQL...
docker-compose up -d

timeout /t 5

echo Iniciando backend...
start cmd /k "cd server && node index.js"

echo Iniciando frontend...
start cmd /k "npm run dev"

echo Todos los servicios han sido iniciados correctamente.
pause