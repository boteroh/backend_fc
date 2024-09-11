import { model, Schema } from "mongoose";

const collectionSchema = new Schema({
   nameCollection: {
    type: String,
    required: true
   },   

});