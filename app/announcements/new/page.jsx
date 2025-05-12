"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { Calendar, Check, ChevronDown, LogOut, ChevronUp } from "lucide-react"

export default function NewRequestPage() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      channels: {
        jamatAnnouncement: false,
        ismailiInsight: false,
        ismailiApp: false,
        socialMedia: false,
        graphicRequest: false,
      },
      programVenue: {
        austin: false,
        austinDowntown: false,
        austinSouth: false,
        beaumont: false,
        houstonHq: false,
        houstonPrincipal: false,
        katy: false,
        sanAntonio: false,
        spring: false,
        sugarLand: false,
        clearLake: false,
        collegeStation: false,
        corpusChristi: false,
        harvestGreen: false,
      },
      customVenues: [],
      jamatkhanas: {
        acstCorpusChristi: false,
        acstSanAntonio: false,
        acctCollegeStation: false,
        acctAustinSouth: false,
        acctAustin: false,
        ghClearLake: false,
        ghKaty: false,
        ghHeadquarters: false,
        ghPrincipal: false,
        ghHarvestGreen: false,
        ghSugarLand: false,
        ghBeaumont: false,
        ghSpring: false,
      },
      firstAnnouncement: {
        day: "21",
        month: "May",
        year: "2024",
        text: "",
      },
      noProgramDate: false,
      noProgramTime: false,
      noAttendeesNumber: false,
      requiresRegistration: "no",
      files: [],
      newsletterFiles: [],
    },
  })

  // State for UI controls
  const [newVenue, setNewVenue] = useState("")
  const [showInput, setShowInput] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [files, setFiles] = useState([])
  const [newsletterFiles, setNewsletterFiles] = useState([])

  // Watch for selected channels to show/hide sections
  const watchChannels = watch("channels")
  const watchProgramVenue = watch("programVenue")
  const watchCustomVenues = watch("customVenues")

  const handleInputChange = (e) => {
    setNewVenue(e.target.value)
  }

  const handleAddVenue = (e) => {
    if (e.key === "Enter" && newVenue.trim()) {
      // Add the new venue to the list
      const updatedVenues = [...watchCustomVenues, newVenue]
      setValue("customVenues", updatedVenues)
      setNewVenue("") // Clear the input after adding
      setShowInput(false) // Hide input after adding the venue
    }
  }

  const handleFileDrop = (e) => {
    e.preventDefault()
    const droppedFiles = e.dataTransfer.files
    const updatedFiles = [...files, ...droppedFiles]
    setFiles(updatedFiles)
    setValue("files", updatedFiles)
  }

  const handleFileSelect = (e) => {
    const selectedFiles = e.target.files
    const updatedFiles = [...files, ...selectedFiles]
    setFiles(updatedFiles)
    setValue("files", updatedFiles)
  }

  const handleNewsletterFileDrop = (e) => {
    e.preventDefault()
    const droppedFiles = e.dataTransfer.files
    const updatedFiles = [...newsletterFiles, ...droppedFiles]
    setNewsletterFiles(updatedFiles)
    setValue("newsletterFiles", updatedFiles)
  }

  const handleNewsletterFileSelect = (e) => {
    const selectedFiles = e.target.files
    const updatedFiles = [...newsletterFiles, ...selectedFiles]
    setNewsletterFiles(updatedFiles)
    setValue("newsletterFiles", updatedFiles)
  }

  const toggleChannel = (channel) => {
    const currentValue = watch(`channels.${channel}`)
    setValue(`channels.${channel}`, !currentValue)
  }

  const toggleVenue = (venue) => {
    const currentValue = watch(`programVenue.${venue}`)
    setValue(`programVenue.${venue}`, !currentValue)
  }

  const onSubmit = async (data) => {
    try {
      // Combine all form data
      const formData = {
        ...data,
        files: files, // Add files from state
        newsletterFiles: newsletterFiles,
      }

      console.log("Complete form data:", formData)
      alert("Form submitted successfully!")
      router.push("/")
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Error submitting form. Please try again.")
    }
  }

  // Days, months, and years for date selectors
  const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, "0"))
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 6 }, (_, i) => String(currentYear + i))

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <header className="bg-white shadow">
        <div className="p-4 bg-white flex flex-col lg:flex-row  lg:items-center justify-between gap-4">
          {/* Left Section - Logo */}
          <div className="flex-1 flex justify-center md:justify-start lg:ml-10">
            <div className="border border-gray-300 p-4 md:p-6 bg-white rounded-xl text-center">
              <h2 className="text-xs sm:text-sm md:text-xl font-light text-black">ISMAILI COUNCIL FOR</h2>
              <h2 className="text-xs sm:text-sm font-light text-black">THE SOUTHWESTERN USA</h2>
            </div>
          </div>

          {/* Center Section - Title */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-base sm:text-lg md:text-2xl font-bold text-[#005c34]">REGIONAL COMMUNICATION PORTAL</h2>
            <p className="text-xs sm:text-sm md:text-lg">Communication Request Form</p>
          </div>

          {/* Right Section - Login Success */}
          <div className="flex-1 flex justify-center md:justify-end w-full lg:w-auto">
            <div className="flex items-center justify-end ">
              <div className="bg-green-500 text-white py-2 px-4 rounded-full flex items-center text-sm sm:text-base">
                <Check size={18} className="mr-2" />
                <span>Login Successful!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="bg-white p-4 flex flex-col lg:flex-row items-start lg:items-center lg:ml-10 gap-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-[#B49959] flex items-center justify-center text-white font-bold mr-4">
              AI
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">Aminul Islam</h3>
              <button className="text-gray-500 text-sm">Edit Profile</button>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="ml-auto flex flex-wrap gap-2 lg:gap-4 w-full lg:w-auto justify-start lg:justify-end">
            <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-3xl text-sm sm:text-base">
              Communications
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-3xl text-sm sm:text-base">
              Dashboard
            </button>
            <button className="bg-[#B49959] text-white py-2 px-4 rounded-3xl text-sm sm:text-base">
              <p className="hidden md:inline-block"> Log Out</p>
              <span className="inline-block md:hidden">
                <LogOut size={16}> </LogOut>
              </span>
            </button>
          </div>
        </div>
      </header>

      <main className="md:mx-auto rounded-2xl py-8 px-4">
        <div className="bg-gray-200 rounded-2xl mb-8">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#929292] py-4 px-3 rounded-t-2xl w-full h-full cursor-pointer flex items-center justify-between"
          >
            <h3 className="font-semibold flex items-center text-white">
              {isOpen ? <ChevronUp className="mr-2" /> : <ChevronDown className="mr-2" />}
              Communication Guidelines
            </h3>
          </div>

          {isOpen && (
            <div>
              <ul className="ml-6 pb-1 mt-2 text-sm list-disc">
                <li className="mb-3 ml-4 mt-2">
                  Please note that for any event, only 2 Friday announcement submissions are allowed.
                </li>
                <li className="mb-3 ml-4 mt-2">All communications must be channeled through the Southwest Portal.</li>
                <li className="mb-3 ml-4 mt-2">
                  The Council Secretariat & Institutional Communications Team reserves the right to modify or make any
                  grammatical changes to the communication request, as necessary.
                </li>
              </ul>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Channel request things */}
          <div className="rounded shadow overflow-hidden">
            <div className="bg-green-700 p-4 text-white rounded-t">
              <h3 className="font-semibold">Channels Requested</h3>
            </div>

            <div className="bg-white px-6 py-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-6">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="jamatAnnouncement"
                    className="accent-yellow-500 w-4 h-4"
                    {...register("channels.jamatAnnouncement")}
                  />
                  <label htmlFor="jamatAnnouncement" className="cursor-pointer text-sm">
                    Jamati Announcement
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="ismailiInsight"
                    className="accent-yellow-500 w-4 h-4"
                    {...register("channels.ismailiInsight")}
                  />
                  <label htmlFor="ismailiInsight" className="cursor-pointer text-sm">
                    Ismaili Insight Newsletter
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="ismailiApp"
                    className="accent-yellow-500 w-4 h-4"
                    {...register("channels.ismailiApp")}
                  />
                  <label htmlFor="ismailiApp" className="cursor-pointer text-sm">
                    The Ismaili App
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="socialMedia"
                    className="accent-yellow-500 w-4 h-4"
                    {...register("channels.socialMedia")}
                  />
                  <label htmlFor="socialMedia" className="cursor-pointer text-sm">
                    Social Media (Facebook & Instagram)
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="graphicRequest"
                    className="accent-yellow-500 w-4 h-4"
                    {...register("channels.graphicRequest")}
                  />
                  <label htmlFor="graphicRequest" className="cursor-pointer text-sm">
                    Graphic Request
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* second info form */}
          <div className="bg-green-700 p-4 rounded text-white">
            <h3 className="font-semibold">Please provide following information</h3>
          </div>

          <div className="bg-white p-4 md:p-6 rounded shadow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Portfolio/Board/Member */}
            <div>
              <label htmlFor="portfolioMember" className="block text-sm font-medium text-gray-700 mb-1">
                Portfolio/ Board/Member
              </label>
              <input
                type="text"
                id="portfolioMember"
                className={`w-full p-2 border rounded ${errors.portfolioMember ? "border-red-500" : "border-gray-300"}`}
                {...register("portfolioMember", { required: "This field is required" })}
              />
              {errors.portfolioMember && <p className="text-red-500 text-xs mt-1">{errors.portfolioMember.message}</p>}
            </div>

            {/* Submitted By */}
            <div>
              <label htmlFor="submittedBy" className="block text-sm font-medium text-gray-700 mb-1">
                Submitted By
              </label>
              <input
                type="text"
                id="submittedBy"
                className={`w-full p-2 border rounded ${errors.submittedBy ? "border-red-500" : "border-gray-300"}`}
                {...register("submittedBy", { required: "This field is required" })}
              />
              {errors.submittedBy && <p className="text-red-500 text-xs mt-1">{errors.submittedBy.message}</p>}
            </div>

            {/* Phone Number */}
            <div className="w-full max-w-md mx-auto">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
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
                  className={`flex-1 min-w-0 p-2 border-t border-b border-r rounded-r ${errors.phoneNumber ? "border-red-500" : "border-gray-300"
                    }`}
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    validate: (value, formValues) => {
                      const prefix = formValues.phonePrefix;

                      const validators = {
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
                <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
              )}
            </div>


            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`w-full p-2 border rounded ${errors.email ? "border-red-500" : "border-gray-300"}`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Name of Program */}
            <div>
              <label htmlFor="programName" className="block text-sm font-medium text-gray-700 mb-1">
                Name of Program
              </label>
              <input
                type="text"
                id="programName"
                className={`w-full p-2 border rounded ${errors.programName ? "border-red-500" : "border-gray-300"}`}
                {...register("programName", { required: "Program name is required" })}
              />
              {errors.programName && <p className="text-red-500 text-xs mt-1">{errors.programName.message}</p>}
            </div>

            {/* Location of Program */}
            <div>
              <label htmlFor="programLocation" className="block text-sm font-medium text-gray-700 mb-1">
                Location of Program
              </label>
              <input
                type="text"
                id="programLocation"
                className={`w-full p-2 border rounded ${errors.programLocation ? "border-red-500" : "border-gray-300"}`}
                {...register("programLocation", { required: "Program location is required" })}
              />
              {errors.programLocation && <p className="text-red-500 text-xs mt-1">{errors.programLocation.message}</p>}
            </div>

            {/* Date of Program */}
            <div className="sm:col-span-2 ">
              <div className="md:grid grid-cols-2 sm:grid-cols-2 gap-2">
                <div className=" mt-1">
                  <label htmlFor="programDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Program
                  </label>
                  <div className="flex items-center">
                    <input
                      type="date"
                      id="programDate"
                      className={`w-full p-2 border rounded ${errors.programDate ? "border-red-500" : "border-gray-300"}`}
                      {...register("programDate", { required: "Program date is required" })}
                    />
                    <div className="ml-2 flex items-center">
                      <input type="checkbox" id="noProgramDate" className="mr-1" {...register("noProgramDate")} />
                      <label htmlFor="noProgramDate" className="text-sm">
                        N/A
                      </label>
                    </div>
                  </div>
                  {errors.programDate && <p className="text-red-500 text-xs mt-1">{errors.programDate.message}</p>}
                </div>

                {/* Time of Program */}
                <div className="sm:col-span-1 mt-2 md:ml-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time of Program</label>
                  <div className="flex items-center space-x-2">
                    <select className="p-2 border border-gray-300 rounded" {...register("programTimeHour")}>
                      {[...Array(12)].map((_, i) => (
                        <option key={i} value={String(i + 1).padStart(2, "0")}>
                          {String(i + 1).padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                    <span>:</span>
                    <select className="p-2 border border-gray-300 rounded" {...register("programTimeMinute")}>
                      {[...Array(60)].map((_, i) => (
                        <option key={i} value={String(i).padStart(2, "0")}>
                          {String(i).padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                    <select className="p-2 border border-gray-300 rounded" {...register("programTimeAmPm")}>
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* N/A Program Time */}
              <div className="sm:col-span-2">
                <div className="flex items-center ml-2 mt-2">
                  <input type="checkbox" id="noProgramTime" className="mr-1" {...register("noProgramTime")} />
                  <label htmlFor="noProgramTime" className="text-sm">
                    N/A
                  </label>
                </div>

                <div className="md:grid grid-cols-2 gap-2 mt-2">


                  {/* Attendees */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <label htmlFor="attendeesNumber" className="block text-sm font-medium text-gray-700">
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
                          id="registrationYes"
                          value="yes"
                          className="mr-2"
                          {...register("requiresRegistration")}
                        />
                        Yes
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          id="registrationNo"
                          value="no"
                          className="mr-2"
                          {...register("requiresRegistration")}
                        />
                        No
                      </label>
                    </div>
                  </div>
                </div>
                {/* Flyer Upload */}
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Provide flyer (1080x1080 if applicable)
                  </label>
                  <span className="text-sm text-gray-500">Max: 5</span>
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-md p-6 mt-2 flex flex-col items-center justify-center"
                    onDrop={handleFileDrop}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    <p className="text-sm text-gray-500">Drag your files here or</p>
                    <input type="file" multiple onChange={handleFileSelect} className="hidden" id="fileUpload" />
                    <label htmlFor="fileUpload" className="text-blue-500 hover:underline cursor-pointer">
                      browse
                    </label>
                    <p className="text-xs text-gray-400 mt-1">(JPG, PNG, PDF)</p>
                  </div>
                  {files.length > 0 && (
                    <div className="mt-2">
                      <p className="text-sm font-medium">Selected files ({files.length}):</p>
                      <ul className="text-xs text-gray-500 mt-1">
                        {Array.from(files).map((file, index) => (
                          <li key={index}>{file.name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Venue Section */}
            <div className="border border-gray-300 rounded-xl p-3 col-span-full lg:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Program Venue</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-2">
                {Object.keys(watchProgramVenue).map((venue) => (
                  <label key={venue} className="flex items-center">
                    <input
                      type="checkbox"
                      id={venue}
                      className="mr-2"
                      checked={watchProgramVenue[venue]}
                      {...register(`programVenue.${venue}`)}
                    />
                    {venue.replace(/([A-Z])/g, " $1").toUpperCase()}
                  </label>
                ))}

                {watchCustomVenues.map((venue, index) => (
                  <label key={`custom-${index}`} className="flex items-center">
                    <input type="checkbox" id={`venueCustom${index}`} className="mr-2" defaultChecked={true} />
                    {venue}
                  </label>
                ))}
              </div>

              <div className="flex items-center mt-2">
                {showInput ? (
                  <>
                    <input
                      type="text"
                      value={newVenue}
                      onChange={handleInputChange}
                      onKeyDown={handleAddVenue}
                      placeholder="Enter custom venue"
                      className="border p-1 rounded ml-2"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setShowInput(false)
                        setNewVenue("")
                      }}
                      className="ml-2 text-sm text-red-500 hover:underline"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <span className="text-sm text-gray-500 mr-2 cursor-pointer" onClick={() => setShowInput(true)}>
                    + Add Other
                  </span>
                )}
              </div>
            </div>
          </div>

          {watchChannels?.jamatAnnouncement && (
            <div className="w-full mx-auto">
              <div className="bg-green-700 p-4 rounded-t text-white">
                <h3 className="font-semibold text-lg">Jamatkhana Announcement</h3>
              </div>

              <div className="bg-white p-6 rounded-b shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of 1st Announcement</label>
                    <div className="flex space-x-2">
                      {/* Day Dropdown */}
                      <div className="relative">
                        <select
                          {...register("firstAnnouncement.day")}
                          className="appearance-none w-16 md:w-20 py-2 pl-3 pr-8 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        >
                          {days.map((d) => (
                            <option key={d} value={d}>
                              {d}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Month Dropdown */}
                      <div className="relative">
                        <select
                          {...register("firstAnnouncement.month")}
                          className="appearance-none w-24 md:w-28 py-2 pl-3 pr-8 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        >
                          {months.map((m) => (
                            <option key={m} value={m}>
                              {m}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Year Dropdown */}
                      <div className="relative">
                        <select
                          {...register("firstAnnouncement.year")}
                          className="appearance-none w-20 md:w-24 py-2 pl-3 pr-8 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        >
                          {years.map((y) => (
                            <option key={y} value={y}>
                              {y}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Calendar Icon */}
                      <button type="button" className="p-2 border border-gray-300 rounded-md">
                        <Calendar size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-1">{/* Empty div to maintain layout */}</div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Announcement verbiage for 1st week
                    </label>
                    <textarea
                      {...register("firstAnnouncement.text")}
                      placeholder="Maximum 150 Characters"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                      rows={4}
                      maxLength={150}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {watchChannels?.ismailiInsight && (
            <div className="form-section visible">
              <div className="bg-green-700 p-4 rounded text-white">
                <h3 className="font-semibold">Newsletter/ Events Calendar/ Ismaili App</h3>
              </div>

              <div className="bg-white p-6 rounded shadow grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="publicationDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Announcement to Publication
                  </label>
                  <input
                    type="date"
                    id="publicationDate"
                    className="w-full p-2 border border-gray-300 rounded"
                    {...register("publicationDate")}
                  />
                </div>

                <div>
                  <label htmlFor="submissionTitle" className="block text-sm font-medium text-gray-700 mb-1">
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
                  <label htmlFor="submissionType" className="block text-sm font-medium text-gray-700 mb-1">
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
                  <label htmlFor="shortText" className="block text-sm font-medium text-gray-700 mb-1">
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
                  <label htmlFor="graphicLink" className="block text-sm font-medium text-gray-700 mb-1">
                    Link of graphic or photos to be used (Provide in PNG format, square shape, 1080x1080)
                  </label>
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-md p-6 mt-2 flex flex-col items-center justify-center"
                    onDrop={handleNewsletterFileDrop}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    <p className="text-sm text-gray-500">Drag your files here or</p>
                    <input
                      type="file"
                      multiple
                      onChange={handleNewsletterFileSelect}
                      className="hidden"
                      id="newsletterFileUpload"
                    />
                    <label htmlFor="newsletterFileUpload" className="text-blue-500 hover:underline cursor-pointer">
                      browse
                    </label>
                    <p className="text-xs text-gray-400 mt-1">(PNG format, 1080x1080)</p>
                  </div>
                  {newsletterFiles.length > 0 && (
                    <div className="mt-2">
                      <p className="text-sm font-medium">Selected graphics ({newsletterFiles.length}):</p>
                      <ul className="text-xs text-gray-500 mt-1">
                        {Array.from(newsletterFiles).map((file, index) => (
                          <li key={index}>{file.name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="registrationLink" className="block text-sm font-medium text-gray-700 mb-1">
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
          )}

          <div className="form-section visible">
            <div className="bg-green-700 p-4 rounded text-white">
              <h3 className="font-semibold">Select Jamatkhanas</h3>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold">ACST</h4>
                    <button
                      type="button"
                      className="text-sm text-blue-600 hover:underline"
                      onClick={() => {
                        setValue("jamatkhanas.acstCorpusChristi", true)
                        setValue("jamatkhanas.acstSanAntonio", true)
                      }}
                    >
                      Select All
                    </button>
                  </div>
                  <div className="border border-gray-300 rounded p-2">
                    <div className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id="acstCorpusChristi"
                        className="mr-2"
                        {...register("jamatkhanas.acstCorpusChristi")}
                      />
                      <label htmlFor="acstCorpusChristi">Corpus Christi</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="acstSanAntonio"
                        className="mr-2"
                        {...register("jamatkhanas.acstSanAntonio")}
                      />
                      <label htmlFor="acstSanAntonio">San Antonio</label>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold">ACCT</h4>
                    <button
                      type="button"
                      className="text-sm text-blue-600 hover:underline"
                      onClick={() => {
                        setValue("jamatkhanas.acctCollegeStation", true)
                        setValue("jamatkhanas.acctAustinSouth", true)
                        setValue("jamatkhanas.acctAustin", true)
                      }}
                    >
                      Select All
                    </button>
                  </div>
                  <div className="border border-gray-300 rounded p-2">
                    <div className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id="acctCollegeStation"
                        className="mr-2"
                        {...register("jamatkhanas.acctCollegeStation")}
                      />
                      <label htmlFor="acctCollegeStation">College Station</label>
                    </div>
                    <div className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id="acctAustinSouth"
                        className="mr-2"
                        {...register("jamatkhanas.acctAustinSouth")}
                      />
                      <label htmlFor="acctAustinSouth">Austin South</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="acctAustin" className="mr-2" {...register("jamatkhanas.acctAustin")} />
                      <label htmlFor="acctAustin">Austin</label>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold">GREATER HOUSTON</h4>
                    <button
                      type="button"
                      className="text-sm text-blue-600 hover:underline"
                      onClick={() => {
                        setValue("jamatkhanas.ghClearLake", true)
                        setValue("jamatkhanas.ghKaty", true)
                        setValue("jamatkhanas.ghHeadquarters", true)
                        setValue("jamatkhanas.ghPrincipal", true)
                        setValue("jamatkhanas.ghHarvestGreen", true)
                        setValue("jamatkhanas.ghSugarLand", true)
                        setValue("jamatkhanas.ghBeaumont", true)
                        setValue("jamatkhanas.ghSpring", true)
                      }}
                    >
                      Select All
                    </button>
                  </div>
                  <div className="border border-gray-300 text-[#404040] rounded p-2">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="ghClearLake"
                          className="mr-2"
                          {...register("jamatkhanas.ghClearLake")}
                        />
                        <label htmlFor="ghClearLake">Clear Lake</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="ghKaty" className="mr-2" {...register("jamatkhanas.ghKaty")} />
                        <label htmlFor="ghKaty">Katy</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="ghHeadquarters"
                          className="mr-2"
                          {...register("jamatkhanas.ghHeadquarters")}
                        />
                        <label htmlFor="ghHeadquarters">Headquarters</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="ghPrincipal"
                          className="mr-2"
                          {...register("jamatkhanas.ghPrincipal")}
                        />
                        <label htmlFor="ghPrincipal">Principal</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="ghHarvestGreen"
                          className="mr-2"
                          {...register("jamatkhanas.ghHarvestGreen")}
                        />
                        <label htmlFor="ghHarvestGreen">Harvest Green</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="ghSugarLand"
                          className="mr-2"
                          {...register("jamatkhanas.ghSugarLand")}
                        />
                        <label htmlFor="ghSugarLand">Sugar Land</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="ghBeaumont"
                          className="mr-2"
                          {...register("jamatkhanas.ghBeaumont")}
                        />
                        <label htmlFor="ghBeaumont">Beaumont</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="ghSpring" className="mr-2" {...register("jamatkhanas.ghSpring")} />
                        <label htmlFor="ghSpring">Spring</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                  Comment
                </label>
                <textarea
                  id="comment"
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded"
                  {...register("comment")}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded transition-all"
            >
              Submit Communication Request
            </button>
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-8 rounded transition-all"
              onClick={() => router.push("/")}
            >
              Cancel
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}
