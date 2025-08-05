import api from "./api";
import type { User } from "../interfaces/user";

export const UserService = {
  async create(user: Omit<User, "id">): Promise<User> {
    const response = await api.post("/users", user);
    return response.data;
  },

  async getAll(): Promise<User[]> {
    const response = await api.get("/users");
    return response.data;
  },

  async getById(id: string): Promise<User> {
    const response = await api.get(`/user/${id}`);
    return response.data;
  },

  async update(id: string, user: Partial<User>): Promise<User> {
    const response = await api.patch(`/user/${id}`, user);
    return response.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/user/${id}`);
  },
};
