const express=require('express');
const todoItemRouter=express.Router();
const TodoItem=require('../models/todoItem');
const{createTodoItem,getAllTodoItems,deleteTodoItem}=require('../controllers/todoItemcontroller');


todoItemRouter.post('/',createTodoItem);
todoItemRouter.get('/',getAllTodoItems);
todoItemRouter.delete('/:id',deleteTodoItem);
module.exports=todoItemRouter;