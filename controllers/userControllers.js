const { handlerAsync } = require('../utils/handlerAsync')
const { User } = require('../models/userModel')

const getAllUsers = handlerAsync(async(req, res, next) => {
    const users = await User.findAll()

    res.status(200).json({
        status: 'success',
        users
    })
})

const createUser = handlerAsync(async(req, res, next) => {
    const { name, email, password } = req.body 

    const userCreated = User.create({ name, email, password })
    
    res.status(201).json({
        status: 'success',
        userCreated
    })

})

const updateUser = handlerAsync(async(req, res, next) => {
    const { user } = req
    const { name, email } = req.body 

    await user.update({ name, email})

    res.status(200).json({
        status: 'success'
    })
})

const deleteUser = handlerAsync(async(req, res, next) => {
    const { user } = req
    await user.update({status: 'disable'})

    res.status(200).json({
        status: 'success',
    })
})

module.exports = { getAllUsers, createUser, updateUser, deleteUser}