const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (request, response, next) => {
  try {
    const authHeader =
      request.headers.Authorization || request.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return response.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const token = authHeader.split(" ")[1];
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      return response.status(500).json({
        success: false,
        message: error.message,
      });
    }

    const decoded = jwt.verify(token, jwtSecret);

    request.user = {
      id: decoded.id,
      role: decoded.role,
    };
    next();
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = authMiddleware;
