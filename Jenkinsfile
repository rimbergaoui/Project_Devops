pipeline {
    agent any

    triggers {
        pollSCM('* * * * *')
    }

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
        IMAGE_NAME_SERVER = 'rimbergaoui/backend'
        IMAGE_NAME_CLIENT = 'rimbergaoui/frontend'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'git@github.com:rimbergaoui/Project_Devops.git',
                    credentialsId: 'github'
            }
        }

        stage('Build Server Image') {
            //when { changeset "backend/*"}
            steps {
                dir('backend') {
                    script {
                        dockerImageServer = docker.build("${IMAGE_NAME_SERVER}")
                    }
                }
            }
        }

        stage('Build Frontend Image') {
            //when { changeset "frontend/*"}
            steps {
                dir('frontend') {
                    script {
                        dockerImageClient = docker.build("${IMAGE_NAME_CLIENT}")
                    }
                }
            }
        }

        stage('Scan Server Image') {
            //when { changeset "backend/*"}
            steps {
                script {
                    sh """
                    docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \\
                    -e TRIVY_DB_REPO=ghcr.io/aquasecurity/trivy-db \\
                    aquasec/trivy:latest image --exit-code 0 --severity LOW,MEDIUM,HIGH,CRITICAL \\
                    ${IMAGE_NAME_SERVER}
                    """
                }
            }
        }

        stage('Scan Client Image') {
            //when { changeset "frontend/*"}
            steps {
                script {
                    sh """
                    docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \\
                    -e TRIVY_DB_REPO=ghcr.io/aquasecurity/trivy-db \\
                    aquasec/trivy:latest image --exit-code 0 --severity LOW,MEDIUM,HIGH,CRITICAL \\
                    ${IMAGE_NAME_CLIENT}
                    """
                }
            }
        }

        stage('Push Server Image to Docker Hub') {
            //when { changeset "backend/*"}
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
                        dockerImageServer.push()
                    }
                }
            }
        }
        stage('Push Client Image to Docker Hub') {
            //when { changeset "frontend/*"}
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
                        dockerImageClient.push()
                    }
                }
            }
        }        

    }
    post {
        always {
            script {
                echo 'Cleanup phase!'
                if (sh(script: "docker images -q aquasec/trivy", returnStdout: true).trim()) {
                    sh 'docker rmi aquasec/trivy'               
                }
                if (sh(script: "docker images -q ${IMAGE_NAME_SERVER}", returnStdout: true).trim()) {
                    sh "docker rmi ${IMAGE_NAME_SERVER}"
                }
                if (sh(script: "docker images -q ${IMAGE_NAME_CLIENT}", returnStdout: true).trim()) {
                    sh "docker rmi ${IMAGE_NAME_CLIENT}"
                }
                echo 'Cleanup Succefully done!'
            } 
        }
    }
}