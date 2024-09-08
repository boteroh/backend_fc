import Users from "../models/user-model.js";
import bcrypt from 'bcryptjs';

// POST ---- CREATE USER
export async function createUser (req, res) {
    let msg = "User created succesfully";
    try {
        const body = req.body;

        // Comprobación de que los campos requeridos no queden vacíos o nulos
        const { documentId, names, lastName, area, role, password } = req.body;
        if ( !documentId || !names || !lastName || !area || !role || !password ) {
            return res.status(400).json({ msg: "Please enter the complete information" });
        }

        // Validación de caracteres de la contraseña
        if ( password.length <4 || password.length > 10 ) {
            return res.status(400).json({ msg: 'The password must contain a minimum of 4 characters and a maximum of 10' });
        }

        const users = new Users(body);

        users.password = await bcrypt.hash(`${ users.documentId }`, 5);
        users.userName = `${names.toLowerCase()}.${lastName.toLowerCase()}`; // Cerate user name
        await users.save();
    } catch (error) {
        msg = error.message
    }
    res.json({ msg: msg });
};


// GET ---- FIND ONE USER



// PUT ---- UPDATE ONE USER




// PUT ---- CHANGE STATUS ONE USER