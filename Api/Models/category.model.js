const mongoose =  require('mongoose');
const { Schema } = require("mongoose");

const categorySchema = new Schema({
    category_name:{
        type:String,
        required:true,
        unique:false,
        trim:true,
        minlength:1
    },
    category_fee:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    }
}, {
    timestamps:true,
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;