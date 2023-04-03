const mongoose=require("mongoose")
const quizSchema=new mongoose.Schema({
    ccode:{
        type:String,
        required:true
    },
    qCode:{
        type:String,
        required:true
    },
    qName:{
        type:String,
        required:true
    },
    qSub:String,
    qQuestions:Number,
    qMarks:Number,
    qTime:Number
})

const Quiz=new mongoose.model("Quiz",quizSchema)
module.exports=Quiz