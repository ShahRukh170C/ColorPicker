const colorRouter=require("./router/colorRoute");
const express=require("express");
const morgan = require("morgan");
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const path=require("path")
const pug=require('pug')
dotenv.config({path:"./config.env"})

const app = express();

//---------------------------- Middle wair-----------------------------------------0--
app.use(express.json());

app.use(morgan("dev"));

//-----------------------------------------------------------------------------------

var database_connection=process.env.DATABASE_CONNECTION.replace('<PASSWORD>',process.env.DATABASE_PASSWORD)
const port= process.env.PORT || 14000;
//------------------------------Routers -----------------------------------------------------


app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.use(express.static(path.join(__dirname,'public')))

app.get("/",(req,res)=>{
    res.status(200).render('index')
})
app.use('/color',colorRouter);

// app.use('/api/v1/tours',toursRouter);

//------------------------------ DataBase Connection---------------------------------------------------

// mongoose.connect(database_connection,{
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useFindAndModify:false,
//     useUnifiedTopology: true

// }).then(console.log("success"))


app.listen(port, function() {
    console.log("app is running on port 14000");
});
