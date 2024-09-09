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
export async function findUser (req, res) {
    try {
        const { documentId } = req.body;
        if ( !documentId ) {
            res.status(404),json({ msg: 'User not foud' });
        }

        const user = await Users.findOne({ documentId: documentId });

        if (!user) {
            return res.status(400).json({ msg: 'User not found' });
        }
        return res.json(user);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// PUT ---- UPDATE ONE USER (personal data)




// PUT ---- CHANGE STATUS ONE USER
export async function changeStatus (req, res) {
    let msg = 'User successfully disabled, remember that you will not be able to perform actions within the system';

    try {
        const { documentId, userStatus } = req.body;

        if ( !documentId || !userStatus) {
            return res.status(404).json({ message: 'User not found' });
        }
        const user = await Users.findOne({ documentId: documentId });
        
        if ( !user ) {
            return res.status(404).json({ msg: 'User not found' });
        } else {
            user.userStatus = userStatus;
            console.log(user.userStatus);
    
            await user.save();
            return res.status(200).json({ message: msg });
        }

    } catch (error) {
       return res.status(500).json({ message: error.message });
    }
};