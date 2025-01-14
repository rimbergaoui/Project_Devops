# Stage 1: Build Node.js app
FROM node:18-alpine AS builder
WORKDIR /app
# Cela permet d'installer les dépendances sans copier tout le code
COPY package.json .
RUN npm install
COPY . .
#Compile l'application
RUN npm run build

# Stage 2: Serve the built app with Nginx
#Utilise l'image officielle d'Nginx pour servir les fichiers statiques
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]