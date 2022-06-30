const { User } = require("../models/userModel");
const { AppError } = require("../utils/appError");
const { handlerAsync } = require("../utils/handlerAsync");
const { body } = require('express-validator');
const { checkResults } = require("./checkResults");

const createUserValidator = [
    body('name').notEmpty().withMessage('name cannot empty')
        .isString().withMessage('name must be a string'),
    body('email').notEmpty().withMessage('email cannot empty')
        .isString().withMessage('email must be a string')
        .isEmail().withMessage('email is invalid email'),
    body('password').notEmpty().withMessage('password cannot empty')
        .isString().withMessage('password must be a string')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
        .isAlphanumeric().withMessage('Password must contain letters and numbers'),     
    checkResults
]

const userExists = handlerAsync(async(req, res, next) => {
    const { id } = req.params

    const user = await User.findOne({ where: { id }})

    if(!user){
        return next(new AppError('User not found', 404))
    }

    req.user = user
    next()
}) 

module.exports = { userExists, createUserValidator }