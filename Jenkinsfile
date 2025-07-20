// Jenkinsfile (Declarative Pipeline)
pipeline {
    agent any // Specifies that the pipeline can run on any available agent

    stages {

        stage('Build') { // Stage for building the project
            steps {
                echo 'Building' // Executes a shell command to build with Maven, skipping tests
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
