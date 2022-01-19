FROM node:buster as build
WORKDIR /app
COPY . .
RUN npm install
ENTRYPOINT [ "npm","run", "build" ]