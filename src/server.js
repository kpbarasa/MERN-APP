const express = require('express');
const expressApp = require('./express-app')

const {PORT} = require('./config')

const StartServer = async () => {

    const app = express();

    await expressApp(app);

    app.listen(PORT, () => {
       console.log('Server: is listening on Port '+PORT);
    })
}

StartServer()