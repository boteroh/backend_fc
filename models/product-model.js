import { model, Schema } from "mongoose";

const productSchema = new Schema({ 
    reference: {
        type: String,
        required: true,
    },

    styeDescription: {
        type: String,
        required: true
    },

    line: {
        type: String,
        enum: [ 'Swimwear top', 'Swimwear bottom', 'Cover up' ]
    },
});

export default model( 'Products', productSchema, 'products' );