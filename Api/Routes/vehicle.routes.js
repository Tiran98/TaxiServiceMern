const router = require('express').Router();
const Vehicle = require('../Models/vehicle.model')

router.route('/getVehicles').get((req,res) => {
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
    const hire_fee = req.body.hire_fee;

    const newVehicle = new Vehicle({code,model,type,name,categories,hire_fee});

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

router.route('/getVehicleFee').post((req,res) => {
    Vehicle.findOne({'name':req.body.name}, (err,data) => {
        if(err){
            console.log(err)
            res.status(400).send({
                message: err.message || "Some error occurred while retrieving Vehicle."
            });
        }
        res.send(data)
        console.log(data)
    });
});

module.exports = router;