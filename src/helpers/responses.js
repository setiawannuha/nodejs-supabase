module.exports = {
  success: async (res, data) => {
    res.status(200).json({
      data,
      message: "Success",
    });
  },
  failed: async (res) => {
    res.status(500).json({
      data: null,
      message: "Failed",
    });
  },
};
