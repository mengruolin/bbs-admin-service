import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);

  //router.use('')
  router.get('/api/test', controller.home.index)
};
