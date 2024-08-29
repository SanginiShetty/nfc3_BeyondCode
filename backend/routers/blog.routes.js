import { Router } from "express";
import { createBlog, deleteBlog, getAllBlogs, updateBlog } from "../conntroller/blog.controller.js";


const userBlogRouter = Router();

userBlogRouter.route("/create").post(createBlog);
userBlogRouter.route("/getAll").get(getAllBlogs);
userBlogRouter.route("/update/:id").put(updateBlog);
userBlogRouter.route("/delete/:id").delete(deleteBlog);

export { userBlogRouter };