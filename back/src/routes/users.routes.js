import { Router } from "express";
const router = Router();


import usersControllers from "../controllers/users.controllers.js";
import validateToken from "../middlewares/auth.middleware.js";

router.get("/", validateToken, usersControllers.getUsers);
router.get("/:id",validateToken, usersControllers.getUserById);
router.post("/", validateToken, usersControllers.createUser);
router.put("/:id", validateToken, usersControllers.updateUser);
router.delete("/:id", validateToken, usersControllers.deleteUser);


export default router;
