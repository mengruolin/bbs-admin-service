import { Application } from 'egg';


export default (app: Application) => {
  const { controller, router } = app
  const _namespace = (url: string): string => `/api/v1/${url}`

  router.post(_namespace('login'), controller.user.login)

  router.post(_namespace('logout'), controller.user.logout)

  router.get(_namespace('bbs/getTopic'), controller.bbs.getTopic)
  //router.get(_namespace('blog/getTopic'), controller.bbs.getTopic)

  //
  router.get(_namespace('getConsoleInfo'), controller.console.getConsoleInfo)

  //
  router.post(_namespace('bbs/deleteOneTopic'), controller.bbs.deleteOneTopic)

  router.post(_namespace('feedback/getFeedback'), controller.feedback.getFeedback)

  router.post(_namespace('feedback/deleteOneFeedback'), controller.feedback.deleteOneFeedback)
}