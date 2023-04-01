const express=require("express")
const app=express()
const mongoose=require("mongoose")
const path=require("path")
mongoose.connect("mongodb://127.0.0.1:27017/Quiz")
.then(()=>{
    console.log("Connection Succeefull")
}).catch(e=>console.log(e))

app.use("views",path)
app.set("view engine","ejs")
