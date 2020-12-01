const successResponse = (res, code, message, token, data = null) => res.status(code).json({
    message,
    token,
    data
  });

  const errorResponse = (res, code, error) => res.status(code).json({
    error,
  });
  const updatedResponse = async (res, code, message) => res.status(code).json({
    message
  });
  
  export default {
    successResponse,
    errorResponse,
    updatedResponse
  };
  