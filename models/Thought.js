const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction')
const thoughtSchema = new Schema(
  {
    thougthText: {
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

const Thought = model('course', courseSchema);

module.exports = Course;
