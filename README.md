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
