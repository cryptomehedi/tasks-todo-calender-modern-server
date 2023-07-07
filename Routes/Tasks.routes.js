const express = require('express');
const tasksController = require('../Controllers/TaskController');
const router = express.Router()




router.route('/').get(tasksController.getAllTask).post(tasksController.postTask).put().delete()
router.route('/:id').get().post().put(tasksController.putTask).delete(tasksController.deleteTask)
router.route('/taskComplete/:id').get().post().put(tasksController.completeTask).delete()



module.exports = router