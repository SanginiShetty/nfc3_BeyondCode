import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { upload } from "../middlewares/multer.middleware.js";
import { createEgo } from "../conntroller/ngo.controller.js";


const ngoRoutes = Router()



ngoRoutes.route("/").patch(upload.single("ngoImage"), createEgo)


export { ngoRoutes }

