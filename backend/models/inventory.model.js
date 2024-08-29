import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        quantity: {
            type: Number,
            required: true,
            min: 0,
        },
        category: {
            type: String,
            trim: true,
        },
        location: {
            type: String,
            trim: true,
        },
        condition: {
            type: String,
            enum: ["New", "Good", "Needs Repair", "Damaged"],
            default: "Good",
        },
        dateAdded: {
            type: Date,
            default: Date.now,
        },
        lastUpdated: {
            type: Date,
            default: Date.now,
        },
        ngoId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Ngo",

        },
        assignedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", // or "Team", depending on your database structure
        },
    },
    {
        timestamps: true, // Automatically creates 'createdAt' and 'updatedAt' fields
    }
);

export const Inventory = mongoose.model("Inventory", inventorySchema);

