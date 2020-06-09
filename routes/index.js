const express=require('express');

const router=express.Router();

// to import home controller 
const homeController=require('../controllers/home_controller');

// to call home action when home route hit
router.get('/',homeController.home);
router.get('/profile',homeController.profile);

//to check file import 
console.log('import router file');
module.exports=router;