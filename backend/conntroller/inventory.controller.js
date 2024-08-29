import { asyncHandler } from "../utils/asyncHandler.js";
import { Inventory } from "../models/inventory.model.js";

const addToInventory = asyncHandler(async (req, res, next) => {
    const {
        name,
        description,
        quantity,
        category,
        location,
        condition,
        assignedTo,
        ngoId,
    } = req.body;

    if (
        !name ||
        !quantity ||
        !category ||
        !location ||
        !condition ||
        !ngoId||
        !assignedTo
    ) {
        return next(new Error("All fields are required"));
    }

    const inventory = await Inventory.create({
        name,
        description,
        quantity,
        category,
        location,
        condition,
        ngoId,
        assignedTo,
    });

    if (!inventory) {
        return next(new Error("Invalid inventory data"));
    }

    return res.status(200).json({
        message: "Inventory added successfully",
        inventory,
    });
});

export { addToInventory };
