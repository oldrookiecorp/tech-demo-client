FROM node:12 as builder

# 작업 폴더를 만들고 npm 설치
RUN apt-get update
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts@2.1.3 -g --silent

# 소스를 작업폴더로 복사하고 앱 실행
COPY . /usr/src/app
CMD ["npm", "start"]