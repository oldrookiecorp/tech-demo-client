pipeline {
  agent any

  environment {
    HOME = '.'
  }

  stages {
    stage("Prepare") {

      agent any

      steps {
          echo 'Clonning Repository'

          git url: 'https://github.com/old-rookies/tech-demo-client.git',
              branch: 'master',
              credentialsId: 'jenkins-git'
      }

      post {
        success {
          echo 'Successfully Cloned Repository'
        }

        failure{
            echo 'Fail Cloned Repository'
        }
      }
    }

    // stage("Test") {
    //   agent any


    //   steps {
    //     echo "Test"


    //     dir('.') {
    //       sh '''
    //       docker build -f Dockerfile.test -t test .
    //       docker rmi test
    //       '''
    //     }
    //   }

    //   post {
    //     success {
    //       echo 'Suceessfully Test Passed'
    //     }

    //     failure{
    //       echo 'Fail Test'
    //     }
    //   }
    // }

    stage("Build") {
      agent any

      steps {
        echo "Build"

        dir('.') {
          sh '''
          docker build -t front-deploy .
          '''
        }
      }


      post {
        success {
          echo 'Successfully Build'
        }

        failure {
          echo 'Fail Build'
        }
      }
    }

    stage("Deploy") {
      agent any

      steps {
        echo "Deploy"

        dir('.') {
          sh '''
          docker rm -f front-deploy
          docker run -d --name front-deploy -p 80:80 front-deploy
          '''
        }
      }
    }

  }
}