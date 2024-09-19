import express, { json } from 'express';
import dbconnect from '../db/config.js';
import userRoute from '../routes/user-route.js';
import collectionRoute from '../routes/collection-route.js';
import orderRoute from '../routes/order-route.js';
import referenceRoute from '../routes/product-route.js';
import cors from 'cors';

class Server {
    constructor() {
        this.app = express();
        this.pathUsers = "/users";
        this.pathCollections = "/collections";
        this.pathOrders = "/orders";
        this.pathReferences = "/references";
        this.listen();
        this.dbconnection();
        this.route();
    };

    route() {
        this.app.use(json());
        this.app.use(cors({
            origin: '*'
          }));
        // this.app.use(cors());
        this.app.use(this.pathUsers, userRoute);
        this.app.use(this.pathCollections, collectionRoute);
        this.app.use(this.pathOrders, orderRoute);
        this.app.use(this.pathReferences, referenceRoute);
    };

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log( 'Server is running' );
        });
    };

    async dbconnection() {
        await dbconnect();        
    };

};

export default Server;