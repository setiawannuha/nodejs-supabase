require("dotenv").config();
const jwt = require("jsonwebtoken");
module.exports = {
  authentication: (req, res, next) => {
    try {
      const { token } = req.headers;
      if (token) {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded) {
          next();
        } else {
          res.json({
            data: null,
            message: "invalid token",
          });
        }
      } else {
        res.json({
          data: null,
          message: "token required",
        });
      }
    } catch (error) {
      res.json({
        data: null,
        message: "invalid token",
      });
    }
  },
};
