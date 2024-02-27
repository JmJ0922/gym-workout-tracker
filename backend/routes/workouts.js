const express = require('express');
const {createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout} = require('../controllers/workoutController');
const requireAuth = require('../middleware/requireauth');


const router = express.Router();

router.use(requireAuth)

//GET all workoutes
router.get('/', getWorkouts);

//GET a single workout
router.get('/:id', getWorkout);

//POST a new workout
router.post('/',createWorkout);

//DELETE a workout
router.delete('/:id',deleteWorkout);

//UPDATE a workout
router.patch('/:id',updateWorkout);


module.exports = router