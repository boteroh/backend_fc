import express, { json } from 'express';
import dbconnect from '../db/config.js';
import userRoute from '../routes/user-route.js';

class Server {
    constructor() {
        this.app = express();
        this.pathUsers = "/";
        this.listen();
        this.dbconnection();
        this.route();
    };

    route() {
        this.app.use(json());
        this.app.use(this.pathUsers, userRoute);
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