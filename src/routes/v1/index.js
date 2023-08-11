const express =require('express');
const Citycontroller=require('../../controllers/city_controllers');

const router =express.Router();

router.post('/city',Citycontroller.create);
router.delete('/city/:id',Citycontroller.destroy);
module.exports=router;