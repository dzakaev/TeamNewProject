const { Schema, model} = require('mongoose');
const  schema = new Schema ({
  text: {
    type: String
  },
  post: {
    ref: 'Posts',
    type: Schema.Types.ObjectId
  },
  createdAt: {
    type: Date
},
  updatedAt: {
    type: Date
  }
})
module.exports = model('comment', schema)
