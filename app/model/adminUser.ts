import { Application } from 'egg'

export default (app: Application) => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const schemas = new Schema({
    username: String,//用户名
    password: String,//密码
  })

  return mongoose.model('AdminUser', schemas)
}