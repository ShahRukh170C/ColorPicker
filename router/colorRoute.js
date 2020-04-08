const express=require("express")

// const colorController=require("./../")

const colorRouter=express.Router();

colorRouter.route('/').get((req,res)=>{
    res.status(200).render('index')
    // res.send("index ")
})

colorRouter.route('/test').get((req,res)=>{
    console.log(req.param)
    res.status(200).render('index')
    // res.send("test ")
})


module.exports=colorRouter