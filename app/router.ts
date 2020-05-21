import { Application } from 'egg'
import apiRouter from './router/api'

export default (app: Application) => {
  const { controller, router } = app

  apiRouter(app)
  router.get('/', controller.home.index);
  
  router.post('/login', app.passport.authenticate('local'))
};
