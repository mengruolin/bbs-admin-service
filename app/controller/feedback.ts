import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async getFeedback() {
    const { ctx } = this
    const { _id, author_id, title, tab, index, pages } = ctx.query
    const searchParams = ctx.helper.searchParamsFormat({ _id, author_id, title, tab})
    const sortRule = {update_at: -1}
    const pagingParams = ctx.helper.pagingParamsFormat({index, pages})
    
    const dataCount = await ctx.service.db.getDataCount('Feedback', searchParams)
    const feedbacks = await ctx.service.db.getPagingDate('Feedback', searchParams, sortRule, pagingParams)
    
    ctx.body = {code: '0', data: {list: feedbacks, count: dataCount}}
  }

  public async deleteOneFeedback() {
    const { ctx } = this
    const { topicId } = ctx.request.body

    const data = await ctx.service.db.deleteOneData('Feedback', topicId)

    ctx.body = data ? {code: '0', msg: 'success'} : {code: 999, msg: '删除失败'}
  }
}
