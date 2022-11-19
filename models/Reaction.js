const { Schema, Types } = require('mongoose');


// Schema to create Student model
const reactionSchema =  new Schema(
  {
    reactionId: {
      type: Schema.Type.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
    },
    username: {
      type: String, 
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
     get: time => new Date(time).toLocaleString()
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);


module.exports = reactionSchema;
