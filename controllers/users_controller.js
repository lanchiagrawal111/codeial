const User=require('../models/users');
module.exports.profile=function (req,res) {
    return res.render('user_profile',{
        title:"Codial | Profile"
    });

}

//render the signup page
module.exports.signUp=function (req,res) {
    return res.render('user_sign_up',{
        title:"Codial | Sign up"
    });
}
//render the signin page
module.exports.signIn=function (req,res) {
    return res.render('user_sign_in',{
        title:"Codial | Sign in"
    });
    
}
// get the sign up data
module.exports.create=function (req,res) {
    // check password and confirm password 
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
      // find user in collection
      User.findOne({email:req.body.email},function (err,user) {
        if(err){console.log('error in finding user in signing up'); return }  

        if(!user){
            User.create(req.body,function (err,user) {
                 if (err) {
                   console.log("error in creating user while signing up");  return }
                  
                   return res.redirect('/users/sign-in');
                
            })
        }else{
            return res.redirect('back');
        }

      });

}
//sign in and create the session for user
module.exports.createSession=function (req,res) {
    
}