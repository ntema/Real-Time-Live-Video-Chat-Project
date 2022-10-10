const router = require('express').Router()
const deleteUserController = require('../../controller/userController/deleteUserController')
const verifyToken = require('../../middlewares/authMiddleware/verifyToken')
const verifyAdminToken = require('../../middlewares/authMiddleware/verifyAdmin')
const verifyAdminAndUserToken = require('../../middlewares/authMiddleware/verifyUserAndAdmin')

router.delete('/:id',verifyToken, verifyAdminToken, deleteUserController )

module.exports = router