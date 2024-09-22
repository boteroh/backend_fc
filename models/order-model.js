import { model, Schema } from "mongoose";
import mongoose from "mongoose";

const orderSchema = new Schema({
    reference: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true
    },

    initialCutUsa: {
        type: Number,
        default: 0,
        required: true
    },

    initialCutCol: {
        type: Number,
        default: 0
    },

    sellerSamples: {
        type: Number,
        required: true,
        default: 0
    },

    totalUnits: {
        type: Number
    },
},

{
    versionKey: false
});

export default model( 'Orders', orderSchema, 'orders' );