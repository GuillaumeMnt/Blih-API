FROM node:latest

WORKDIR /usr/app

COPY package*.json ./
RUN npm i -g npm nodemon typescript
RUN npm i

COPY . .
EXPOSE 8035
