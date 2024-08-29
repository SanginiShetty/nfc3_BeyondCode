import mongoose from "mongoose";

const ngoSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        ngoName: {
            type: String,
            required: true,
        },
        ngoRegNo: {
            type: String,
            required: true,
        },
        ngoType: {
            type: String,
            required: true,
        },
        ngoDesc: {
            type: String,
            required: true,
        },
        ngoMember: {
            type: Number,
            required: false,
        },
        donation: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "donation",
        }],
        projects: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project",
        }],
        ngoImage: {
            type: String,
            default: "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account"
        }
    },
    { timestamps: true }
);

export const Ngo = mongoose.model("Ngo", ngoSchema);