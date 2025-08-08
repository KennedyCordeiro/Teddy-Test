import api from "../../services/api";
import type { User, ApiResponse } from "../interfaces/user";

export const UserService = {
  async create(
    user: Pick<User, "name" | "salary" | "companyValuation">
  ): Promise<User> {
    const response = await api.post("/users", {
      name: user.name,
      salary: user.salary,
      companyValuation: user.companyValuation,
    });
    return response.data;
  },

  async getAll(page = 1, limit = 16): Promise<ApiResponse> {
    const response = await api.get(`/users?page=${page}&limit=${limit}`);
    return response.data;
  },

  async getById(id: string): Promise<User> {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },

  async update(id: string, user: Partial<User>): Promise<User> {
    const response = await api.patch(`/users/${id}`, user);
    return response.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/users/${id}`);
  },
};
