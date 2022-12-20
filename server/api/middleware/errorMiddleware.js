const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500; // If no status code is set, set it to 500

  res.status(statusCode); // Set the status code

  res.json({
    message: err.message, // Error message
    stack: process.env.NODE_ENV === "production" ? null : err.stack, // Error stack
  });
};

module.exports = {
  errorHandler,
};
