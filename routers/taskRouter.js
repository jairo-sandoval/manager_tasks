const express = require('express')
const { getAllTasks, createTask, getTaksByStatus, updateTask, cancelledTask } = require('../controllers/taskController')
const { createTaskValidator } = require("../middlewares/taskMiddleware")

const router = express.Router()

router.get('/', getAllTasks)

router.get('/:status', getTaksByStatus)

router.post('/', createTaskValidator, createTask)

router.patch('/:id', updateTask)

router.delete('/:id', cancelledTask)

module.exports = { routerTask: router}