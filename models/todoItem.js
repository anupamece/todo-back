const mongoose=require('mongoose');


const todoItemSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    dueDate:{
        type:Date,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    createdaT:{
        type:Date,
        default:Date.now()
    },
})

module.exports=mongoose.model('TodoItem',todoItemSchema);