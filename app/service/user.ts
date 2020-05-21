import { Service } from 'egg';

/**
 * User Service
 */
export default class User extends Service {

  /**
   * name
   */
  public async getUserByLoginName(username: string) {
    const { ctx } = this
    try {
      const res = await ctx.model.AdminUser.findOne({username})
      return res

    } catch (error) {
      //console.log(error);
    }
  }

  public async sayHi() {
    return {code: 0, data: [1,2,3]};
  }
}
