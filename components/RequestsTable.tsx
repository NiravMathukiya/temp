import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Edit, File, X } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import FilterSection from "../components/filter-section";

type Request = {
  id: string;
  portfolioMember: string;
  submittedBy: string;
  programName: string;
  email: string;
  programDate: string;
  status: "Pending" | "Approved" | "Rejected"; // Extend if needed
};

type FilterState = {
  portfolioMember: string;
  submittedBy: string[];
  programName: string;
  email: string;
  programDateFrom: string;
  programDateTo: string;
  status: string;
  dateAdded: string;
};

const Index = () => {
  

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [requests, setRequests] = useState<Request[]>([
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
  ]);
  const [filteredRequests, setFilteredRequests] = useState<Request[]>(requests);

  const [filters, setFilters] = useState<FilterState>({
    portfolioMember: "",
    submittedBy: [],
    programName: "",
    email: "",
    programDateFrom: "",
    programDateTo: "",
    status: "",
    dateAdded: "",
  });

  // Apply filters whenever the filter state changes
  useEffect(() => {
    let result = [...requests];

    // Filter by portfolio member
    if (filters.portfolioMember && filters.portfolioMember !== "all") {
      result = result.filter((item) =>
        item.portfolioMember
          .toLowerCase()
          .includes(filters.portfolioMember.toLowerCase())
      );
    }

    // Filter by Jamatkhanas (submittedBy)
    if (filters.submittedBy.length > 0) {
      result = result.filter((item) =>
        filters.submittedBy.some((jk) => item.submittedBy.includes(jk))
      );
    }

    // Filter by program name
    if (filters.programName) {
      result = result.filter((item) =>
        item.programName
          .toLowerCase()
          .includes(filters.programName.toLowerCase())
      );
    }

    // Filter by email
    if (filters.email) {
      result = result.filter((item) =>
        item.email.toLowerCase().includes(filters.email.toLowerCase())
      );
    }

    // Filter by program date range
    if (filters.programDateFrom) {
      result = result.filter(
        (item) =>
          new Date(item.programDate) >= new Date(filters.programDateFrom)
      );
    }

    if (filters.programDateTo) {
      result = result.filter(
        (item) => new Date(item.programDate) <= new Date(filters.programDateTo)
      );
    }

    // Filter by status
    if (filters.status && filters.status !== "all") {
      result = result.filter((item) => item.status === filters.status);
    }

    setFilteredRequests(result);
  }, [filters, requests]);

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      portfolioMember: "",
      submittedBy: [],
      programName: "",
      email: "",
      programDateFrom: "",
      programDateTo: "",
      status: "",
      dateAdded: "",
    });
  };

  // Apply filters and close filter section
  const applyFilters = () => {
    setIsFilterOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden max-w-full">
      {/* <Header /> */}

      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center">
          <ChevronDown className="mr-2" />
          Communication Request
        </h2>
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="px-3 py-1.5 border border-gray-300 rounded-md text-blue-600 text-sm flex items-center gap-1 hover:bg-gray-50 transition-colors"
          aria-expanded={isFilterOpen}
        >
          Filter
          {isFilterOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>

      <FilterSection
        isFilterOpen={isFilterOpen}
        filters={filters}
        setFilters={setFilters}
        resetFilters={resetFilters}
        applyFilters={applyFilters}
      />

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Portfolio/Board/Member
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Jamatkhanas
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name of Program
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date of Program
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date of Announcement
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date Added
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredRequests.map((request) => (
              <tr key={request.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {request.portfolioMember}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {request.submittedBy}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {request.programName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {request.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {request.programDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  —
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDistanceToNow(new Date(), { addSuffix: true })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      request.status === "Approved"
                        ? "bg-green-100 text-green-800"
                        : request.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {request.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-yellow-600 hover:text-yellow-900 action-btn">
                      <File size={16} />
                    </button>
                    <a
                      href={`/request/edit/${request.id}`}
                      className="text-blue-600 hover:text-blue-900 action-btn"
                    >
                      <Edit size={16} />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
            {filteredRequests.length === 0 && (
              <tr>
                <td
                  colSpan={9}
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  No matching requests found. Try adjusting your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Filter indicator */}
      {Object.values(filters).some((val) =>
        Array.isArray(val) ? val.length > 0 : Boolean(val)
      ) && (
        <div className="bg-blue-50 p-2 flex items-center justify-between">
          <span className="text-sm text-blue-700">
            Filters applied: {filteredRequests.length} of {requests.length}{" "}
            requests shown
          </span>
          <button
            onClick={resetFilters}
            className="text-blue-700 hover:bg-blue-100 px-2 py-1 rounded flex items-center text-sm"
          >
            <X className="w-4 h-4 mr-1" />
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;
