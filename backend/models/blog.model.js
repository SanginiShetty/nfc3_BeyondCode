import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        
        blogImage: {
            type: String,
            default:
                "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account",
        },
        tags: {
            type: [String],
            required: true,
        },
        author: {
            type: mongoose.Schema.Types.String,
            ref: "User",
            required: true,
        },
        comments: [
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                    required: true,
                },
                comment: {
                    type: String,
                    required: true,
                },
                createdAt: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        excerpt: {
            type: String,
            trim: true,
        },
    },
    { timestamps: true }
);

export const Blog = mongoose.model("Blog", blogSchema);
