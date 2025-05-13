"use client";
import React, { useEffect, useState } from "react";

import SideBarWrapper from "../../layouts/SideBarWrapper";
import RequestsTable from "../../components/RequestsTable";

import { ColumnDef } from "@tanstack/react-table";
import { Edit, File } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import CustomTable from "../../components/CustomTable";

const AnnouncementsPage = () => {
  const [data, setData] = useState<Request[]>([]);
  const [page, setPage] = useState(1);
  const limit = 10;
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  type Request = {
    id: string;
    portfolioMember: string;
    submittedBy: string;
    programName: string;
    email: string;
    programDate: string;
    status: "Pending" | "Approved" | "Rejected";
  };

  const columns: ColumnDef<Request>[] = [
    {
      header: "Portfolio",
      accessorKey: "portfolioMember",
    },
    {
      header: "Submitted By",
      accessorKey: "submittedBy",
    },
    {
      header: "Program",
      accessorKey: "programName",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Program Date",
      accessorKey: "programDate",
    },
    {
      header: "Date Added",
      cell: () => formatDistanceToNow(new Date(), { addSuffix: true }),
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: ({ row }) => {
        const status = row.original.status;
        return (
          <span
            className={`px-2 py-1 text-xs rounded-full font-medium ${
              status === "Approved"
                ? "bg-green-100 text-green-800"
                : status === "Pending"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {status}
          </span>
        );
      },
    },
    {
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <button className="text-yellow-600 hover:text-yellow-900">
            <File size={16} />
          </button>
          <a
            href={`/request/edit/${row.original.id}`}
            className="text-blue-600 hover:text-blue-900"
          >
            <Edit size={16} />
          </a>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/request?limit=${limit}&page=${page}`);
        const json = await res.json();
        setData(json.data);
        setTotalPages(json.totalPages || 1);
      } catch (err) {
        console.error("Failed to fetch:", err);
      }
      setLoading(false);
    };

    fetchData();
  }, [page]);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/request?limit=${limit}&page=${page}`);
        const json = await res.json();
        setData(json.data);
        setTotalPages(json.totalPages || 1);
      } catch (err) {
        console.error("Failed to fetch:", err);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <SideBarWrapper activeItem={null} setActiveItem={() => {}}>
        {/* <RequestsTable /> */}
        <CustomTable columns={columns} data={data} loading={loading} />

        {/* Simple Pagination */}
        <div className="flex justify-center mt-4 space-x-2">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-3 py-1 border rounded"
          >
            Prev
          </button>

          <span className="px-3 py-1">{page}</span>

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="px-3 py-1 border rounded"
          >
            Next
          </button>
        </div>
      </SideBarWrapper>
    </>
  );
};

export default AnnouncementsPage;
