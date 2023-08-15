const express =require('express');
const Citycontroller=require('../../controllers/city_controllers');
const Flightcontroller=require('../../controllers/flight-controller');
const Airportcontroller=require('../../controllers/airport-controllers');
const router =express.Router();

router.post('/city',Citycontroller.create);
router.delete('/city/:id',Citycontroller.destroy);
router.get('/city/:id',Citycontroller.get);
router.get('/city',Citycontroller.getAll);
router.patch('/city/:id',Citycontroller.update);

router.post('/flights',Flightcontroller.create);
router.get('/flights',Flightcontroller.getAll);

router.post('/airports',Airportcontroller.create);
module.exports=router;