# Mongodb-express-starter

A starter kit to configure a express server with mongo db.

## How to use it

#### 1) Install dependencies

```
npm install
```

#### 2) Chosse your ports

In file config/local.js
```
let localConfig = {
    port: [THE PORT YOU WANT],
}
```

#### 3) Connect mongodb

In the file config/default.json:

-   replace the URI
-   change the jwtSecret for security

```
{
    "mongoURI": "mongodb+srv://example:passwordexample@cluster0.47836example.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    "jwtSecret": "yourstrongsecrettokenmustbechanged"
}
```

#### 4) Running

```
npm start
```
You can verify the app is running by following this link http://localhost:5000/api

## Dependecies

```json
{
    "config": "^3.3.4",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-fileupload": "^1.4.0",
    "lodash": "^4.17.21",
    "mongodb": "^3.6.4",
    "mongoose": "^5.11.15",
    "nodemon": "^2.0.7"
}
```