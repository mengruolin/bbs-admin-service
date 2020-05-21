import { Controller } from 'egg';

export default class UserController extends Controller {
  public async login() {
    const { ctx } = this;
    
    ctx.body = ctx.user
  }
}
