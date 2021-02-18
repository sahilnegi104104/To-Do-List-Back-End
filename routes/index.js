const express=require('express');
const Router= express.Router();

const homeController=require('../controllers/home_controller');


Router.get('/',homeController.home);
Router.use('/task',require('./task'));

module.exports=Router;   //to be available  in index.js
