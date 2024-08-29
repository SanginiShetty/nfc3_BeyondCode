import { asyncHandler } from "../utils/asyncHandler.js";
import { Donation } from "../models/donation.model.js";

const createDonation = asyncHandler(async (req, res,  next) => {
    const {amount, donor, ngo} = req.body;

    if(!amount || !donor || !ngo) {
        return next(new Error("All fields are required"));
    }
    
    const donation = await Donation.create({amount, donor, ngo});

    if(!donation) {
        return next(new Error("Invalid donation data"));
    }

    return res
    .status(200)
        .json({
            message: "Donation successful",
            donation
        })
})

export { createDonation }