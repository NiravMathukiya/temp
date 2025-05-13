import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { Request } from "../../../types"; // adjust the path if needed

// Sample static data (mocked)
const simpleData: Request[] = [
  {
    id: "1",
    portfolioMember: "IPN",
    submittedBy: "Katy",
    programName: "Tee Time",
    email: "katy@email.com",
    programDate: "2023-06-01",
    status: "Pending" as "Pending",
  },
  {
    id: "2",
    portfolioMember: "AKHB",
    submittedBy: "SanAntonio",
    programName: "Nurses Day",
    email: "nurse@email.com",
    programDate: "2023-05-12",
    status: "Approved" as "Approved",
  },
  // Duplicate entries (for testing pagination)
  // You can expand or generate more fake entries if needed
  ...Array.from({ length: 20 }).map((_, i) => ({
    id: `${i + 3}`,
    portfolioMember: "AKHB",
    submittedBy: `User${i + 3}`,
    programName: "Nurses Day",
    email: `user${i + 3}@email.com`,
    programDate: "2023-05-12",
    status: "Approved" as "Approved",
  })),
];

// ✅ GET handler
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const limit = parseInt(searchParams.get("limit") || "10");
  const page = parseInt(searchParams.get("page") || "1");

  const start = (page - 1) * limit;
  const end = start + limit;

  const paginatedData = simpleData.slice(start, end);

  return NextResponse.json({
    data: paginatedData,
    totalPages: Math.ceil(simpleData.length / limit),
    currentPage: page,
  });
}
