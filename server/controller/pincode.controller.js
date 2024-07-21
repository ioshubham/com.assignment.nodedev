import AddressHandler from "../handler/address.handler.js";
import FindLocation from "../handler/pincode.find.handler.js";


const addpincode = (req, res) => {

    const pincodes = req.body.pincodes

    AddressHandler.addListOfPincodes(pincodes)
        .then(result => res.status(201).json({
            status: "SUCCESS",
            message: "fetching",
            data: result
        }))
        .catch(error => res.status(503).json({
            status: "error featching",
            error: error
        }))

}

const findPincode = (req, res) => {

    const pin = req.body.pincode

    FindLocation.findpincode(pin)
        .then(result => res.status(201).json({
            status: "SUCCESS",
            message: "address fetched",
            data: result
        }))
        .catch(error => res.status(503).json({
            status: "constants.error",
            error: error
        }))


}

const PincodeController = {
    addpincode,
    findPincode
}

export default PincodeController;