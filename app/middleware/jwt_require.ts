'use strict';

import { Context, EggAppConfig } from 'egg'
const jwt = require('jsonwebtoken')

export default () => {
  return async (ctx: Context, next: () => Promise<any>) => {
    const config: EggAppConfig = ctx.app.config
    if (config.noVerifyArray.includes(ctx.request.url)) {
      return await next()
    }
    console.log(ctx.headers.authorization);
    
    let token: string = ''
    if (
      ctx.headers.authorization && ctx.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
      token = ctx.headers.authorization.split(' ')[1];
    } else if (ctx.query.accesstoken) {
      token = ctx.query.accesstoken
    } else if (ctx.request.body.accesstoken) {
      token = ctx.request.body.accesstoken
    }

    //没有携带请求头 
    if (token === '') {
      return ctx.body = {code: '999', msg: '未携带 Token'}
    }


    try {

      const tokenInfo: any = await new Promise((resolve, reject) => {
        jwt.verify(token, config.passportJwt.secret,(err, res) => {
          if (err) reject(err)
          resolve(res)
        })
      })

      const {username, password} = tokenInfo
      const existUser: any = await ctx.service.user.getUserByLoginName(username)

      if (!existUser) {
        return ctx.body = {code: '999', msg: '用户不存在'}
      }

      if (existUser.password !== password) {
        return ctx.body = {code: '999', msg: '登陆失效'}
      }
      
      ctx.user = existUser
    } catch (error) {
      ctx.logger.error(error)
      return ctx.body = {code: '999', msg: '未知错误'}
    }

    await next();
  }
}
