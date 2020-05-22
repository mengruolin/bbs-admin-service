import { Service } from 'egg';

export default class Db extends Service {

  /**
   * 
   * @param modelName 数据库模型
   * @param parmas 查询参数
   */
  /**
   * 获取数据库数据量
   * getDataCount {}
   */
  public async getDataCount(modelName: string, parmas: Object) {
    const { ctx } = this

    try {
      const count: number = await ctx.model[modelName].count({...parmas, deleted: false})

      return count ? count : 0
    } catch (error) {
      ctx.logger.error(error)
    }
  }

  /**
   * 获取数据库分页数据
   * pagingParmas: {skip: number, limit: number}
   * getPagingDate {}
   */
  public getPagingDate( 
    modelName: string,
    parmas: object,
    sortRule: object,
    pagingParmas: any
    ) {
    const { ctx } = this
    try {
      const data = ctx.model[modelName]
                    .find({...parmas, deleted: false})
                    .sort(sortRule)
                    .skip(pagingParmas.skip)
                    .limit(pagingParmas.limit)
                    .populate({path: 'author_id', select: ['_id', 'avatarUrl', 'nickName']})
                    .exec()
      
      return data ? data : null
    } catch (error) {
      ctx.logger.error(error)
    }
  }

  public async deleteOneData(modelName: string, _id: string) {
    const { ctx } = this
    try {
      const data = ctx.model[modelName]
                    .updateOne({_id}, {deleted: true})
                    .exec()
      return data ? data : null
    } catch (error) {
      ctx.logger.error(error)
    }
  }
}
