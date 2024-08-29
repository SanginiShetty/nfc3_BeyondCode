import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            index: true, // Indexing name can be useful for search operations
        },
        startDate: {
            type: Date,
            required: true,
            index: true,
        },
        endDate: {
            type: Date,
            required: true,
            index: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        
        image:{
            type: String,
            required: true,
            trim: true,
        },
        members: [
            {
                // Changed to members and an array to support multiple users
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    {
        timestamps: true, // Adds createdAt and updatedAt timestamps automatically
    }
);

export const Project = mongoose.model("Project",projectSchema)