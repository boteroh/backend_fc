import mongoose, { model, Schema } from "mongoose";

const collectionSchema = new Schema({
   nameCollection: {
    type: String,
    required: true,
    unique: true
   },

   delivery: {
      type: String,
      enum: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
      required: true
   },

   products: [{
      type: mongoose.Schema.Types.ObjectId, ref: 'Products'
   }]

},

{
   versionKey: false
});

export default model( 'Collections', collectionSchema, 'collections' );