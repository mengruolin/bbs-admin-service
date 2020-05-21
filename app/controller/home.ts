import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    // let res = await ctx.service.user.getUserByLoginName("18039596250")
    // console.log(res);
    
    ctx.body = await ctx.service.test.sayHi();
  }
}
