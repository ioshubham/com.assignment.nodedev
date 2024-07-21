import LocationHelper from "../helpers/location.helper.js"

const findpincode = (pincode) => {

    return new Promise((resolve, reject) => {
        LocationHelper.getAllObjects(pincode)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => reject({
                meta: error,
                errorMessage: '1000'
            }))
    })
}

const FindLocation = {
    findpincode
}

export default FindLocation;