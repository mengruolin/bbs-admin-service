import { Application, Context } from 'egg'
import { Strategy as LocalStrategy } from 'passport-local'

export default (app: Application) => {
  const localHandler = async (ctx: Context, {username, password}) => {

    const getUser = username => ctx.service.user.getUserByLoginName(username)
    const existUser: any = await getUser(username)

    if (!existUser) return null
    if (existUser.password !== password) return null

    return existUser
  }

  app.passport.use(new LocalStrategy({
      passReqToCallback: true,
    }, async (req, username, password, done) => {
    // format user
      if (!username || !password) { 
        return done(null, false, {code: 0, message: '缺少参数'})
      }
      
      const user = {
        provider: 'local',
        username,
        password,
      };
      //debug('%s %s get user: %j', req.method, req.url, user);
      const verifyRes: any = await app.passport.doVerify(req, user, done)
      console.log(verifyRes)
      
  }))


  //处理用户信息
  app.passport.verify(async (ctx: Context, user) => {
    const handler = user.provider === 'local' ? localHandler : () => {}
    const existUser = await handler(ctx, user);

    console.log(existUser);
    
    if (!existUser) {
      console.log(111);
      
      return {code: '999', msg: '用户不存在'} 
    }

    const auth_token = existUser._id + '$$$$'
    const opts = {
      path: '/',
      maxAge: 1000 * 60 * 60,
      signed: true,
      httpOnly: true,
    };
    ctx.cookies.set(app.config.auth_cookie_name, auth_token, opts);

    return existUser
  })
  app.passport.serializeUser(async () => {});
  app.passport.deserializeUser(async () => {});

  // app.passport.deserializeUser(async (ctx: Context, user) => {
  //   if (user) {
  //     const auth_token = ctx.cookies.get(ctx.app.config.auth_cookie_name, {
  //       signed: true,
  //     })

  //     if (!auth_token) {
  //       return user;
  //     }

  //     const auth = auth_token.split('$$$$');
  //     const user_id = auth[0];
  //     user = await ctx.service.user.getUserByLoginName(user_id);

  //     if (!user) {
  //       return user;
  //     }

      // if (ctx.app.config.admins.hasOwnProperty(user.loginname)) {
      //   user.is_admin = true;
      // }
  //   }

  //   return user
  // })
}