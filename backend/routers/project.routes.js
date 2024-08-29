import {Router} from 'express';
import { verifyJWT } from '../middlewares/auth.middlewares.js';
import {createProject} from "../conntroller/CreateProject.controller.js"


const projectRouter = Router();
projectRouter.post('/create',  createProject);

export {projectRouter}
