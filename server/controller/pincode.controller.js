import AddressHandler from "../handler/address.handler.js";


const addpincode = (req, res) => {

    const pincodes = req.body.pincodes
    console.log(pincodes)

    AddressHandler.addListOfPincodes(pincodes)
        .then(result => res.status(201).json({
            status: "SUCCESS",
            message: "fetching",
            data: result
        }))
        .catch(error => res.status(503).json({
            status: "constants.error",
            error: error
        }))

}

const PincodeController = {
    addpincode
}

export default PincodeController;