const express = require("express")
const app = express()
const mongoose = require("mongoose")
const path = require("path")
const Class = require("./models/class")
const StudentClass = require("./models/studentclass")
const Quiz = require("./models/quiz")

function Codegenerator() {
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
    const allClasses = await Class.find()
    // const count=allClasses.length()
    // console.log(count)
    res.render("teacher/teacherHome", { allClasses })
})

app.post("/teacher/classes", async (req, res) => {
    const { cname, csub, cdes } = req.body
    const classCode = Codegenerator()
    const newClass = new Class({ classCode, cname, csub, cdes })
    await newClass.save()
    res.redirect("/teacher/classes")
})
app.get("/teacher/:ccode", async (req, res) => {
    const {ccode}=req.params
    const allQuizes=await Quiz.find({ccode})
    
    res.render("teacher/addquiz",{ccode,allQuizes})
})
app.post("/teacher/:ccode", async (req, res) => {
    const { ccode } = req.params
    const qCode = Codegenerator()
    const { qName, qSub, qQues, qMarks, qTime } = req.body
    const newQuiz = new Quiz({ ccode, qCode, qName, qSub, qQues, qMarks, qTime })
    await newQuiz.save()
    res.redirect(`${ccode}`)
})
//request for student page
app.get("/student/classes", async (req, res) => {
    const allClasses = await StudentClass.find()
    
    res.render("student/studentHome", { allClasses })
})
app.get("/student/:ccode",async (req,res)=>{
    const {ccode}=req.params
    const allQuizes=await Quiz.find({ccode})
    res.render("student/studentQuizes",{allQuizes})
})

app.post("/student/classes", async (req, res) => {
    const { classCode } = req.body
    const FoundClass = await Class.findOne({ classCode })
    console.log(FoundClass)
    if (FoundClass) {
        let { classCode, cname, csub } = FoundClass
        const newStudentClass = new StudentClass({ classCode, cname, csub })
        await newStudentClass.save()
        res.redirect("/student/classes")
    } else {
        console.log("Cannot Find Class")
    }
})


app.get("*", (req, res) => {
    res.send("Server Working")
})
app.listen(3000, () => {
    console.log("listening on port 3000")
})