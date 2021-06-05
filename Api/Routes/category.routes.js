const router = require('express').Router();
const Category = require('../Models/category.model')

router.route('/category').get((req,res) => {
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

    const newCategory = new Category({category_name});

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