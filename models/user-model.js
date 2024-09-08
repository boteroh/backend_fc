import { model, Schema } from "mongoose";

const userSchema = new Schema({
    documentId: {
        type: String,
        unique: true,
        required: true
    },

    names: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    area: {
        type: String,
        enum: [ 'Gerencia', 'Diseño', 'Desarrollo', 'Planeación', 'Compras', 'Comex' ],
        required: true
    },

    role: {
        type: String,
        enum: [ 'Admin', 'Supervisor', 'Operational' ],
        required: true
    },

    password: {
        type: String,
        required: true
    },

    userName: {
        type: String,
    }
});

export default model( 'Users', userSchema, 'users' );