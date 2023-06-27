export default class CustomResponse {
    constructor(statusCode, message, errors, data) {
      this.statusCode = statusCode;
      this.message = message;
      this.success = statusCode >= 200 && statusCode < 300;
      this.errors = errors;
      this.data = data;
    }
  }
  