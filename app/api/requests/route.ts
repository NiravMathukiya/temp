// /pages/api/requests.ts
import { NextApiRequest, NextApiResponse } from "next";

const allRequests = [
  {
    id: "1",
    portfolioMember: "Ismaili Professional Network (IPN)",
    submittedBy: "Katy",
    programName: "Tee Time & Talk",
    email: "amber9909@gmail.com",
    programDate: "2023-06-01",
    status: "Pending",
  },
  {
    id: "2",
    portfolioMember: "AKHB",
    submittedBy: "CorpusChristi, SanAntonio",
    programName: "International Nurses Day",
    email: "foorucha1@yahoo.com",
    programDate: "2023-05-12",
    status: "Pending",
  },
  {
    id: "3",
    portfolioMember: "Local Announcements",
    submittedBy: "CorpusChristi, SanAntonio",
    programName: "Translations",
    email: "icsw@usjj.org",
    programDate: "2023-05-09",
    status: "Approved",
  },
  {
    id: "4",
    portfolioMember: "Program",
    submittedBy: "Beaumont",
    programName: "Rites & Ceremonies COL @ BMT",
    email: "icsw@usjj.org",
    programDate: "2023-05-09",
    status: "Approved",
  },
  {
    id: "5",
    portfolioMember: "Mental Health",
    submittedBy: "CorpusChristi, SanAntonio",
    programName: "Mental Health Awareness",
    email: "zainabkhuwaja@gmail.com",
    programDate: "2023-05-08",
    status: "Approved",
  },
  // Add more mock data as needed
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 5;

  const start = (page - 1) * limit;
  const end = start + limit;

  // Optional filters
  const { status, portfolioMember } = req.query;

  let filtered = [...allRequests];

  if (status && status !== "all") {
    filtered = filtered.filter((r) => r.status === status);
  }

  if (portfolioMember && portfolioMember !== "all") {
    filtered = filtered.filter((r) =>
      r.portfolioMember
        .toLowerCase()
        .includes((portfolioMember as string).toLowerCase())
    );
  }

  const paginatedData = filtered.slice(start, end);

  res.status(200).json({
    data: paginatedData,
    page,
    limit,
    total: filtered.length,
    totalPages: Math.ceil(filtered.length / limit),
  });
}
