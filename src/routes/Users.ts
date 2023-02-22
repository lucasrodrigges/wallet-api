import { type Router } from 'express';
import User from '../controllers/User';
import { login, newUser } from '../middlewares/schemas/User';
import validation from '../middlewares/validation';

export default class UserRoute {
  constructor(public router: Router) {
    this.routes();
  }

  public routes() {
    this.router.get('/', User.findAll);
    this.router.post('/', validation(newUser), User.create);
    this.router.post('/login', validation(login), User.login);
    this.router.delete('/:userId', User.remove);
  }
}
