import { Application } from 'egg'

export default (app: Application) => {

  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const adminUserSchema = new Schema({
    userName: {type: String, required: true},
    password: {type: String, required: true},
    create_at: {type: Date, default: new Date},
    power: {type: Array, default: []}
  })

  return mongoose.model('adminUser', adminUserSchema)
}