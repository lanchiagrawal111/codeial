module.exports.home=function (req,res) {
    //read cookie from browser
    console.log(req.cookies);
    //send cookie from server to browser
    res.cookie('user_id',25);
    return res.render('home',{
    title:'Home'
});
}
