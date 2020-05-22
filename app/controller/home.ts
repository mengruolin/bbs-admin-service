import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    // let res = await ctx.service.user.getUserByLoginName("18039596250")
    // console.log(res);
    
    ctx.body = `<h1>admin bbb 后台管理系统</h1>`
  }
}
