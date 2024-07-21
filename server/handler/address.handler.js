import LocationHelper from "../helpers/location.helper.js";

const addPincode = (pincode) => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.postalpincode.in/pincode/${pincode}`).then(res => res.json())
            .then((response) => {
                resolve(response)
            })
            .catch((error) => reject({
                meta: error,
                errorMessage: '1000'
            }))
    })
}

const savePincodeAddressToDB = (data) => LocationHelper.insertMany(data)

const addListOfPincodes = (pincodes) => {
    return new Promise((resolve, reject) => {
        const promiseFun = [];
        for (const pin of pincodes) {
            promiseFun.push(addPincode(pin))
        }

        Promise.all(promiseFun)
            .then(responses => {
                const dbIns = []
                for (const r of responses) {
                    dbIns.push(savePincodeAddressToDB(r[0].PostOffice))
                }

                Promise.all(dbIns)
                    .then(dbresponses => {
                        resolve(dbresponses)
                    })
                    .catch(err =>
                        reject(err))

            })
            .catch(err =>
                reject(err))
    })
}

const AddressHandler = {
    addListOfPincodes
}

export default AddressHandler;