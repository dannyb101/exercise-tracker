const { createCustomError } = require("../errors/custom-error");

const asyncWrapper = (fn) => {
	return async (req, res, next) => {
		try {
			await fn(req, res, next);
		} catch (error) {
			const customError = createCustomError("Something went wrong", 500);
			next(customError);
		}
	};
};

module.exports = asyncWrapper;
