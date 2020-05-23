/**
 * 查询参数格式化
 * @param params 
 */
const searchParamsFormat = (params): object => {
  let newParams = {}

  Object.keys(params).forEach((key: string) => {
    if (params[key]) newParams[key] = params[key]
  })

  return newParams
}

/**
 * 分页参数格式化
 * @param params 
 */
const pagingParamsFormat = (params): object => {

  const index = parseInt(params.index)
  const pages = parseInt(params.pages)

  return {
    skip: (index-1) * pages,
    limit: pages
  }
}

export default {
  searchParamsFormat,
  pagingParamsFormat
}