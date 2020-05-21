import { Application } from 'egg';


export default (app: Application) => {
  const { controller, router } = app
  const _namespace = (url: string): string => `/api/v1/${url}`

  router.post(_namespace('login'), controller.user.login)
  router.get(_namespace('bbs/getTopic'), controller.bbs.getTopic)
}