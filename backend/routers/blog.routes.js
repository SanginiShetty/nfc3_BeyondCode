import { Router } from "express";
import { createBlog, deleteBlog, getAllBlogs, updateBlog } from "../conntroller/blog.controller.js";


const userBlogRouter = Router();

userBlogRouter.route("/create").post(createBlog);
userBlogRouter.route("/getAll").get(getAllBlogs);
userBlogRouter.route("/update/:slug").put(updateBlog);
userBlogRouter.route("/delete/:slug").delete(deleteBlog);

export { userBlogRouter };