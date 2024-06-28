FROM node:18.20.1-alpine

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN echo "PORT=8080" > .env
RUN echo "MONGO_URI=mongodb://mongo:27017/users-api" >> .env

EXPOSE 8080

CMD ["sh", "-c", "npm run seed-db && npm run start"]