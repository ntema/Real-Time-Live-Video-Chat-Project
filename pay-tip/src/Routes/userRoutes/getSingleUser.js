const router = require('express').Router()
const getSingleUserController = require('../../controller/userController/getSingleUserController')
const verifyToken = require('../../middlewares/authMiddleware/verifyToken')
const verifyAdminAndUserToken = require('../../middlewares/authMiddleware/verifyUserAndAdmin')

router.get('/single',verifyToken, getSingleUserController )

module.exports = router