import Collections from "../models/collection-model.js";

// POST ---> CREATE COLLECTION
export async function createCollection(req, res) {
    let msg = 'Collection created successfully';
    try {
        const body = req.body;

        const { nameCollection, delivery, group } = req.body;

        // Verification that the required fields are not left empty or null
        if ( !nameCollection || !delivery || !group ){
            return res.status(400).json({ msg: "Please enter the complete information" });
        } else {
            const collections = new Collections(body);

            collections.nameCollection = nameCollection;
            collections.delivery = delivery;
            collections.group = group;
            
            // Concatenar primeras 3 letras del grupo y pasarle un número randon entre 650 y 820 y una letra random entre S, T, F, B, R
            await collections.save();
        }

    } catch (error) {
        msg = error.message
    }
    res.json({ msg: msg });
};


// GET ---> LIST ALL COLLECTIONS
export async function listCollections (req, res) {
    try {
        const collections = await Collections.find();
        res.json(collections);
    } catch (error) {
        res.status(500).json({ msg: error.message });        
    }
};

// GET ---> VIEW A SINGLE COLLECTION
export async function findCollection (req, res) {
    try {
        const { nameCollection } = req.body;

        if ( !nameCollection ) {
            return res.status(404).json({ msg: 'Collection not found' });
        }

        const collection = await Collections.findOne({ nameCollection: nameCollection });

        if ( !collection ) {
            return res.status(404).json({ msg: 'Collection not found' });
        }
        return res.json(collection);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// PUT ---> EDIT COLLECTION
export async function editCollection (req, res) {

};

