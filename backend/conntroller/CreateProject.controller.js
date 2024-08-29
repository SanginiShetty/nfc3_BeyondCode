import { Project } from "../models/project.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createProject = asyncHandler(async (req, res) => {
    try {
        const { name, startDate, endDate, description, members, image } =
            req.body;

        // Validate required fields
        if (!name || !startDate || !description || !members) {
            return res
                .status(400)
                .json({
                    message:
                        "Please provide all required fields: name, startDate, description, and members.",
                });
        }

        // Check if project already exists (optional)
        const existingProject = await Project.findOne({ name });
        if (existingProject) {
            return res
                .status(409)
                .json({ message: "A project with this name already exists." });
        }

        // Create the project
        const newProject = await Project.create({
            name,
            startDate,
            endDate,
            description,
            members,
            image,
        });

        res.status(201).json(newProject);
    } catch (error) {
        // Log the error for debugging purposes
        console.error(error);

        // Send a generic error response
        res.status(500).json({
            message: "An error occurred while creating the project.",
        });
    }
});

export { createProject };
