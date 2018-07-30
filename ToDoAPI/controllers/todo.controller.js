const Todo = require('../models/todo.model');

//Simple version, without validation or sanitation
exports.todo_read = function (req, res) {
  Todo.find(function (err, todolist) {
        if (err)
          return next(err);
        let resarray=[];
        for(var i = 0; i < todolist.length; i++) {
          //  var obj = todolist[i];
          //  let converteddate=(new Date(todolist[i].date)).toLocaleDateString();
            todolist[i].date=(new Date(todolist[i].date)).toLocaleDateString();
           console.log(todolist[i].date," ",(new Date(todolist[i].date)).toLocaleDateString());
        }
        res.send(todolist);

    });

};


exports.todo_create = function (req, res) {
    let datefield = new Date(req.body.date+" EDT");
    let titleU=(req.body.title).toLowerCase();
    let descriptionU=(req.body.description).toLowerCase();
    let todo = new Todo(
        {
            title: titleU,
            description: descriptionU,
            date:datefield,
            status:req.body.status
        }
    );

    todo.save(function (err) {
        if (err) {
            return next(err);
        }
        // Todo.find(function (err, todolist) {
        //       if (err)
        //         return next(err);
        //       res.send(todolist);
        //   });
        res.send(todo)
    });



};

exports.status_update = function (req, res) {
    Todo.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, function (err, updatedtodo) {
        if (err) return next(err);
        res.send(updatedtodo);
    });
};
