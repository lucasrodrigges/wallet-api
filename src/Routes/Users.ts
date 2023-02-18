import {Request, Response} from 'express';
import Router from './Abstract/Router';

export default class UserRoute extends Router {
	constructor() {
		super();
		this.routes();
	}

	public routes() {
		this.router.get('/', (_req: Request, res: Response) => {
			res.status(200).json('oi');
		});
	}
}