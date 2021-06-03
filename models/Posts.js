const { Schema, model} = require('mongoose');


const schema = new Schema ({
    title: {
        type: String,
        required:true
    },
    category : {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    }
})

const posts = model('post', schema)

model.exports = posts