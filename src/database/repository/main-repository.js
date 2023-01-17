const { testDataModel } = require('../models')
const ObjectId = require('mongoose').Types.ObjectId;

class MainRepository {

    async RepositoryFunction() {
        return "service is operational";
    }

    async GetData() {

        const data = await testDataModel.find()

        return data

    }

    async GetDataById(service_data) {
        const { _id } = service_data;
        console.log(_id);

        if(!ObjectId.isValid(_id)) throw new Error("Invalid ID");

        const data = await testDataModel.find({_id})

        return data

    }

    async PostData(service_data) {

        const { _id, req_body } = service_data;

        const payload = { req_body }

        const data = await testDataModel.create(payload)

        return data
    }

    async UpdateData(service_data) {

        const { _id, req_body } = service_data;

        const payload = { req_body }

        const data = await testDataModel.findByIdAndUpdate({ _id }, payload,
            
            {
                new: true,
            }
        )

        return data
    }

    async DeleteData(service_data) { 

        const { _id } = service_data;

        const data = await testDataModel.findByIdAndDelete({ _id })

        return data
    }

}

module.exports = MainRepository;