import { model, Schema } from "mongoose";

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

   group: {
      type: String,
      required: true
   },

},

{
   versionKey: false
});

export default model( 'Collections', collectionSchema, 'collections' );