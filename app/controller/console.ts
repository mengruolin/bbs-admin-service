import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async getConsoleInfo() {
    const { ctx } = this;
    
    ctx.body = {code: '0', data: [{'a': '车市'}]}
  }
}
