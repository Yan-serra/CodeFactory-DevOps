pipeline {
    // Jenkins irá usar qualquer agente disponível para executar o pipeline no momento da execução
    agent any

    // Definindo as etapas do processo de integração contínua, cada stage é uma etapa do processo
    stages {
        // Conectando ao GitHub e obtendo o código-fonte do projeto
        stage('1. Checkout') {
            steps {
                echo 'Obtendo o código-fonte da branch Desenvolvimento...'
                // Baixa o repositório informando a URL diretamente
                git branch: 'feature-ci-jenkins', url: 'https://github.com/Yan-serra/CodeFactory-DevOps.git'
            }
        } 
        // Verificando a estrutura de arquivos do projeto, para garantir que todos os arquivos necessários estão presentes
        stage('2. Validação do Código') {
            steps {
                echo 'Validando a estrutura de arquivos do projeto...'
                bat 'dir'
            }
        }
        // Realizando o build da aplicação e subindo o container com Docker Compose na porta 8080
        stage('3. Build e Execução com Docker Compose') {
            steps {
                echo 'Iniciando o build e subindo o container da aplicação...'
                bat 'docker compose up -d --build'
            }
        }
        // Verificando se os containers foram criados corretamente e estão em execução
        stage('4. Verificar Containers') {
            steps {
                echo 'Containers criados pelo Docker Compose:'
                bat 'docker compose ps'
            }
        }
        //  Testando a conexão HTTP com a aplicação para garantir que ela está funcionando corretamente
        stage('5. Testando conexão com a aplicação') {
            steps {
                echo 'Testando a conexão com a aplicação...'
                
                bat 'curl http://localhost:8081'
            }
        }
    }

    post {
        always {
            echo 'Limpando o ambiente de teste...'
            bat 'docker compose down'
        }

        success {
            echo 'Pipeline finalizada com sucesso!'
        }

        failure {
            echo 'A pipeline apresentou erros durante a execução.'
        }
    }
}