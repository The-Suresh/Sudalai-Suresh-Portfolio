const Project = require('../models/Project');

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @desc    Create a project
// @route   POST /api/projects
// @access  Private (Admin)
exports.createProject = async (req, res) => {
    const { title, description, image, techStack, githubLink, liveLink, category } = req.body;

    try {
        const newProject = new Project({
            title,
            description,
            image,
            techStack,
            githubLink,
            liveLink,
            category
        });

        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Private (Admin)
exports.updateProject = async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private (Admin)
exports.deleteProject = async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.json({ message: 'Project deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
