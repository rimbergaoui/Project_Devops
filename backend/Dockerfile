FROM maven:3.6.3-openjdk-17-slim AS build
#Définit le répertoire de travail dans le conteneur
WORKDIR /app
#Copie tout le contenu du répertoire local dans le répertoire
COPY . .
#Exécute la commande Maven pour créer un fichier JAR en compilant le projet
RUN mvn package -DiskipTests

FROM openjdk:17-jdk-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar /app/app.jar
EXPOSE 8081
CMD ["java" , "-jar" , "app.jar"]