import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  static: true,
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  passport: {
    enable: true,
    package: 'egg-passport',
  },
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
};

export default plugin;
