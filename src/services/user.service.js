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

  // Authorization APIs
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

  async jobCreate(payload) {
    try {
      const response = await api.post("/job-posts", payload);
      return response;
    } catch (error) {
      throw error;
    }
  }
  async getAllJob() {
    const apiRes = await api.get(`/job-posts`);
    return apiRes.data;
  }
  async getAllUsers() {
    const apiRes = await api.get(`/users`);
    return apiRes.data;
  }
  async getUser(id) {
    const apiRes = await api.get(`/users/${id}`);
    return apiRes.data;
  }
}
