const { CustomError } = require("../errors/custom-error");

const handleError = (err, req, res, next) => {
	if (err instanceof CustomError) {
		return res.status(err.statusCode).json({ msg: err.message });
	}
	res.status(500).json({ msg: err.message });
};

module.exports = handleError;
