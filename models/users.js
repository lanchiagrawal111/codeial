const mongoose=require('mongoose');

// craete Schema
const userSchema=new mongoose.Schema({

    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
},
    {
        timestamps:true
});

//create Collection
const User=mongoose.model('User',userSchema);
module.exports=User;