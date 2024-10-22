const express = require("express");
const validateSchema = require("../middleWare/validateSchema");
const { userQuerySchema, userIdParamsSchema } = require("../schemas/schemas");
const router = express.Router();
const {
  createUser,
  getAllUsers,
  getUserById,
  getTasksOfUser,
} = require("../controllers/user.controllers");

// CREATE
router.post("/", createUser);

// READ ALL USERS
router.get("/", validateSchema(userQuerySchema, "query"), getAllUsers);

//get user by id
router.get("/:id", validateSchema(userIdParamsSchema, "params"), getUserById);

//get user's task
router.get(
  "/:id/tasks",
  validateSchema(userIdParamsSchema, "params"),
  getTasksOfUser
);

module.exports = router;
