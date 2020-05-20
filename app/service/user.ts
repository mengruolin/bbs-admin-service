import { Service } from 'egg';

/**
 * User Service
 */
export default class User extends Service {

  /**
   * name
   */
  public async getUserByLoginName(userName: string) {
    try {
      const res = await this.ctx.model.adminUser.findOne({userName})
      return res
    } catch (error) {
      
    }
  }

  public async sayHi() {
    return {code: 0, data: [1,2,3]};
  }
}
