const supabase = require("../config/db");
module.exports = {
  list: async () => {
    return new Promise(async (resolve, reject) => {
      const { data, error } = await supabase.from("videos").select();
      if (data) {
        resolve(data);
      }
      reject(error);
    });
  },
  detail: async ({ id }) => {
    return new Promise(async (resolve, reject) => {
      const { data, error } = await supabase
        .from("videos")
        .select()
        .match({ id });
      if (data) {
        resolve(data);
      }
      reject(error);
    });
  },
  create: async (payload) => {
    return new Promise(async (resolve, reject) => {
      const { data, error } = await supabase.from("videos").insert([payload]);
      if (data) {
        resolve(data);
      }
      reject(error);
    });
  },
  update: async (id, payload) => {
    return new Promise(async (resolve, reject) => {
      const { data, error } = await supabase
        .from("videos")
        .update(payload)
        .match({ id });
      if (data) {
        resolve(data);
      }
      reject(error);
    });
  },
  destroy: async ({ id }) => {
    return new Promise(async (resolve, reject) => {
      const { data, error } = await supabase
        .from("videos")
        .delete()
        .match({ id });
      if (data) {
        resolve(data);
      }
      reject(error);
    });
  },
};
