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

    stage("Test") {
      agent {
        docker {
          image 'node:latest'
        }
      }


      steps {
        echo "Test"


        dir('.') {
          sh '''
          npm install
          npm run jest
          '''
        }
      }

      post {
        success {
          echo 'Suceessfully Test Passed'
        }

        failure{
          echo 'Fail Test'
        }
      }
    }

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
          docker run -d --name front-deploy -p 8000:80 front-deploy
          '''
        }
      }

      post {
        success {
          echo 'Successfully Deployed'

          mail  to: 'sh.bae@oldrookiecorp.com'
                subject: '${BUILD_TAG} Success!'
                body: '${BUILD_TAG} Successfully Deployed! git commit: ${GIT_COMMIT} git url: ${GIT_URL} more information about this build visit ${BUILD_URL}'
          mail  to: 'dev.gihong2012@gmail.com'
                subject: '${BUILD_TAG}'
                body: '${BUILD_TAG} Successfully Deployed! git commit: ${GIT_COMMIT} git url: ${GIT_URL} more information about this build visit ${BUILD_URL}'
        }

        failure {
          echo 'Fail to Deployed'

          mail  to: 'sh.bae@oldrookiecorp.com'
                subject: '${BUILD_TAG} Fail!'
                body: '${BUILD_TAG} Fail to Deployed! git commit: ${GIT_COMMIT} git url: ${GIT_URL} more information about this build visit ${BUILD_URL}'
          mail  to: 'dev.gihong2012@gmail.com'
                subject: '${BUILD_TAG}'
                body: '${BUILD_TAG} Fail to Deployed! git commit: ${GIT_COMMIT} git url: ${GIT_URL} more information about this build visit ${BUILD_URL}'
        }
      }
    }

  }
}