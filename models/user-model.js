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
        enum: [ 'Management', 'Design', 'Development', 'Planning', 'Purchasing', 'Import/Export' ],
        required: false
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
    },

    userStatus: {
        type: String,
        enum: [ 'Enable', 'Disable' ],
        default: "Enable"
    }    

},

{
    // timestamps: true,
    versionKey: false,
});

export default model( 'Users', userSchema, 'users' );