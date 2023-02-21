FROM node:18

EXPOSE 8080

WORKDIR /app-backend

COPY . /app-backend

RUN npm i

ENTRYPOINT [ "npm", "run", "dev" ]