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

    async GetData(api_data) {

        const response_data = await this.repository.GetData(api_data)

        const payload = {
            message:"success", 
            status:"404" ,
            response_data, 
        };

        return FormateData(payload)

    };

    async GetDataById(api_data) {

        const response_data = await this.repository.RepositoryFunction(api_data)

        const payload = {
            message:"success", 
            status:"404" ,
            response_data, 
        };

        return FormateData(payload)

    };

    async PostData(api_data) {

        const response_data = await this.repository.RepositoryFunction(api_data)

        const payload = {
            message:"success", 
            status:"404" ,
            response_data, 
        };

        return FormateData(payload)

    };

    async UpdateData(api_data) {

        const response_data = await this.repository.RepositoryFunction(api_data)

        const payload = {
            message:"success", 
            status:"404" ,
            response_data, 
        };

        return FormateData(payload)

    };

    async DeleteData(api_data) {

        const response_data = await this.repository.RepositoryFunction(api_data)

        const payload = {
            message:"success", 
            status:"404" ,
            response_data, 
        };

        return FormateData(payload)

    };
};

module.exports = mainService;