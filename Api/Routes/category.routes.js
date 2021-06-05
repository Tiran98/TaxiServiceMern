const router = require('express').Router();
const Category = require('../Models/category.model')

router.route('/getCategory').get((req,res) => {
    Category.find((err, data) => {
        if(err){
            console.log(err)
            res.status(400).send({
                message: err.message || "Some error occurred while retrieving Vehicles."
            });
        }
        res.send(data)
    });
});

router.route('/category').post((req,res) => {
    const category_name = req.body.category_name;
    const category_fee = req.body.category_fee;

    const newCategory = new Category({category_name,category_fee});

    newCategory.save((err,data) => {
        if(err){
            console.log(err)
            res.status(400).send({
                message: err.message || "Some error occurred while Adding Vehicles."
            });
        }
        res.send(data)
        console.log("Category successfuly added")
    });
});

module.exports = router;