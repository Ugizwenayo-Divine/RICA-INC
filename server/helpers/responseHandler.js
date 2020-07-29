const successResponse = (res, code, message, token, data = null) => res.status(code).json({
    message,
    token,
    data
  });

  const errorResponse = (res, code, error) => res.status(code).json({
    error,
  });
  
  export default {
    successResponse,
    errorResponse,
  };
  