import { Application } from 'egg'

export default (app: Application) => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const schemas =  new Schema({
    content: { type: String },
    topic_id: { type: Schema.Types.ObjectId},
    author_id: { type: Schema.Types.ObjectId, ref: 'User'},
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
    deleted: {type: Boolean, default: false},
    is_adopted: {type: Boolean, default: false},
  })
  
  schemas.index({create_at: -1})
  schemas.index({topic_id: -1})

  return mongoose.model('bbs_reply', schemas)
}