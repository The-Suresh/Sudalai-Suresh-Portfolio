const express = require('express');
const router = express.Router();
const { getProjects, createProject, updateProject, deleteProject } = require('../controllers/project.controller');
// const { protect } = require('../middleware/auth.middleware'); 

// Public routes
router.get('/', getProjects);

// Protected routes (Add middleware later)
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

module.exports = router;
