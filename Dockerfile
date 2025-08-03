# Usa una imagen base de Node.js
FROM node:20-alpine

# Crea y establece el directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json (si lo tienes)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Comando para ejecutar la app
CMD ["node", "index.js"]
