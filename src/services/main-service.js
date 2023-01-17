const { MainRepository } = require('../database/')
const {FormateData} = require('../utils/');

class mainService {

    constructor() {
        this.repository = new MainRepository;
    }

    async MainServiceFunction() {

        const response_data = await this.repository.RepositoryFunction()

        const payload = {
            message:"success", 
            status:"404" ,
            response_data, 
        };

        return FormateData(payload)

    };
};

module.exports = mainService;