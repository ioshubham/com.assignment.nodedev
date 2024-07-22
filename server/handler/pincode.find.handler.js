import redisConnect from "../db/redis.js"
import LocationHelper from "../helpers/location.helper.js"
import RedisHelper from "../helpers/redis.helper.js"

const findpincode = (pincode) => {

    return new Promise((resolve, reject) => {
        getPincodefromRedis(pincode)
            .then((result) => {
                if (result) {
                    resolve(result)
                } else {
                    getLocationFromDBAndAddToCache(pincode)
                        .then((result) => {
                            setPincodetoRedis(pincode, result)
                            resolve(result)
                        })
                        .catch((error) => reject({
                            meta: error,
                            errorMessage: '1000'
                        }))
                }
            })
            .catch((err) => {
                getLocationFromDBAndAddToCache(pincode)
                    .then((result) => {
                        setPincodetoRedis(pincode, result)
                        resolve(result)
                    })
                    .catch((error) => reject({
                        meta: error,
                        errorMessage: '1000'
                    }))
            })
    })

}



const getLocationFromDBAndAddToCache = (pincode) => LocationHelper.getAllObjects(pincode)
const setPincodetoRedis = (pincode, data) => RedisHelper.setLocationInCache(pincode, data, 3600);
const getPincodefromRedis = (pincode) => RedisHelper.getLocationFromCache(pincode);

const FindLocation = {
    findpincode
}

export default FindLocation;