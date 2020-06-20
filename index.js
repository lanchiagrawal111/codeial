const express=require('express');
const app=express();
const port=8000;
//require cookie parser
const cookieParser=require('cookie-parser');

// require ejs layout
const expressLayouts=require('express-ejs-layouts');
// require database
const db=require('./config/mongoose');

//form data encoded
app.use(express.urlencoded());

// setting up cookie-parser
app.use(cookieParser());
//include static files
app.use(express.static('./assets'));

// use express-ejs-layout
app.use(expressLayouts);
// extract style and script from subpages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//use express router
app.use('/',require('./routes/index'));



//set up view engine
app.set('view engine','ejs');
app.set('views','./views');



//listen on port
app.listen(port,function (err) {
    
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
     console.log(`Server is running on port: ${port}`);

});