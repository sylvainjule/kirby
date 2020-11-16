export default (api) => {
  return {
    async login(user) {
      const data = {
        long: user.remember || false,
        email: user.email,
        password: user.password
      };

      return await api.post("auth/login", data);
    },
    async logout() {
      return api.post("auth/logout");
    },
    async user(params) {
      return api.get("auth", params);
    },
    async verifyCode(code) {
      return await api.post("auth/code", {code});
    }
  }
};
