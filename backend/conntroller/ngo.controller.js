import { asyncHandler } from "../utils/asyncHandler.js";
import { Ngo } from "../models/ngo.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const createEgo = asyncHandler(async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            phone,
            address,
            ngoName,
            ngoRegNo,
            ngoType,
            ngoDesc,
        } = req.body;

        console.log("Request body:", req.body);

        const ngoImage = req.file?.path;

        if (!ngoImage) {
            console.error("Error: No image uploaded");
            throw new Error("Please upload an image");
        }

        // Attempt to upload image to Cloudinary
        const ngoimg = await uploadOnCloudinary(ngoImage);
        console.log("Uploaded NGO image data:", ngoimg);

        if (!ngoimg) {
            console.error("Error: Image upload failed");
            throw new Error("Image upload failed");
        }

        // Check if NGO already exists
        const ngo = await Ngo.findOne({
            $or: [{ email }, { ngoRegNo }, { phone }, { ngoName }],
        });

        if (ngo) {
            console.error("Error: NGO already exists");
            res.status(400);
            throw new Error("NGO already exists");
        }

        // Create new NGO
        const newNgo = await Ngo.create({
            name,
            email,
            password,
            phone,
            address,
            ngoName,
            ngoRegNo,
            ngoType,
            ngoDesc,
            ngoImage:
                ngoimg.url ||
                "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account",
        });

        if (!newNgo) {
            console.error("Error: Invalid NGO data");
            res.status(400);
            throw new Error("Invalid NGO data");
        }

        console.log("New NGO created:", newNgo);

        return res.status(201).json({
            message: "NGO created successfully",
            data: newNgo,
        });
    } catch (error) {
        console.error("Error in createEgo function:", error.message);
        res.status(500).json({ message: error.message });
    }
});

//get all ngos
const getAllNgo = asyncHandler(async (req, res) => {
    try {
        const ngos = await Ngo.find().sort({ createdAt: -1 })
        console.log("All ngos:", ngos);
        res.status(200).json({ ngos });
    } catch (error) {
        console.error("Error in getAllNgo function:", error.message);
        res.status(500).json({ message: error.message });
    }
});

export { createEgo ,getAllNgo};
