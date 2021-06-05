const mongoose =  require('mongoose');
const { Schema } = require("mongoose");

const vehicleSchema = new Schema({
    code:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    model:{
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength:3
    },
    type:{
        type:String,
        required: true,
        unique:false,
        trip:true,
        minlength:3
    },
    name:{
        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:3
    },
    categories:{
        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:3
    },
}, {
    timestamps:true,
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;