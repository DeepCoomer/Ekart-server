import CustomError from "./customError.js";

export default (func) => (req, res, next) => {
  return Promise.resolve(func(req, res, next)).catch((e) => {
    let errorMessage;
    if (e.errors) {
      Object.keys(e.errors).forEach((key) => {
        errorMessage = e.errors[key].message;
      });
      return next(
        new CustomError(errorMessage || "internal server error", 500, res)
      );
    }
    console.log("Error: ", e);
    return next(new CustomError("internal server error", 500, res));
  });
};
