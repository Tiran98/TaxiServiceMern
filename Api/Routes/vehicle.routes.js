const router = require('express').Router();
const Vehicle = require('../Models/vehicle.model')

router.route('/vehicle').get((req,res) => {
    Vehicle.find((err, data) => {
        if(err){
            console.log(err)
            res.status(400).send({
                message: err.message || "Some error occurred while retrieving Vehicles."
            });
        }
        res.send(data)
    });
});

router.route('/vehicle').post((req,res) => {
    const code = req.body.code;
    const model = req.body.model;
    const type = req.body.type;
    const name = req.body.name;
    const categories = req.body.categories;

    const newVehicle = new Vehicle({code,model,type,name,categories});

    newVehicle.save((err,data) => {
        if(err){
            console.log(err)
            res.status(400).send({
                message: err.message || "Some error occurred while Adding Vehicles."
            });
        }
        res.send(data)
        console.log("vehicle successfuly added")
    });
});

module.exports = router;