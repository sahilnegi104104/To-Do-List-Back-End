const Task = require('../models/task');

/**
 * Function to create a task
 */
module.exports.create_task = function (req, res) {

    Task.create({
        Description: req.body.Description,
        Category: req.body.Category,
        Date: req.body.Date
    }, function (err, newtask) {
        if (err) {
            req.flash('error', 'Error in creating a task');
            return;
        }
        console.log('*********', newtask);
        req.flash('success', 'Task created successfully!');
        return res.redirect('back');
    }
    );

};

/*
 * Function to delete a task from the list
 */
module.exports.delete_task = function (req, res) {
    /**
     * get id by req.params
     * find the task by using id and then delete
     */
    let id = req.query.id;
    Task.findByIdAndDelete(id, function (err) {
        if (err) {

            req.flash('error', 'Task cannot be deleted');
            return;
        }
        req.flash('success', 'Task deleted successfully!');
        return res.redirect('back');
    });


};

