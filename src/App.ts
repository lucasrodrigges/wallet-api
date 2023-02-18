import express, {Express} from 'express';
import cors from 'cors';
import 'express-async-errors';
import UserRouter from './Routes/Users';


export class App {
	
	constructor(public app: Express) {
		this.config();
		this.useRoutes();
	}

	public async config() {
		this.app.use(cors());
		this.app.use(express.json());
	}

	public useRoutes() {
		const user = new UserRouter();
		this.app.use('/users/', user.router);
	}
	
	public async start(PORT:string) {
		this.app.listen(PORT, () => (
			console.log(`Running at port ${PORT}`)
		));
	}
}

export const app = new App(express()); 
