import express, { Express, Router } from 'express';
import cors from 'cors';
import 'express-async-errors';
import knex from './database/config';
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
    this.app.listen(PORT, async () => {
      try {
        await knex.raw('SELECT 1');
        console.log(`Running at port ${PORT} and database connected`);
      } catch (error) {
        console.log(error);
      }
    });
  }
}

export const app = new App(express(), Router());
