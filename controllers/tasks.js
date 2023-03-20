const express = require("express");
const app = express();
const Tracker = require("../model/Tracker");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const createUser = asyncWrapper(async (req, res) => {
	const user = await Tracker.create(req.body);
	res.json(user);
});

const getUsers = asyncWrapper(async (req, res, next) => {
	const users = await Tracker.find().select({ __v: 0, log: 0 });
	if (!users) {
		next(createCustomError("No users found", 404));
	}
	res.json(users);
});

const addExercise = asyncWrapper(async (req, res, next) => {
	let date;
	const user = await Tracker.findById(req.params._id);

	console.log(req.body);

	if (req.body.date) {
		date = new Date(req.body.date).toDateString();
	} else {
		date = new Date().toDateString();
	}
	const exerciseLog = {
		description: req.body.description,
		duration: req.body.duration,
		date: date,
	};

	user.log.push(exerciseLog);
	user.save();

	console.log(`User: ${user}`);

	console.log(typeof user.username);
	console.log(typeof exerciseLog.description);
	console.log(typeof exerciseLog.duration);
	console.log(typeof user._id);
	console.log(typeof exerciseLog.date);

	res.json({
		username: user.username,
		description: exerciseLog.description,
		duration: parseInt(exerciseLog.duration),
		_id: user._id,
		date: exerciseLog.date,
	});
});

const getExerciseLog = async (req, res, next) => {
	let user = await Tracker.findById(req.params._id).exec();

	if (!user) {
		next(createCustomError("No logs found", 404));
	}

	user.log.sort((a, b) => {
		return new Date(a.date) - new Date(b.date);
	});

	if (req.query.from) {
		user.log = user.log.filter((log) => {
			return new Date(log.date) >= new Date(req.query.from);
		});
	}
	if (req.query.to) {
		user.log = user.log.filter((log) => {
			return new Date(log.date) <= new Date(req.query.to);
		});
	}
	if (req.query.limit) {
		user.log = user.log.slice(0, req.query.limit);
	}
	user = user.toJSON();
	user = {
		...user,
		count: user.log.length,
	};

	res.json(user);
};

const deleteAllEntries = (req, res, err) => {
	Tracker.deleteMany({}, (err, data) => {
		if (err) next(err);
		res.json(data);
	});
};

module.exports = {
	createUser,
	getUsers,
	addExercise,
	getExerciseLog,
	deleteAllEntries,
};
