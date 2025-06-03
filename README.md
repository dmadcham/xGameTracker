# xGameTracker

## Guía de instalación

### Automático

#### Ejecutar el script de instalación

**Si tienes WSL/Linux**
> start-all.sh

**Si tienes Windows sin WSL**
> start-all.bat

*Si hay un error de permisos o la ejecución de scripts está deshabilitada:*
> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process

### Paso a paso

#### 1. Clonar el repositorio de GitHub

> git clone https://github.com/dmadcham/xGameTracker.git
> cd xGameTracker

### 2. Instalar las dependencias del Frontend

> npm install

### 3. Levantar el contenedor MySQL

> docker-compose up -d

### 4. Ejecutar la aplicación

> docker start mysql-xgt 

> npm run dev

> cd server 

> node index.js
