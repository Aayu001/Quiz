
const mongoose=require("mongoose")
const classSchema= new mongoose.Schema({
    classCode:{
        type:String,
        required:true,
    },
    cname:{
        type:String,
        required:true
    },
    csub:{
        type:String,
        required:true
    },
    cdes:String
})
const Class=new mongoose.model("Class",classSchema)
const StudentClass=new mongoose.model("StudentClass",classSchema)
module.exports=Class
module.exports=StudentClass