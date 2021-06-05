const mongoose =  require('mongoose');
const { Schema } = require("mongoose");

const vehicleSchema = new Schema({
    code:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1
    },
    model:{
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength:1
    },
    type:{
        type:String,
        required: true,
        unique:false,
        trip:true,
        minlength:1
    },
    name:{
        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:1
    },
    categories:{
        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:1
    },
    hire_fee:{
        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:1
    },
}, {
    timestamps:true,
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;