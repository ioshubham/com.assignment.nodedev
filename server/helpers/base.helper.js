class BaseHelper {
    constructor(model) {
        this.model = model;
    }

    async addObject(obj) {
        try {
            const objectModel = new this.model(obj);
            return await objectModel.save();
        } catch (error) {
            throw error;
        }
    }

    async insertMany(data) {
        try {
            const object = await this.model.insertMany(data);
            if (!object) {
                throw new Error(strings.not_found);
            }
            return object
        } catch (error) {
            throw error;
        }
    }



}

export default BaseHelper;