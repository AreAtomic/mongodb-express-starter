# Mongodb-express-starter

A starter kit to configure a express server with mongo db.

## 1) Install dependencies

```
npm install
```

## 2) Chosse your ports

In file config/local.js
```
let localConfig = {
    port: [THE PORT YOU WANT],
}
```

## 3) Connect mongodb

In the file config/default.json:

-   replace the URI
-   change the jwtSecret for security

```
{
    "mongoURI": "mongodb+srv://example:passwordexample@cluster0.47836example.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    "jwtSecret": "yourstrongsecrettokenmustbechanged"
}
```

## 4) Running

```
npm start
```
You can verify the app is running by following this link http://localhost:5000/api
