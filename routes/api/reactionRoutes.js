const router = require('express').Router();
const {
  getReactions,
  getSingleReaction,
  createReaction,
  updateReaction,
  deleteReaction,
} = require('../../controllers/reactionController');

// /api/reacations
router.route('/').get(getReactions).post(createReaction);

// /api/reactions/:courseId
router
  .route('/:thoughtId')
  .get(getSingleReaction)
  .put(updateReaction)
  .delete(deleteReaction);

module.exports = router;
