const express = require("express")
const app = express()
const mongoose = require("mongoose")
const path = require("path")
const Class = require("./models/class")
const studentClass=require("./models/class")

function classCodegenerator(){
    return Math.random().toString(36).substr(2, 5);
}

// const _method=require("method-override")
mongoose.connect("mongodb://127.0.0.1:27017/Quiz")
    .then(() => {
        console.log("Connection Succeefull")
    }).catch(e => console.log(e))

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
// app.use(_method)

//requests for teacher pages
app.get("/teacher/classes", async (req, res) => {
    const allClasses=await Class.find()
    res.render("teacher/teacherHome",{allClasses})
})

app.post("/teacher/classes", async (req, res) => {
    const { cname, csub, cdes } = req.body
    const classCode=classCodegenerator()
    const newClass = new Class({classCode, cname, csub, cdes })
    await newClass.save()
    res.redirect("/teacher/classes")
})

app.get("/student/classes",async (req,res)=>{
res.render("student/studentHome")
})

app.post("/student/classes",async (req,res)=>{
const {Code}=req.body
const FoundClass=await Class.find({classCode:Code})
let {classCode,cname,csub}= FoundClass.toObject()
console.log(classCode)
// if(FoundClass){
//     let {classCode,cname,csub}= FoundClass
//     const newStudentClass=new studentClass({classCode,cname,csub})
//     await newStudentClass.save()
//     res.redirect("/student/classes")
// }else{
//     console.log("Cannot Find Class")
// }
})



app.get("*", (req, res) => {
    res.send("Server Working")
})
app.listen(3000, () => {
    console.log("listening on port 3000")
})