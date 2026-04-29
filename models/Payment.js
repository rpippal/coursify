// // // import mongoose from "mongoose";

// // // const PaymentSchema = new mongoose.Schema({
// // //   razorpayPaymentId: String,
// // //   razorpayOrderId: String,
// // //   razorpaySignature: String,
// // //   user: {
// // //     name: String,
// // //     email: String,
// // //   },
// // // });

// // // export default mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);


// // import mongoose from "mongoose";

// // const PaymentSchema = new mongoose.Schema(
// //   {
// //     razorpay_order_id: {String},
// //     razorpay_payment_id: {String},
// //     razorpay_signature: {String},
// //     amount: {Number},
// //     currency: {String},
// //     status: { type: String, default: "created" },
// //     user: {
// //       name: String,
// //       email: String,
// //       contact: String,
// //     },
// //   },
// //   { timestamps: true }
// // );

// // export default mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);


// import mongoose from "mongoose";

// const PaymentSchema = new mongoose.Schema({
//   order_id: { type: String, required: true },
//   email: {type: String},
//   payment_id: { type: String },
//   signature: { type: String },
//   amount: { type: Number },
//   currency: { type: String },
//   status: { type: String },
//   createdAt: { type: Date, default: Date.now },
// });

// export default mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);

// models/Payment.js
import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  order_id: { type: String, required: true },
  payment_id: { type: String },
  signature: { type: String },
  amount: { type: Number },
  currency: { type: String },
  status: { type: String },
  name: { type: String },      // User name
  email: { type: String },     // User email
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);
