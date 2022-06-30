const { validationResult } = require('express-validator');
const { AppError } = require('../utils/appError');

const checkResults = (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return next(new AppError(errors.array(), 400 )) ;
    }

    next()
}

module.exports = {checkResults}