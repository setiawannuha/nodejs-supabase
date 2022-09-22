const { failed, success } = require("../helpers/responses");
const mVideos = require("../models/video.model");
module.exports = {
  list: async (req, res) => {
    try {
      mVideos
        .list()
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
  detail: async (req, res) => {
    try {
      const { id } = req.params;
      mVideos
        .detail({ id })
        .then((result) => {
          success(res, result[0] || null);
        })
        .catch((err) => {
          failed(res);
        });
    } catch (error) {
      failed(res);
    }
  },
  create: async (req, res) => {
    try {
      const payload = {
        title: req.body.title,
        description: req.body.description,
        cover: req.body.cover,
        rating: req.body.rating,
        level: req.body.level,
        price: req.body.price,
      };
      mVideos
        .create(payload)
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
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const payload = {
        title: req.body.title,
        description: req.body.description,
        cover: req.body.cover,
        rating: req.body.rating,
        level: req.body.level,
        price: req.body.price,
      };
      mVideos
        .update(id, payload)
        .then((result) => {
          success(res, result[0] || null);
        })
        .catch((err) => {
          failed(res);
        });
    } catch (error) {
      failed(res);
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      mVideos
        .destroy({ id })
        .then((result) => {
          success(res, result[0] || null);
        })
        .catch((err) => {
          failed(res);
        });
    } catch (error) {
      failed(res);
    }
  },
};
