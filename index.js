const express=require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const app=express();
const port=8000;
// require ejs layout
const expressLayouts=require('express-ejs-layouts');

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