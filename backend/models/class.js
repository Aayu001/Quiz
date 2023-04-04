
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
    cdes:String,
    qCode:[String]
})
const Class=new mongoose.model("Class",classSchema)
module.exports=Class
