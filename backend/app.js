import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true
}));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

import { userRouter } from "./routers/user.routes.js";
import { projectRouter } from "./routers/project.routes.js";
import { userDonation } from "./routers/donation.routes.js";
import { userBlogRouter } from "./routers/blog.routes.js";
import { InventoryRouter } from "./routers/inventory.routes.js";


app.use("/api/v1/auth", userRouter);
app.use("/api/v1/project",projectRouter)
app.use("/api/v1/donation", userDonation);
app.use("/api/v1/blog", userBlogRouter);
app.use('/api/v1/inventory', InventoryRouter);

export {app};