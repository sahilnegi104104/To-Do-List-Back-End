const express=require('express');
const Router= express.Router();

const taskController=require('../controllers/task_controller');
Router.post('/create_task',taskController.create_task);
Router.get('/delete_task',taskController.delete_task);

module.exports=Router;