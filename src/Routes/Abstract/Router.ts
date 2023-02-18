import express from 'express';

export default abstract class Router {
	public router: express.Router;

	constructor() {
		this.router = express.Router();
	}
}