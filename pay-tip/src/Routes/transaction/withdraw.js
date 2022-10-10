const router = require('express').Router()
const WithdrawalController = require('../../controller/transactionController/WithdrawalController')
const verifyToken = require('../../middlewares/authMiddleware/verifyToken')
const verifyAdminAndUserToken = require('../../middlewares/authMiddleware/verifyUserAndAdmin')

router.put('/withdraw',verifyToken, WithdrawalController )

module.exports = router