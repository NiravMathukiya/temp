//  Type definitions for the application

export type Request = {
  id: string;
  portfolioMember: string;
  submittedBy: string;
  programName: string;
  email: string;
  programDate: string;
  status: "Pending" | "Approved" | "Rejected";
  createdAt?: string;
};

export type PaginationInfo = {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
};

export type ApiResponse = {
  requests: Request[];
  pagination: PaginationInfo;
};
