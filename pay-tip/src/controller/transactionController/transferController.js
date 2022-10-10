const Wallet = require("../../model/WalletSchema");
const Transaction = require("../../model/TransactionSchema");
const User = require("../../model/UserSchema");


const Joi = require("joi");

const Schema = Joi.object({
  amount: Joi.number().required(),
//   transaction: Joi.object().required(),
  transaction: Joi.string().required(),

});

module.exports = async function (req, res, next) {
  try {
    const _id = req.user;
    console.log(_id)
    const { error, value } = Schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: { message: error.details[0].message },
      });
    }
    console.log(value);

    const transfer = await Wallet.findOneAndUpdate(
      {owned_by: _id},
      { $inc: { amount: -value.amount } },
      { new: true }
    );
    let transferTo =  User.findOne({_id:req.params.id})
    transferTo = await Wallet.findOneAndUpdate(
        {owned_by: transferTo._id},
        { $inc: { amount: +value.amount } },
        { new: true }
    )

    const preTransaction = new Transaction({
      amount: value.amount, 
      userId: _id,
      reference: value.transaction,
    });
    const transaction = await preTransaction.save();

    return res.status(200).json({value, transfer, transaction });
  } catch (err) {
    next(err);
  }
};
