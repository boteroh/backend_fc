import { model, Schema } from "mongoose";

const orderSchema = new Schema({
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

    product: {
        type: Schema.Types.ObjectId,
        ref: 'Products',
        required: true
    }
},

{
    versionKey: false
});

export default model( 'Orders', orderSchema, 'orders' );