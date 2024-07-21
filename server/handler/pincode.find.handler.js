import redisConnect from "../db/redis.js"
import LocationHelper from "../helpers/location.helper.js"
import RedisHelper from "../helpers/redis.helper.js"

const findpincode = (pincode) => {

    return new Promise((resolve, reject) => {
        getPincodefromRedis(pincode)
            .then((result) => resolve(result))
            .catch((err) => {
                LocationHelper.getAllObjects(pincode)
                    .then((result) => {
                        setPincodetoRedis(pincode, result)
                        resolve(result)
                    })
                    .catch((error) => reject(
                        {
                            meta: error,
                            errorMessage: '1000'
                        }))
            })
    })

}


const setPincodetoRedis = (pincode, data) => RedisHelper.setLocationInCache(pincode, data, 3600);
const getPincodefromRedis = (pincode) => RedisHelper.getLocationFromCache(pincode);


// const findpincode = (pincode) => {

//     return new Promise((resolve, reject) => {
//         RedisHelper.getLocationFromCache(pincode)
//             .then((response) => resolve(response))
//             .catch((error) => reject({
//                 meta: error,
//                 errorMessage: 'not in cache'
//             }))
//     })

//     return new Promise((resolve, reject) => {
//         LocationHelper.getAllObjects(pincode)

//             .then((response) => {
//                 RedisHelper.setLocationInCache(pincode, response, 3600)
//                 resolve(response)
//             })
//             .catch((error) => reject({
//                 meta: error,
//                 errorMessage: '1000'
//             }))
//     })




// }



const FindLocation = {
    findpincode
}

export default FindLocation;