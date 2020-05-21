import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async getTopic() {
    const { ctx } = this;
    
    
    ctx.body = await ctx.model.User.findOne()
  }
}
