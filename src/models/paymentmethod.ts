import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['credit', 'debit', 'pix', 'cash', 'credit/debit'],
  },
  nickname: {
    type: String,
    required: true,
  },
  benefit: {
    type: String,
    required: false
  }
});

export const Model = mongoose.model('PaymentMethod', Schema);
