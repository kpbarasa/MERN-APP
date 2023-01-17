const express = require('express');
const expressApp = require('./express-app')
const {databaseConnection} = require('./database')

const {PORT} = require('./config')

const StartServer = async () => {

    const app = express();

    await expressApp(app);
    
    await databaseConnection();

    app.listen(PORT, () => {
       console.log('Server: is listening on Port '+PORT);
    })
}

StartServer()