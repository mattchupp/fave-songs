# Rest API with Express

**Still working on documentation**

This is my simple rest api written in express pulling from mongodb
The goal is to make this more generic so I can just grab it, change some endpoints, add a db connection to .env and get to work.

A template for me and maybe you.

## Getting started
Clone this and ``` npm start ``` to get going.

## Endpoints
Endpoints live in the routes directory. Just add
```javascript
  const exampleRouter = require('./routes/example')
  app.use('/example', exampleRouter)
```
to index.js to use /example as the endpoint using ./routes/example to handle requests
