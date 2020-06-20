const express=require('express');
const router=express.Router();

//require user controller for user route
const userController=require('../controllers/users_controller');

// request to profile url
  router.get('/profile',userController.profile);
 
  router.get('/sign-up',userController.signUp);
  router.get('/sign-in',userController.signIn);
  router.post('/create',userController.create);







module.exports=router;