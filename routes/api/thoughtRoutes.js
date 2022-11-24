const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  createReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// // /api/thoughts/:thoughtId
// router.route('/:username/thoughts').post(addThought);

// // /api/thoughts/:thoughtId
// router.route('/:username/thoughts/:thoughtText').delete(removeThought);

router.route('/:thoughtId/reactions').post(createReaction);

router
  .route('/:thoughtId')
  .put(updateThought);


module.exports = router;
