const mongoose = require("mongoose");

const tracker = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
		},
		log: [
			new mongoose.Schema(
				{
					description: String,
					duration: Number,
					date: String,
				},
				{ _id: false, required: false }
			),
		],
	},
	{ versionKey: false }
);

const Tracker = mongoose.model("Tracker", tracker);

module.exports = Tracker;
