const express = require('express');
const router = express.Router();
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');
const { protect } = require('../middleware/auth');
const { taskValidation, validate } = require('../utils/validators');

// All routes require authentication
router.use(protect);

// Routes accessible by all authenticated users
router
  .route('/')
  .get(getTasks)
  .post(taskValidation, validate, createTask);

router
  .route('/:id')
  .get(getTask)
  .put(taskValidation, validate, updateTask)
  .delete(deleteTask); // Anyone can delete their own tasks

module.exports = router;