import { Application } from 'egg'

export default (app: Application) => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const schemas = new mongoose.Schema({
    content: { type: String },
    topic_id: { type: Schema.Types.ObjectId},
    author_id: { type: Schema.Types.ObjectId, ref: 'User'},
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
    deleted: {type: Boolean, default: false},
    agree_count: { type: Number, default: 0 },
    against_count: { type: Number, default: 0 },
  })
  
  schemas.index({create_at: -1})
  schemas.index({topic_id: -1})
  

  return mongoose.model('blog_reply', schemas)
}