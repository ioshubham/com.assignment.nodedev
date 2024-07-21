import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
    Name: String,
    Description: String,
    BranchType: String,
    DeliveryStatus: String,
    Circle: String,
    District: String,
    Division: String,
    Region: String,
    Block: String,
    State: String,
    Country: String,
    Pincode: String,
});

export default mongoose.model('location', locationSchema);