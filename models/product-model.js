import mongoose, { model, Schema } from "mongoose";

const productSchema = new Schema({ 
    reference: {
        type: String,
        required: true,
    },

    styleDescription: {
        type: String,
        required: true
    },

    line: {
        type: String,
        enum: [ 'Swimwear top', 'Swimwear bottom', 'Cover up' ]
    },

    collection: { type: mongoose.Schema.Types.ObjectId, ref: 'Collections', required: true 

    },

    order: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Orders'
    }
},

{
    versionKey: false
});

export default model( 'Products', productSchema, 'products' );