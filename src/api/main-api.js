const MainService  = require('../services/main-service')

module.exports = (app) => {

    const service = new MainService();

    app.get('/', async (req, res, next) => {

        const data = await service.MainServiceFunction();

        res.json(data);

    });


}