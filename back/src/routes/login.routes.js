import { Router } from "express";
const router = Router();

import loginControllers from "../controllers/login.controllers.js";

router.post("/", loginControllers.login);

export default router;