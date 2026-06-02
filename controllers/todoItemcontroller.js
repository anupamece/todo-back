const TodoItem=require('../models/todoItem');


exports.createTodoItem= async (req,res,next)=>{
    try{
        console.log(req.body);
        const todo= new TodoItem({task:req.body.task,dueDate:req.body.dueDate});
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        next(error);
    }
}

exports.getAllTodoItems=async(req,res,next)=>{
    const todoItems=await TodoItem.find();
    res.json(todoItems);
}
exports.deleteTodoItem=async(req,res,next)=>{
    const id=req.params.id;
    await TodoItem.findByIdAndDelete(id);
    res.status(204).send();
}