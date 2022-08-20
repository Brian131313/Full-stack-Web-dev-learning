class ExpressError extends Error {
  constructor(message, statusCode) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

function catchAsyncError(fn) {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
}

module.exports = {
  ExpressError: ExpressError,
  catchAsyncError: catchAsyncError,
};
