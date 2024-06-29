# User API
This is a simple API that allows you to create, read, update and delete users. It is built using Node.js, Express and MongoDB.
You can find api documentation at /api-docs

## Installation
1. Clone the repository: `git clone https://github.com/Carbrex/Users-api.git`
2. Install dependencies using pnpm or npm: `pnpm install` or `npm install`
3. Add environment variable to `.env`:
```
cp example.env .env
```
4. Seed the database:
```
npm run seed-db
```
5. Start the server: 
```
npm start
```
6. Then, navigate to http://localhost:8080/api-docs to see the API documentation.
7. To run tests, use the following command:
```
npm run test
```

## Alternative Setup using Docker
You need to have docker and docker compose installed on your machine to use this method. Install docker from [here](https://docs.docker.com/get-docker/).
1. Clone the repository: `git clone https://github.com/Carbrex/Users-api.git`
2. Start the docker containers:
```
docker compose up
```
3. Then, navigate to http://localhost:8080/api-docs to see the API documentation.

## Answers to questions
1. It took me nearly 4 hours and 30 minutes to complete this assignment.
2. The most challenging part for me in this project was writing tests for this api. As this was my first time writing tests for a nodejs application, I took help from some github repos and chatgpt to write the tests.
3. The link to sample data provided did not work so I used https://jsonplaceholder.typicode.com/users this to get some user data and modified it according to the requirement.
4. (Same answer as previoud question)The link to sample data provided did not work so I used https://jsonplaceholder.typicode.com/users this to get some user data and modified it according to the requirement.
5. Yes, the assignment was fairly simple but I took time to do each thing perfectly.
6. I decided to use Express with Node.js, Swagger and OpenApi for documentation and jests and supertest for tests.
7. I assumed that the application didn't need to handle super complex queries or massive amounts of data, so I kept the database schema and queries pretty simple. I also decided to focus more on getting the core functionality right rather than adding a lot of extra features.
