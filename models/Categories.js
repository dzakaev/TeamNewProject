const {Schema, model} = require("mongoose")

const Categories = new Schema({
  name: String,
  createdAt: Date,
  updatedAt: Date
})

module.exports = model('Categories', Categories)