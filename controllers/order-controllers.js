import Orders from "../models/order-model.js";

// POST ---> CREATE ORDER
export async function createOrder (req, res) {
    let msg = 'Order created succesfully';
    try {
        const body = req.body;
        const { initialCutUsa, initialCutCol, sellerSamples } = req.body;

        if ( !initialCutUsa || !initialCutCol || !sellerSamples ){
            return res.status(400).json({ msg: 'Please enter the complete information' });
        } else {
            const orders = new Orders(body);

            orders.initialCutUsa = initialCutUsa;
            orders.initialCutCol = initialCutCol;
            orders.sellerSamples = sellerSamples;
            orders.totalUnits = (initialCutUsa + initialCutCol + sellerSamples);
            
            await orders.save();
        }

    } catch (error) {
        msg = error.message;
    }
    res.json({ msg: msg });
};

// GET ---> VIEW A SINGLE ORDER
export async function findOrder (req, res) {

};

// GET ---> LIST ALL ORDERS
export async function listOrders (req, res) {
    try {
        const orders = await Orders.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// PUT ---> EDIT A SINGLE ORDER
export async function editOrder (req, res) {
    let msg = 'Order updated succesfully';
    try {
        const { _id, initialCutUsa, initialCutCol, sellerSamples } = req.body;

        if ( !initialCutUsa || !initialCutCol || !sellerSamples ) {
            return res.status(404).json({ msg: 'Order not found' });
        }

        const order = await Orders.findOne({ _id: _id })

        if ( !order ){
            return res.status(404).json({ msg: 'Order not found' });
        } else {
            order.initialCutUsa = initialCutUsa;
            order.initialCutCol = initialCutCol;
            order.sellerSamples = sellerSamples;

            await order.save();
            return res.status(200).jsoon({ message: msg });
        }
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

// DELETE ---> DELETE A SINGLE ORDER
export async function deleteOrder (req, res) {
    
};