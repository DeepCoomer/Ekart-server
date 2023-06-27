export default class CustomError extends Error {
    constructor(errorMsg, statusCode, res) {
      super(errorMsg);
      this.status = statusCode;
      this.message = errorMsg;
      this.sendErrResponse(res);
    }
  
    sendErrResponse(res) {
      return res.status(this.status).json({
        status: this.status,
        message: this.message,
      });
    }
  }
  