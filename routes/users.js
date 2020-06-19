const express=require('express');
const router=express.Router();

//require user controller for user route
const userController=require('../controllers/users_controller');

// request to profile url
  router.get('/profile',userController.profile);

// when profile route hit call this
router.get('/profile',userController.profile);






module.exports=router;