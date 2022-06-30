const { body, validationResult } = require('express-validator');
const { checkResults } = require('./checkResults');

const createTaskValidator = [
    body('title').notEmpty().withMessage('title is empty'),
    body('title').isString().withMessage('title must be a string'),
    body('userId').notEmpty().withMessage('userId is empty'),
    body('userId').isInt().withMessage('is not a number'),
    checkResults
]   

module.exports = { createTaskValidator }