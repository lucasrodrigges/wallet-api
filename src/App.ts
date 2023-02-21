import express, {Express, Router} from 'express';
import cors from 'cors';
import 'express-async-errors';
import UserRouter from './routes/Users';

export class App {

	constructor(public app: Express, public router: Router) {
		this.config();
		this.useRoutes();
	}

	public async config() {
		this.app.use(cors());
		this.app.use(express.json());
	}

	public useRoutes() {
		const user = new UserRouter(this.router);
		this.app.use('/users/', user.router);
	}
	
	public async start(PORT:number) {
		this.app.listen(PORT, () => (
			console.log(`Running at port ${PORT}`)
		));
	}
}

export const app = new App(express(), Router());