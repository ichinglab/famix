import { api } from "../boot/axios";
export class UserService {
  constructor() {
    api.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }
  async login(payload) {
    return api.post("/auth/login", {
      identifier: payload.identifier,
      password: payload.password,
    });
  }
  async register(payload) {
    return api.post("/auth/register", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  static async logout() {
    return api.post("/auth/logout");
  }
  static async getProfile() {
    return api.get("/auth/profile");
  }
}
