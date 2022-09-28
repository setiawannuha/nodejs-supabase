require("dotenv").config();
const jwt = require("jsonwebtoken");
module.exports = {
  authentication: (req, res, next) => {
    try {
      const { authorization } = req.headers;
      const token = authorization
      if (token) {
        var parts = token.split(' ');
        if (parts.length === 2) {
          var scheme = parts[0];
          var credentials = parts[1];
          if (/^Bearer$/i.test(scheme)) {
            jwt.verify(credentials, process.env.JWT_SECRET, function(err, decoded) {
              req.localProfile = decoded;
              next();
            })
          }else{
            res.json({
              data: null,
              message: "invalid token",
            });
        }
        }else{
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
        message: "internal server error",
      });
    }
  },
};
