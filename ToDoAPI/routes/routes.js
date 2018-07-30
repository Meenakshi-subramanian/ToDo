const express = require('express');
const router = express.Router()

const todo_controller = require('../controllers/todo.controller');

router.get('/todo',todo_controller.todo_read);
router.post('/create', todo_controller.todo_create);
router.put('/update/:id',todo_controller.status_update);

// router.get('/read', todo_controller.todo_read);
// router.put('/update', todo_controller.todo_update);
// router.delete('/delete', todo_controller.todo_delete);
module.exports=router;
