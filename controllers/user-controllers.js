import Users from "../models/user-model.js";
import bcrypt from 'bcryptjs';

// POST ---- CREATE USER
export async function createUser (req, res) {
    let msg = "User created succesfully";
    try {
        const body = req.body;

        const { documentId, names, lastName, area, role, password } = req.body;
        

        // Verification that the required fields are not left empty or null
        if ( !documentId || !names || !lastName || !area || !role || !password ) {
            return res.status(400).json({ msg: "Please enter the complete information" });
        }

        // Password character validation
        if ( password.length <4 || password.length > 10 ) {
            return res.status(400).json({ msg: 'The password must contain a minimum of 4 characters and a maximum of 10' });
        }

        const existUser = await Users.findOne({ documentId });

        if ( existUser ) {
            return res.status(400).json({ msg: 'User already exists, please enter a valid document' });
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

// GET ---> LIST ALL USERS
export async function listUsers (req, res) {
    try {
        const users = await Users.find();
        res.json({ users });
    } catch (error) {
        res.status(500).json({ msg: error.message });        
    }
};

// GET ---- FIND ONE USER
export async function findUser (req, res) {
    try {
        const { documentId } = req.query;
        if ( !documentId ) {
            return res.status(404).json({ msg: 'User not foud' });
        }

        const user = await Users.findOne({ documentId });

        if (!user) {
            return res.status(400).json({ msg: 'User not found' });
        }
        return res.json(user);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// PUT ---- UPDATE ONE USER (personal data)
export async function updateUser (req, res) {
    let msg = 'User data updated successfully';

    try {
        const { documentId, names, lastName, area, role } = req.body;

        if (!documentId ) {
            return res.status(404).json({ message: 'User not found' });
        }
        const user = await Users.findOne({ documentId: documentId });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        } else {
            user.names = names;
            user.lastName = lastName;
            user.area = area;
            user.role = role;
            user.userName = `${names.toLowerCase().replace(/\s+/g, '.')}.${lastName.toLowerCase()}`;

            await user.save();
            return res.status(200).json({ message: msg });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

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
    
            await user.save();
            return res.status(200).json({ message: msg });
        }

    } catch (error) {
       return res.status(500).json({ message: error.message });
    }
};