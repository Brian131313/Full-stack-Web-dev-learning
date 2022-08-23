class ExpressError extends Error {
  constructor(message, statusCode) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

function catchAsync(func) {
  return (req, res, next) => {
    func(req, res, next).catch(next);
  };
}

module.exports = { ExpressError: ExpressError, catchAsync: catchAsync };
