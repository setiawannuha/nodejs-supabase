require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { failed, success } = require("../helpers/responses");
const mAuth = require("../models/auth.model");
module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      mAuth
        .login(email)
        .then((result) => {
          if (result[0]) {
            const compare = bcrypt.compareSync(password, result[0].password);
            if (compare) {
              const response = {
                user: result[0],
                token: jwt.sign(result[0], process.env.JWT_SECRET),
              };
              success(res, response);
            } else {
              failed(res);
            }
          } else {
            failed(res);
          }
        })
        .catch((err) => {
          failed(res);
        });
    } catch (error) {
      failed(res);
    }
  },
  register: async (req, res) => {
    try {
      const payload = {
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
      };
      mAuth
        .register(payload)
        .then((result) => {
          success(res, result);
        })
        .catch((err) => {
          failed(res);
        });
    } catch (error) {
      failed(res);
    }
  },
  profile: async (req, res) => {
    try {
      success(res, req.localProfile);
    } catch (error) {
      failed(res);
    }
  },
};
