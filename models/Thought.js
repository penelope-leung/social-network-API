const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction')
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlenght: 1,
      maxlenght: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
     get: time => new Date(time).toLocaleString()
    },
    username: {
      type: String,
      required: true
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length  
})
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
