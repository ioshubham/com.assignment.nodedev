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
    async getAllObjects(filters) {
        try {
            const query = filters.query ? filters.query : {};
            const selectFrom = filters.selectFrom ? filters.selectFrom : {};
            const sortBy = filters.sortBy ? filters.sortBy : { _id: -1 };
            const pageNum = filters.pageNum ? filters.pageNum : 1;
            const pageSize = filters.pageSize ? filters.pageSize : 50;
            const populatedQuery = filters.populatedQuery ? filters.populatedQuery : null;
            if (populatedQuery) {
                return await this.model
                    .find(query)
                    .select(selectFrom)
                    .sort(sortBy)
                    .skip((pageNum - 1) * pageSize)
                    .limit(parseInt(pageSize))
                    .populate(populatedQuery)
                    .lean()
                    .exec();
            } else {
                return await this.model
                    .find(query)
                    .select(selectFrom)
                    .sort(sortBy)
                    .skip((pageNum - 1) * pageSize)
                    .limit(parseInt(pageSize))
                    .lean()
                    .exec();
            }
        } catch (error) {
            throw error;
        }
    }



}

export default BaseHelper;