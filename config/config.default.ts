import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {
    mongoose: {
      client: {
        url: 'mongodb://127.0.0.1:27017/blog',
        options: {},
      }
    },
    security: {
      csrf: {
        enable: false
      }
    },
    passportJwt: {
      secret: 'ILOVEU'
    }
  } as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1589465269877_8637';

  // add your egg config in here
  config.middleware = ['jwtRequire'];

  //不进行验证的名单
  config.noVerifyArray = ['/api/v1/login'];
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    defaultAvatar: '//blog-sso-1254604265.cos.ap-chengdu.myqcloud.com/image/ckN-343242777.jpg',
    auth_cookie_name: 'admin_club'
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
