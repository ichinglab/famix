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

  // static async getProfile(id) {
  //   return api.get(`/users/${id}`);
  // }

  async statusCreate(payload) {
    return api.post("/statuses", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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
    const apiRes = await api.get(`/users/${id}?relations=["statuses","statuses.statusPostedBy"]`);
    return apiRes.data;
  }
  async getAllStatus() {
    const apiRes = await api.get(`/statuses`);
    return apiRes.data;
  }
  async getUsersStatus(id) {
    const apiRes = await api.get(`/statuses?statusPostedById=${id}`);
    return apiRes.data;
  }
  async updateProfilePic(payload, id) {
    return api.put(`/users/${id}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}
