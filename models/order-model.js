import { model, Schema } from "mongoose";

const orderSchema = new Schema({
    initialCutUsa: {
        type: Number,
        required: true
    },

    initialCutCol: {
        type: Number,
    },

    sellerSamples: {
        type: Number,
        required: true
    },

    totalUnits: {
        type: Number
    }
});

export default model( 'Orders', orderSchema, 'orders' );