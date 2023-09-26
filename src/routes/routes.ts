import { Router } from "express";
import { UserController } from "../controller/user";
import { db } from "../database/firebase";

export const router = Router();
const controller = new UserController();

router.get('/', controller.endpoint);
router.get('/users', controller.getUsers);
