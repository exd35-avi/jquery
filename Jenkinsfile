// Jenkinsfile (Declarative Pipeline)
pipeline {
    agent any // Specifies that the pipeline can run on any available agent

    stages {
        stage('Checkout') { // Stage to checkout code from the repository
            steps {
                checkout scm // Checks out the code from the configured SCM (e.g., Git)
            }
        }

        stage('Build') { // Stage for building the project
            steps {
                sh 'mvn clean install -DskipTests' // Executes a shell command to build with Maven, skipping tests
            }
        }

        stage('Test') { // Stage for running tests
            steps {
                sh 'mvn test' // Executes a shell command to run Maven tests
                junit '**/target/surefire-reports/*.xml' // Archives JUnit test results for reporting
            }
        }

        stage('Archive Artifacts') { // Stage to archive build artifacts
            steps {
                archiveArtifacts artifacts: 'target/*.jar', fingerprint: true // Archives all .jar files in the target directory
            }
        }
    }

    post { // Actions to perform after the pipeline runs, regardless of success or failure
        always {
            echo "Pipeline finished." // Always print a message at the end
        }
        success {
            echo "Pipeline succeeded!" // Print message if the pipeline is successful
            // Example: send success email notification
        }
        failure {
            echo "Pipeline failed." // Print message if the pipeline failed
            // Example: send failure email notification
        }
    }
}
