import { type Router } from 'express';
import User from '../controllers/User';

export default class UserRoute {
  constructor(public router: Router) {
    this.routes();
  }

  public routes() {
    this.router.get('/', User.findAll);
    this.router.post('/', User.create);
  }
}
