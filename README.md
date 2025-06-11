# xGameTracker

## Guía de instalación

Antes de comenzar, es importante tener instalado Node.js, Git, y Docker. Sin estas tecnologías la aplicación no podrá ser instalada.

### Automático

#### Ejecutar el script de instalación

**Si tienes WSL/Linux**
> start-all.sh

**Si tienes Windows sin WSL**
> start-all.bat

*Si hay un error de permisos o la ejecución de scripts está deshabilitada:*
> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process

### Paso a paso

### 1. Clonar el repositorio de GitHub

> git clone https://github.com/dmadcham/xGameTracker.git

#### 1.1 Entrar en el directorio del repositorio
> cd xGameTracker

### 2. Instalar las dependencias del Frontend

> npm install

### 3. Instalar las dependencias del Backend

> cd server

> npm install

### 3. Levantar el contenedor MySQL e inicializar la base de datos

> docker-compose up -d

> node init-db.js

### 4. Ejecutar la aplicación

#### 4.1 Frontend

*En una terminal a parte*

> npm run dev

#### 4.2 Backend

*En otra terminal*

> cd server 

> node index.js
