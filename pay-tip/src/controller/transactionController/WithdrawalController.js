const Transaction = require("../../model/TransactionSchema");
const Wallet = require("../../model/WalletSchema");
const Joi = require("joi");


const Schema = Joi.object({
  kind: Joi.string().required(),
  amount: Joi.number().required(),
  reference: Joi.date().required(),
});

module.exports = async function (req, res, next) {
  try {
    const { error, value } = Schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: { message: error.details[0].message },
      });
    }

    
    const state = "pending";
    const confirmedBy = req.user._id;

    const {  kind, amount, reference } = value;

    const transactAt = new Date();

    const trans = await Transaction.create({
      amount,
      kind,
      reference: transactAt,
    });

    let wallet;
    if (kind === "transfer" || kind === "withdraw") {
      wallet = await Wallet.findOneAndUpdate(
        { confirmedBy },
        { $inc: { wallet: - value.amount } },
        { new: true }
      );
    }
    return res.status(200).json({
      status: "success",
      data: { transaction:trans, wallet },
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
