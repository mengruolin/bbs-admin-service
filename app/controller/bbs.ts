import { Controller } from 'egg';

export default class HomeController extends Controller {
/**
 * @param dbModel db 对象模型
 */
  public async getTopic() {
    const { ctx } = this
    const { _id, author_id, title, tab, index, pages } = ctx.query
    const searchParams = ctx.helper.searchParamsFormat({ _id, author_id, title, tab})
    const sortRule = {update_at: -1}
    const pagingParams = ctx.helper.pagingParamsFormat({index, pages})
    
    const dataCount = await ctx.service.db.getDataCount('BbsTopic', searchParams)
    const topics = await ctx.service.db.getPagingDate('BbsTopic', searchParams, sortRule, pagingParams)
    
    ctx.body = {code: '0', data: {list: topics, count: dataCount}}
  }

  public async deleteOneTopic() {
    const { ctx } = this
    const { topicId } = ctx.request.body

    const data = await ctx.service.db.deleteOneData('BbsTopic', topicId)

    ctx.body = data ? {code: '0', msg: 'success'} : {code: 999, msg: '删除失败'}
  }
}
