# **DevOps Project: Spring Boot Backend & React Frontend**

Un projet complet combinant un backend Spring Boot, un frontend React, et une intégration DevOps avec Docker, Docker Compose, Jenkins, Kubernetes, et PostgreSQL.

---

## **Table des matières**
- [Aperçu du Projet](#aperçu-du-projet)
- [Technologies Utilisées](#technologies-utilisées)
- [Étapes pour Lancer le Projet](#étapes-pour-lancer-le-projet)

---

## **Aperçu du Projet**

Ce projet met en œuvre les pratiques DevOps modernes avec un backend Spring Boot, un frontend React, et une base de données PostgreSQL. Il intègre :

1. Conteneurisation des services avec Docker.
2. Orchestration des services avec Docker Compose.
3. Automatisation du pipeline CI/CD avec Jenkins.
4. Déploiement évolutif avec Kubernetes et Helm.

---


## **Technologies Utilisées**
- **Backend** : Java (Spring Boot)
- **Frontend** : React
- **Base de Données** : PostgreSQL
- **DevOps** : Docker, Docker Compose, Kubernetes, Jenkins, Helm

---

## **Étapes pour Lancer**

1. Clonez le projet :
   
   ```bash
   git clone https://github.com/rimbergaoui/Project_Devops.git
   cd Project_Devops

3. Construisez les images Docker :
   
   - **Frontend** :
     
     ```bash
     docker build -t frontend-image ./frontend
     
 ![Construction de l'image Docker pour le Frontend](./Captures/build_frontend.png)
 
   - **Backend** :
     
     ```bash
     docker build -t backend-image ./backend
     
 ![Construction de l'image Docker pour le Backend](./Captures/build_back.png) 

 3. Configurez PostgreSQL dans Docker :
    
    - **PostgreSQL** est conteneurisé et intégré au backend via Docker Compose.

![Configuration de PostgreSQL avec Docker](./Captures/postgres+docker.png)

 4. Exécutez Docker Compose pour démarrer les services :
    
    ```bash
    docker-compose up --build

![Exécution des Services avec Docker Compose](./Captures/docker_compose.png)  

5. Configurez Jenkins et exécutez le pipeline CI/CD :
   
   - Configurez **Jenkins** pour automatiser les étapes CI/CD :

![Interface de Configuration de Jenkins](./Captures/jenckins.png) 
![Publication des Images sur Docker Hub avec Jenkins](./Captures/docker_hub+jenkins.png)  

- Poussez les images Docker sur Docker Hub :

  
![Interface Docker Hub](./Captures/docker_hub.png) 
     
   - Exécutez le pipeline complet :

![Pipeline CI/CD Configuré dans Jenkins](./Captures/pipline_jenkins.png) 
   
6. Déployez les services sur Kubernetes :
   
    - Utilisez **Helm Charts** pour orchestrer le déploiement Kubernetes :


![Déploiement Kubernetes via Helm Charts](./Captures/charts.png) 
    - Intégration de **ArgoCD** pour la mise en place d’une stratégie GitOps : 
      
     
    
![Argo](./Captures/argocd2.png) 
![Argo](./Captures/argocd.png) 

7. Monitoring et Observabilité :

L'intégration d'un système de monitoring est essentielle pour la visibilité des performances des services. Voici les étapes suivies pour configurer le monitoring avec **Prometheus** et **Grafana** :

    - Déploiement de Prometheus pour collecter les métriques : 
    
    ![Prometheus](./Captures/prometheus.png) 

    - Configuration de Prometheus et Grafana : 

    ![Grafana](./Captures/grafana.png) 


    
