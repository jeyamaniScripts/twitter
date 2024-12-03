const errorHandler = (statusCode, message) => {
  return res.status(statusCode).json({ error: message });
};
export default errorHandler;
