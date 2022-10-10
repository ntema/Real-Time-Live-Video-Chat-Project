const router = require('express').Router()
const transferController = require('../../controller/transactionController/transferController')
const verifyToken = require('../../middlewares/authMiddleware/verifyToken')
const verifyAdminAndUserToken = require('../../middlewares/authMiddleware/verifyUserAndAdmin')

router.put('/transfer/:id',verifyToken, transferController )

module.exports = router