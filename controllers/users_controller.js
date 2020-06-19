module.exports.profile=function (req,res) {
    res.end('<h1>Users Page</h1>');

}

//render the signup page
module.exports.signUp=function (req,res) {
    return res.render('user_sign_up',{
        title:"Codial | S"
    })
}