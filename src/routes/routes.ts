import { Router } from "express";
import { Controller } from "../controller/control";

export const router = Router();
const controller = new Controller();

router.get('/', controller.endpoint);