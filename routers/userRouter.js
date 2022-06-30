const express = require('express')

const { getAllUsers, createUser, updateUser, deleteUser } = require('../controllers/userControllers')
const { userExists, createUserValidator } = require('../middlewares/userMiddleware')

const router = express.Router()

router.get('/', getAllUsers)

router.post('/', createUserValidator, createUser)

router.patch('/:id', userExists,  updateUser)

router.delete('/:id', userExists, deleteUser)

module.exports = { routerUser: router}