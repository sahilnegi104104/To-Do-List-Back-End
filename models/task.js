const mongoose=require('mongoose');
/**Mongoose-dateonly package has been 
 used to covert date into short date format
 */  
const dateonly=require('mongoose-dateonly')(mongoose); 

// create a schema for the task
 const TaskSchema=new mongoose.Schema({
     Description: {
         type: String,
         required: true
     },
     Category: {
         type: String,
         required: true
     },
     Date: {
         type: dateonly,
         required:true
     }
     
 });
//Export the taskSchema
 const Task= mongoose.model('Task',TaskSchema);
 module.exports=Task;