const express = require("express");
const router = express.Router();
const {
	createUser,
	getUsers,
	addExercise,
	getExerciseLog,
	deleteAllEntries,
} = require("../controllers/tasks");

router.route("/").post(createUser).get(getUsers);
router.route("/:_id/exercises").post(addExercise);
router.route("/:_id/logs").get(getExerciseLog);
router.route("/delete").delete(deleteAllEntries);

module.exports = router;
