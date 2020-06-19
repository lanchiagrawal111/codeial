const express=require('express');

const router=express.Router();

// to import home controller 
const homeController=require('../controllers/home_controller');

// import post controller
const postController=require('../controllers/post_controller');

// to call home action when home route hit
router.get('/',homeController.home);

//if request to /users goes to users route
router.use('/users',require('./users'));

// if request to /post goes to post controller
router.use('/post',postController.post);


//to check file import 
console.log('import router file');
module.exports=router;