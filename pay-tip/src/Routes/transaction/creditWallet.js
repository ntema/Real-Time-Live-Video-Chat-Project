const router = require('express').Router()
const creditWalletController = require('../../controller/transactionController/creditWalletController')
const verifyToken = require('../../middlewares/authMiddleware/verifyToken')
const verifyAdminAndUserToken = require('../../middlewares/authMiddleware/verifyUserAndAdmin')

router.post('/credit-wallet',verifyToken, creditWalletController )

module.exports = router