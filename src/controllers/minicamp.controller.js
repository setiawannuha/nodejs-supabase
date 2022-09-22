const { failed, success } = require("../helpers/responses");
const mMinicamps = require("../models/minicamp.model");
module.exports = {
  list: async (req, res) => {
    try {
      mMinicamps
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
      mMinicamps
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
        trainerName: req.body.trainerName,
        trainerTitle: req.body.trainerTitle,
        trainerPicture: req.body.trainerPicture,
        batch: req.body.batch,
        location: req.body.location,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        isWork: req.body.isWork,
        price: req.body.price,
      };
      mMinicamps
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
        trainerName: req.body.trainerName,
        trainerTitle: req.body.trainerTitle,
        trainerPicture: req.body.trainerPicture,
        batch: req.body.batch,
        location: req.body.location,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        isWork: req.body.isWork,
        price: req.body.price,
      };
      mMinicamps
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
      mMinicamps
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
