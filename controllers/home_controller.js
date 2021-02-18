
const Task=require('../models/task');


module.exports.home=function(req,res) {
/**
 * This  will find and post a task in the backend
 */
Task.find({}).then(response=> {
    return res.render('home', {
        Task_list: response,
        title: "Todo List"
    });
}).catch(err=> {
    console.log('error');
})
};










