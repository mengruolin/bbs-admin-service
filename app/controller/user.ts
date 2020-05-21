import { Controller } from 'egg';
// import jwt from 'jsonwebtoken'
const jwt = require('jsonwebtoken')

export default class UserController extends Controller {
  public async login() {

    const { ctx, config, logger } = this;
    try {
      const {username, password} = ctx.request.body

      if (!username || !password) ctx.body = {code: '999', msg: '缺少相关参数'}

      const userInfo: any = await ctx.model.AdminUser.findOne({username})

      if (!userInfo) return ctx.body = {code: '999', msg: '用户名不存在'}
      if (userInfo.password !== password) return ctx.body = {code: '999', msg: '用户名或密码错误'}

      const token: any = await new Promise((resolve, reject) => {
        jwt.sign({username, password}, config.passportJwt.secret, {expiresIn:3600}, (err, token) => {
          if (err) reject(err)
          resolve(token)
        })
      })

      ctx.body = {code: '0', access_token: token, msg: '登陆成功'}
    } catch (error) {
      logger.error(error)
      return ctx.body = {code: '999', msg: '未知异常'}
    }
  }

  /**
   * profile
   */
  public profile() {
    const { ctx } = this
    //console.log(ctx.user);
    
    ctx.body = {code: '0', user: ctx.user}
  }
}
