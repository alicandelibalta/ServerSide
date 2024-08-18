// Error handler middleware
function errorHandler(err, req, res, next) {
  
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  
    const errorDetails = {
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    };
  
    console.error(err);
  
    res.status(statusCode).json({
      error: {
        message: errorDetails.message,
        stack: errorDetails.stack,
      },
    });
  }
  
  module.exports = errorHandler;
  