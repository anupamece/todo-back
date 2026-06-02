const express=require('express');
const todoItemRouter=express.Router();
const TodoItem=require('../models/todoItem');
const{createTodoItem,getAllTodoItems,deleteTodoItem}=require('../controllers/todoItemcontroller');
const { deleteItemFromServer } = require('../../todo-front/src/services/itemsService');

todoItemRouter.post('/',createTodoItem);
todoItemRouter.get('/',getAllTodoItems);
todoItemRouter.delete('/:id',deleteTodoItem);
module.exports=todoItemRouter;