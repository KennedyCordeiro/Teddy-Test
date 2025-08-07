export interface User {
  id?: string;
  name: string;
  email: string;
  salary?: number;
  companyValuation?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface ApiResponse {
  clients: User[];
  totalPages: number;
  currentPage: number;
}
