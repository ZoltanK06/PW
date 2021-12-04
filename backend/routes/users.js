import express from "express";

import { signin, signup, getUsers, getAdmins, getUser, getSimpleUsers, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/users", getUsers);
router.get("/simple", getSimpleUsers);
router.get("/admins", getAdmins);
router.get("/:id", getUser);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);

export default router;