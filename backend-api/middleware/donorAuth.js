const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require('jsonwebtoken');
const Donor = require("../models/donor");

exports.isDonorAuth = catchAsyncError( async(req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization.split(" ")[1] || req.cookies.token;

    if(!token)
    {
        return next(new ErrorHandler("Please Login First", 400))
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    req.donor = await Donor.findById(decodedData.id);

    if(!req.donor)
    {
        return next(new ErrorHandler("Please Login First", 400))
    }

    next();
});