const { handlerAsync } = require("../utils/handlerAsync");
const { Task } = require('../models/taskModel');
const { AppError } = require("../utils/appError");

const getAllTasks = handlerAsync(async (req, res, next) => {
    const task = await Task.findAll()

    res.status(200).json({
        status: 'success',
        task,
    })
})

const createTask = handlerAsync(async(req, res, next) => {
    const { title, userId, limitDate} = req.body 
    const startDate = new Date()

    const taskCreated = await Task.create({title, userId, limitDate, startDate})

    res.status(201).json({
        status: 'created',
        taskCreated
    })
})

const getTaksByStatus = handlerAsync(async(req, res, next) => {
    const { status } = req.params
    const validStatus = ['active', 'completed', 'late', 'cancelled']

    if(!validStatus.includes(status)){
        return next(new AppError('status does not valid'))
    }

    const tasks = await Task.findAll({ where: {status}})
    
    res.status(200).json({
        status: 'success',
        tasks
    })
})

const updateTask = handlerAsync(async(req, res, next) => {
    
})

const cancelledTask = handlerAsync((req, res, next) => {
    
})

module.exports = { getAllTasks, createTask, getTaksByStatus, updateTask, cancelledTask}