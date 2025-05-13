"use client";

import { ChangeEvent, KeyboardEvent } from "react";

interface ProgramInfoSectionProps {
  formProps: {
    register: any;
    errors: any;
    setValue: (name: string, value: any) => void;
    newVenue: string;
    setNewVenue: (venue: string) => void;
    showInput: boolean;
    setShowInput: (show: boolean) => void;
    files: File[];
    handleFileDrop: (e: React.DragEvent<HTMLDivElement>) => void;
    handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddVenue: (venue: string) => void;
    watchProgramVenue: { [key: string]: boolean };
    watchCustomVenues: string[];
  };
}

const ProgramInfoSection = ({ formProps }: ProgramInfoSectionProps) => {
  const {
    register,
    errors,
    setValue,
    newVenue,
    setNewVenue,
    showInput,
    setShowInput,
    files,
    handleFileDrop,
    handleFileSelect,
    handleAddVenue,
    watchProgramVenue,
    watchCustomVenues,
  } = formProps;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewVenue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newVenue.trim()) {
      e.preventDefault();
      handleAddVenue(newVenue);
    }
  };

  const toggleVenue = (venue: string) => {
    const currentValue = watchProgramVenue[venue];
    setValue(`programVenue.${venue}`, !currentValue);
  };

  return (
    <>
      <div className="bg-green-700 p-4 rounded text-white">
        <h3 className="font-semibold">Please provide following information</h3>
      </div>

      <div className="bg-white p-4 md:p-6 rounded shadow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Portfolio/Board/Member */}
        <div>
          <label
            htmlFor="portfolioMember"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Portfolio/ Board/Member
          </label>
          <input
            type="text"
            id="portfolioMember"
            className={`w-full p-2 border rounded ${
              errors.portfolioMember ? "border-red-500" : "border-gray-300"
            }`}
            {...register("portfolioMember", {
              required: "This field is required",
            })}
          />
          {errors.portfolioMember && (
            <p className="text-red-500 text-xs mt-1">
              {errors.portfolioMember.message}
            </p>
          )}
        </div>

        {/* Submitted By */}
        <div>
          <label
            htmlFor="submittedBy"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Submitted By
          </label>
          <input
            type="text"
            id="submittedBy"
            className={`w-full p-2 border rounded ${
              errors.submittedBy ? "border-red-500" : "border-gray-300"
            }`}
            {...register("submittedBy", { required: "This field is required" })}
          />
          {errors.submittedBy && (
            <p className="text-red-500 text-xs mt-1">
              {errors.submittedBy.message}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className="w-full max-w-md mx-auto">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number
          </label>
          <div className="flex w-full">
            <select
              className="p-2 border border-gray-300 rounded-l bg-white w-28 sm:w-32"
              {...register("phonePrefix")}
            >
              <option value="US">US +1</option>
              <option value="GB">GB +44</option>
              <option value="DE">DE +49</option>
            </select>

            <input
              type="text"
              id="phoneNumber"
              className={`flex-1 min-w-0 p-2 border-t border-b border-r rounded-r ${
                errors.phoneNumber ? "border-red-500" : "border-gray-300"
              }`}
              {...register("phoneNumber", {
                required: "Phone number is required",
                validate: (value, formValues) => {
                  const prefix = formValues.phonePrefix;
                  const validators: {
                    [key: string]: { regex: RegExp; message: string };
                  } = {
                    US: {
                      regex: /^[0-9]{10}$/,
                      message: "US number must be 10 digits",
                    },
                    GB: {
                      regex: /^[0-9]{10,11}$/,
                      message: "UK number must be 10–11 digits",
                    },
                    DE: {
                      regex: /^[0-9]{7,12}$/,
                      message: "German number must be 7–12 digits",
                    },
                  };
                  const validator = validators[prefix];
                  if (!validator.regex.test(value)) {
                    return validator.message;
                  }
                  return true;
                },
              })}
            />
          </div>
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs mt-1">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`w-full p-2 border rounded ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Name of Program */}
        <div>
          <label
            htmlFor="programName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name of Program
          </label>
          <input
            type="text"
            id="programName"
            className={`w-full p-2 border rounded ${
              errors.programName ? "border-red-500" : "border-gray-300"
            }`}
            {...register("programName", {
              required: "Program name is required",
            })}
          />
          {errors.programName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.programName.message}
            </p>
          )}
        </div>

        {/* Location of Program */}
        <div>
          <label
            htmlFor="programLocation"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Location of Program
          </label>
          <input
            type="text"
            id="programLocation"
            className={`w-full p-2 border rounded ${
              errors.programLocation ? "border-red-500" : "border-gray-300"
            }`}
            {...register("programLocation", {
              required: "Program location is required",
            })}
          />
          {errors.programLocation && (
            <p className="text-red-500 text-xs mt-1">
              {errors.programLocation.message}
            </p>
          )}
        </div>

        {/* Date of Program */}
        <div className="sm:col-span-2">
          <div className="md:grid grid-cols-2 sm:grid-cols-2 gap-2">
            <div className="mt-1">
              <label
                htmlFor="programDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Date of Program
              </label>
              <div className="flex items-center">
                <input
                  type="date"
                  id="programDate"
                  className={`w-full p-2 border rounded ${
                    errors.programDate ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("programDate", {
                    required: "Program date is required",
                  })}
                />
                <div className="ml-2 flex items-center">
                  <input
                    type="checkbox"
                    id="noProgramDate"
                    className="mr-1"
                    {...register("noProgramDate")}
                  />
                  <label htmlFor="noProgramDate" className="text-sm">
                    N/A
                  </label>
                </div>
              </div>
              {errors.programDate && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.programDate.message}
                </p>
              )}
            </div>

            {/* Time of Program */}
            <div className="sm:col-span-1 mt-2 md:ml-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time of Program
              </label>
              <div className="flex items-center space-x-2">
                <select
                  className="p-2 border border-gray-300 rounded"
                  {...register("programTimeHour")}
                >
                  {[...Array(12)].map((_, i) => (
                    <option key={i} value={String(i + 1).padStart(2, "0")}>
                      {String(i + 1).padStart(2, "0")}
                    </option>
                  ))}
                </select>
                <span>:</span>
                <select
                  className="p-2 border border-gray-300 rounded"
                  {...register("programTimeMinute")}
                >
                  {[...Array(60)].map((_, i) => (
                    <option key={i} value={String(i).padStart(2, "0")}>
                      {String(i).padStart(2, "0")}
                    </option>
                  ))}
                </select>
                <select
                  className="p-2 border border-gray-300 rounded"
                  {...register("programTimeAmPm")}
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>
          </div>

          {/* N/A Program Time */}
          <div className="sm:col-span-2">
            <div className="flex items-center ml-2 mt-2">
              <input
                type="checkbox"
                id="noProgramTime"
                className="mr-1"
                {...register("noProgramTime")}
              />
              <label htmlFor="noProgramTime" className="text-sm">
                N/A
              </label>
            </div>

            <div className="md:grid grid-cols-2 gap-2 mt-2">
              {/* Attendees */}
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="attendeesNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Projected Number of Attendees
                  </label>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="noAttendeesNumber"
                      className="mr-1"
                      {...register("noAttendeesNumber")}
                    />
                    <label htmlFor="noAttendeesNumber" className="text-sm">
                      N/A
                    </label>
                  </div>
                </div>
                <input
                  type="number"
                  id="attendeesNumber"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  {...register("attendeesNumber")}
                />
              </div>

              {/* Registration */}
              <div className="mt-4 ml-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Does this program require registration?
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="mr-2"
                      {...register("programRegistration")}
                      value="Yes"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="mr-2"
                      {...register("programRegistration")}
                      value="No"
                    />
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramInfoSection;
