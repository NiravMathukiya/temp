"use client";

import type React from "react";

import { useState } from "react";
import type { UseFormRegister } from "react-hook-form";

// Import the FormData type from the parent component or create a shared type file
interface FormData {
  channels: {
    jamatAnnouncement: boolean;
    ismailiInsight: boolean;
    ismailiApp: boolean;
    socialMedia: boolean;
    graphicRequest: boolean;
  };
  programVenue: {
    austin: boolean;
    austinDowntown: boolean;
    austinSouth: boolean;
    beaumont: boolean;
    houstonHq: boolean;
    houstonPrincipal: boolean;
    katy: boolean;
    sanAntonio: boolean;
    spring: boolean;
    sugarLand: boolean;
    clearLake: boolean;
    collegeStation: boolean;
    corpusChristi: boolean;
    harvestGreen: boolean;
  };
  customVenues: string[];
  jamatkhanas: {
    acstCorpusChristi: boolean;
    acstSanAntonio: boolean;
    acctCollegeStation: boolean;
    acctAustinSouth: boolean;
    acctAustin: boolean;
    ghClearLake: boolean;
    ghKaty: boolean;
    ghHeadquarters: boolean;
    ghPrincipal: boolean;
    ghHarvestGreen: boolean;
    ghSugarLand: boolean;
    ghBeaumont: boolean;
    ghSpring: boolean;
  };
  firstAnnouncement: {
    day: string;
    month: string;
    year: string;
    text: string;
  };
  noProgramDate: boolean;
  noProgramTime: boolean;
  noAttendeesNumber: boolean;
  requiresRegistration: "yes" | "no";
  files: File[];
  newsletterFiles: File[];
  // Add the newsletter-specific fields
  publicationDate?: string;
  submissionTitle?: string;
  submissionType?: string;
  shortText?: string;
  graphicLink?: string;
  registrationLink?: string;
}

interface NewsletterSectionProps {
  formProps: {
    register: UseFormRegister<FormData>; // Changed from NewsletterFormData to FormData
    newsletterFiles: File[];
    handleNewsletterFileDrop: (e: React.DragEvent<HTMLDivElement>) => void;
    handleNewsletterFileSelect: (
      e: React.ChangeEvent<HTMLInputElement>
    ) => void;
  };
}

export default function NewsletterSection({
  formProps,
}: NewsletterSectionProps) {
  const {
    register,
    newsletterFiles,
    handleNewsletterFileDrop,
    handleNewsletterFileSelect,
  } = formProps;

  const [isDragOver, setIsDragOver] = useState(false);

  return (
    <div className="form-section visible">
      <div className="bg-green-700 p-4 rounded text-white">
        <h3 className="font-semibold">
          Newsletter/ Events Calendar/ Ismaili App
        </h3>
      </div>

      <div className="bg-white p-6 rounded shadow grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="publicationDate"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Announcement to Publication
          </label>
          <input
            type="date"
            id="publicationDate"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("publicationDate", {
              required: "Publication date is required",
            })}
          />
        </div>

        <div>
          <label
            htmlFor="submissionTitle"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Select a title for your submission
          </label>
          <input
            type="text"
            id="submissionTitle"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("submissionTitle")}
          />
        </div>

        <div>
          <label
            htmlFor="submissionType"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Select type of submission
          </label>
          <select
            id="submissionType"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("submissionType")}
          >
            <option value="">Select Type</option>
            <option value="article">Article</option>
            <option value="announcement">Announcement</option>
            <option value="event">Event</option>
            <option value="news">News</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="shortText"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Provide short text
          </label>
          <textarea
            id="shortText"
            rows={5}
            placeholder="Maximum 150 Characters"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("shortText", { maxLength: 150 })}
          />
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="graphicLink"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Link of graphic or photos to be used (Provide in PNG format, square
            shape, 1080x1080)
          </label>
          <div
            onDrop={(e) => {
              e.preventDefault();
              setIsDragOver(false);
              handleNewsletterFileDrop(e);
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragOver(true);
            }}
            onDragLeave={() => setIsDragOver(false)}
            className={`border-2 border-dashed rounded-md p-6 mt-2 flex flex-col items-center justify-center transition-colors ${
              isDragOver ? "border-blue-400 bg-blue-50" : "border-gray-300"
            }`}
          >
            <p className="text-sm text-gray-500">Drag your files here or</p>
            <input
              type="file"
              multiple
              onChange={handleNewsletterFileSelect}
              className="hidden"
              id="newsletterFileUpload"
            />
            <label
              htmlFor="newsletterFileUpload"
              className="text-blue-500 hover:underline cursor-pointer"
            >
              browse
            </label>
            <p className="text-xs text-gray-400 mt-1">
              (PNG format, 1080x1080)
            </p>
          </div>
          {newsletterFiles.length > 0 && (
            <div className="mt-2">
              <p className="text-sm font-medium">
                Selected graphics ({newsletterFiles.length}):
              </p>
              <ul className="text-xs text-gray-500 mt-1">
                {Array.from(newsletterFiles).map((file, index) => (
                  <li key={index}>{file?.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="registrationLink"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Registration Link
          </label>
          <input
            type="text"
            id="registrationLink"
            placeholder="Maximum 150 Characters"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("registrationLink")}
          />
        </div>
      </div>
    </div>
  );
}
