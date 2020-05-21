import { Application } from 'egg';


export default (app: Application) => {
  const { controller, router } = app
  
  router.get('/api/login', controller.user.login)
}