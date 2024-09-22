import Collection from "../models/collection-model.js"
import Products from "../models/product-model.js";

// POST ---> Create references
export async function createReference (req, res) {
    let msg = 'Reference created succesfully';
    try {
        const { reference, styleDescription, line, nameCollection } = req.body;

        if ( !reference || !styleDescription || !line || !nameCollection ) {
            return res.status(400).json({ msg: 'Please enter the complete information' });
        } else {

            // find collection
            const collection = await Collection.findOne({ nameCollection });
            if ( !collection ) {
                return res.status(404).json({ msg: 'Collection not found' });
            }

            // Create product and add to collection
            const product = new Products({
                reference,
                styleDescription,
                line,
    
                collection: collection._id
            });

            await collection.save();
            console.log(collection);

            collection.reference.push(product._id);
            await collection.save()

            res.json({ msg: 'Product created and assigned to collection succesfully' });
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });   
    }
    res.json({ msg: msg });
}

// GET ---> View a single reference
export async function viewReference (req, res) {
    
};

// GET ---> List all reference
export async function listReferences (req, res) {

};

// PUT ---> Update reference
export async function updateReference (req, res) {

};

// DELETE ---> Delete reference
export async function deleteReference (req, res) {
    
};