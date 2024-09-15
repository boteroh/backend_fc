import express, { json } from 'express';
import dbconnect from '../db/config.js';
import userRoute from '../routes/user-route.js';
import collectionRoute from '../routes/collection-route.js';
import orderRoute from '../routes/order-route.js';

class Server {
    constructor() {
        this.app = express();
        this.pathUsers = "/";
        this.pathCollections = "/collections";
        this.pathOrders = "/orders";
        this.listen();
        this.dbconnection();
        this.route();
    };

    route() {
        this.app.use(json());
        this.app.use(this.pathUsers, userRoute);
        this.app.use(this.pathCollections, collectionRoute);
        this.app.use(this.pathOrders, orderRoute);
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