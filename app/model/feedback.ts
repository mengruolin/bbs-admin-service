import { Application } from 'egg'

export default (app: Application) => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const schemas = new mongoose.Schema({
    content: { type: String },
    author_id: { type: Schema.Types.ObjectId, ref: 'User'},
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
    deleted: {type: Boolean, default: false},
    is_resolve: {type: Boolean, default: false},
  })
  
  schemas.index({create_at: -1})

  return mongoose.model('feedback', schemas)
}