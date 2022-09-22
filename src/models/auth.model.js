const supabase = require("../config/db");
module.exports = {
  login: async (email) => {
    return new Promise(async (resolve, reject) => {
      const { data, error } = await supabase
        .from("users")
        .select()
        .match({ email });
      if (data) {
        resolve(data);
      }
      reject(error);
    });
  },
  register: async (payload) => {
    return new Promise(async (resolve, reject) => {
      const { data, error } = await supabase.from("users").insert([payload]);
      if (data) {
        resolve(data);
      }
      reject(error);
    });
  },
};
