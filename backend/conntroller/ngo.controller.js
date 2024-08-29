import { asyncHandler } from "../utils/asyncHandler.js";
import { Ngo } from "../models/ngo.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const createEgo = asyncHandler(async (req, res) => {
    const {name , email, password, phone, address, ngoName, ngoRegNo, ngoType, ngoDesc} = req.body;


    console.log("req", req.file)

    const  ngoImage = req.file?.path;

    if(!ngoImage){
        throw new Error("Please upload an image")
    }

    const ngoimg = await uploadOnCloudinary(ngoImage)

    console.log("ngo image",ngoimg)

    if(!ngoimg){
        throw new Error("Image upload failed")
    }

    const ngo = await Ngo.findOne({
        $or: [{email}, {ngoRegNo}, {phone} , {ngoName}]
    })

    if(ngo){
        res.status(400)
        throw new Error("NGO already exists")
    }

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
        ngoImage: ngoimg.url || "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account"
    })

    if(!newNgo){
        res.status(400)
        throw new Error("Invalid NGO data")
    }

    return res
            .status(201)
            .json({
                message: "NGO created successfully",
                data: newNgo
            })

})

export { createEgo }