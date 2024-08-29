import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { upload } from "../middlewares/multer.middleware.js";
import { createEgo } from "../conntroller/ngo.controller.js";
import { getAllNgo } from "../conntroller/ngo.controller.js";

const ngoRoutes = Router();

// Route to create an NGO
ngoRoutes.route("/Create").patch(
    upload.single("ngoImage"),
    (req, res, next) => {
        console.log("Incoming request to /api/v1/ngo/Create with data:", {
            method: req.method,
            url: req.url,
            body: req.body,
            file: req.file,
        });
        next(); // Proceed to the createEgo controller after logging
    },
    createEgo
);

//get all ngo
ngoRoutes.route("/getAll").get( getAllNgo);


export { ngoRoutes };
