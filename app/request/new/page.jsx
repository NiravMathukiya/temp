'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { Check, ChevronDown, Upload } from 'lucide-react';

export default function NewRequestPage() {
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [selectedChannels, setSelectedChannels] = useState({
    jamatAnnouncement: false,
    ismailiInsight: false,
    ismailiApp: false,
    socialMedia: false,
    graphicRequest: false
  });

  const [programVenue, setProgramVenue] = useState({
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
  });

  const [newVenue, setNewVenue] = useState("");
  const [customVenues, setCustomVenues] = useState([]);
  const [showInput, setShowInput] = useState(false);

  const handleInputChange = (e) => {
    setNewVenue(e.target.value);
  };

  const handleAddVenue = (e) => {
    if (e.key === "Enter" && newVenue.trim()) {
      // Add the new venue to the list
      setCustomVenues((prevVenues) => [...prevVenues, newVenue]);
      setNewVenue(""); // Clear the input after adding
      setShowInput(false); // Hide input after adding the venue
    }
  };


  const handleFileDrop = (e) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    setFiles([...files, ...droppedFiles]);
  };

  const handleFileSelect = (e) => {
    const selectedFiles = e.target.files;
    setFiles([...files, ...selectedFiles]);
  };
  // Watch for selected channels to show/hide sections
  const watchChannels = watch();

  const onSubmit = async (data) => {
    try {
      // In a real app, this would be an API call to save the data
      console.log(data);
      alert('Form submitted successfully!');
      router.push('/');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  const toggleChannel = (channel) => {
    setSelectedChannels(prev => ({
      ...prev,
      [channel]: !prev[channel]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="p-4 bg-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Left Section - Logo */}
          <div className="flex-1 flex justify-start lg:ml-10">
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
          <div className="flex-1 flex justify-end w-full lg:w-auto">
            <div className="flex items-center justify-end border border-black">
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
              Log Out
            </button>
          </div>
        </div>
      </header>


      <main className="container mx-auto rounded-2xl py-8 px-4">
        <div className="bg-gray-200  rounded-2xl mb-8">
          <div className='bg-[#929292] py-4 px-3 rounded-t-2xl w-full h-full '>
            <h3 className="font-semibold  flex items-center h-full w-full text-white  ">
              <ChevronDown className="mr-2" />
              Communication Guidelines
            </h3>
          </div>
          <div>
            <ul className="ml-6 pb-1 mt-2 text-sm list-disc">
              <li className="mb-3 ml-4 mt-2 mb-">Please note that for any event, only 2 Friday announcement submissions are allowed.</li>
              <li className="mb-3 ml-4 mt-2 mb-">All communications must be channeled through the Southwest Portal.</li>
              <li className="mb-3 ml-4 mt-2 mb-">The Council Secretariat & Institutional Communications Team reserves the right to modify or make any grammatical changes to the communication request, as necessary.</li>
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

          {/* chanel request things */}
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
                    {...register('channels.jamatAnnouncement')}
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
                    {...register('channels.ismailiInsight')}
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
                    {...register('channels.ismailiApp')}
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
                    {...register('channels.socialMedia')}
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
                    {...register('channels.graphicRequest')}
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

          <div className="bg-white p-6 rounded shadow grid grid-cols-1 md:grid-cols-3 gap-6">

            <div>
              <label htmlFor="portfolioMember" className="block text-sm font-medium text-gray-700 mb-1">
                Portfolio/ Board/Member
              </label>
              <input
                type="text"
                id="portfolioMember"
                className={`w-full p-2 border rounded ${errors.portfolioMember ? 'border-red-500' : 'border-gray-300'}`}
                {...register('portfolioMember', { required: 'This field is required' })}
              />
              {errors.portfolioMember && (
                <p className="text-red-500 text-xs mt-1">{errors.portfolioMember.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="submittedBy" className="block text-sm font-medium text-gray-700 mb-1">
                Submitted By
              </label>
              <input
                type="text"
                id="submittedBy"
                className={`w-full p-2 border rounded ${errors.submittedBy ? 'border-red-500' : 'border-gray-300'}`}
                {...register('submittedBy', { required: 'This field is required' })}
              />
              {errors.submittedBy && (
                <p className="text-red-500 text-xs mt-1">{errors.submittedBy.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="flex">
                <select
                  className="p-2 border border-gray-300 rounded-l"
                  {...register('phonePrefix')}
                >
                  <option value="US">US +1</option>
                  <option value="GB">GB +44</option>
                  <option value="DE">DE +49</option>
                </select>
                <input
                  type="text"
                  id="phoneNumber"
                  className={`flex-1 p-2 border-t border-b border-r rounded-r ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('phoneNumber', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Please enter a valid 10-digit phone number'
                    }
                  })}
                />
              </div>
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Please enter a valid email address'
                  }
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="programName" className="block text-sm font-medium text-gray-700 mb-1">
                Name of Program
              </label>
              <input
                type="text"
                id="programName"
                className={`w-full p-2 border rounded ${errors.programName ? 'border-red-500' : 'border-gray-300'}`}
                {...register('programName', { required: 'Program name is required' })}
              />
              {errors.programName && (
                <p className="text-red-500 text-xs mt-1">{errors.programName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="programLocation" className="block text-sm font-medium text-gray-700 mb-1">
                Location of Program
              </label>
              <input
                type="text"
                id="programLocation"
                className={`w-full p-2 border rounded ${errors.programLocation ? 'border-red-500' : 'border-gray-300'}`}
                {...register('programLocation', { required: 'Program location is required' })}
              />
              {errors.programLocation && (
                <p className="text-red-500 text-xs mt-1">{errors.programLocation.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="programDate" className="block text-sm font-medium text-gray-700 mb-1">
                Date of Program
              </label>
              <div className="flex items-center">
                <input
                  type="date"
                  id="programDate"
                  className={`w-full p-2 border rounded ${errors.programDate ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('programDate', { required: 'Program date is required' })}
                />
                <div className="ml-2 flex items-center">
                  <input
                    type="checkbox"
                    id="noProgramDate"
                    className="mr-1"
                    {...register('noProgramDate')}
                  />
                  <label htmlFor="noProgramDate" className="text-sm">N/A</label>
                </div>
              </div>
              {errors.programDate && (
                <p className="text-red-500 text-xs mt-1">{errors.programDate.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time of Program
              </label>
              <div className="flex items-center space-x-2">
                <select
                  className="p-2 border border-gray-300 rounded"
                  {...register('programTimeHour')}
                >
                  {[...Array(12)].map((_, i) => (
                    <option key={i} value={String(i + 1).padStart(2, '0')}>
                      {String(i + 1).padStart(2, '0')}
                    </option>
                  ))}
                </select>
                <span>:</span>
                <select
                  className="p-2 border border-gray-300 rounded"
                  {...register('programTimeMinute')}
                >
                  {[...Array(60)].map((_, i) => (
                    <option key={i} value={String(i).padStart(2, '0')}>
                      {String(i).padStart(2, '0')}
                    </option>
                  ))}
                </select>
                <select
                  className="p-2 border border-gray-300 rounded"
                  {...register('programTimeAmPm')}
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
                <div className="flex items-center ml-2">
                  <input
                    type="checkbox"
                    id="noProgramTime"
                    className="mr-1"
                    {...register('noProgramTime')}
                  />
                  <label htmlFor="noProgramTime" className="text-sm">N/A</label>
                </div>
              </div>
            </div>

          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Program Venue
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {Object.keys(programVenue).map((venue) => (
                <div key={venue} className="flex items-center">
                  <input
                    type="checkbox"
                    id={venue}
                    className="mr-2"
                    checked={programVenue[venue]}
                    onChange={() => {
                      setProgramVenue((prev) => ({
                        ...prev,
                        [venue]: !prev[venue],
                      }));
                    }}
                  />
                  <label htmlFor={venue}>{venue.replace(/([A-Z])/g, ' $1').toUpperCase()}</label>
                </div>
              ))}

              {customVenues.map((venue, index) => (
                <div key={`custom-${index}`} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`venueCustom${index}`}
                    className="mr-2"
                    onChange={() => { }}
                  />
                  <label htmlFor={`venueCustom${index}`}>{venue}</label>
                </div>
              ))}
            </div>

            <div className="flex items-center mt-2">
              {showInput && (
                <input
                  type="text"
                  value={newVenue}
                  onChange={handleInputChange}
                  onKeyDown={handleAddVenue}
                  placeholder="Enter custom venue"
                  className="border p-1 rounded ml-2"
                />
              )}
              <span
                className="text-sm text-gray-500 mr-2 cursor-pointer"
                onClick={() => setShowInput(true)} // Show input when clicked
              >
                + Add Other
              </span>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="flex items-center justify-between">
              <label htmlFor="attendeesNumber" className="block text-sm font-medium text-gray-700">
                Projected Number of Attendees
              </label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="noAttendeesNumber"
                  className="mr-1"
                  {...register('noAttendeesNumber')}
                />
                <label htmlFor="noAttendeesNumber" className="text-sm">N/A</label>
              </div>
            </div>
            <input
              type="number"
              id="attendeesNumber"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              {...register('attendeesNumber')}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Does this program require registration?
            </label>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="registrationYes"
                  value="yes"
                  className="mr-2"
                  {...register('requiresRegistration')}
                />
                <label htmlFor="registrationYes">Yes</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="registrationNo"
                  value="no"
                  className="mr-2"
                  {...register('requiresRegistration')}
                />
                <label htmlFor="registrationNo">No</label>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700">
                Please provide flyer with the announcement. Flyer must be made from one of the templates provided in size 1080x1080 (if applicable)
              </label>
              <span className="text-sm text-gray-500">Max: 5</span>
            </div>
            <div
              className="border-2 border-dashed border-gray-300 rounded-md p-6 mt-2 flex flex-col items-center justify-center"
              onDrop={handleFileDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <p className="text-sm text-gray-500">Drag your files here or</p>
              <input
                type="file"
                multiple
                onChange={handleFileSelect}
                className="hidden"
                id="fileUpload"
              />
              <label htmlFor="fileUpload" className="text-blue-500 hover:underline cursor-pointer">
                browse
              </label>
              <p className="text-xs text-gray-400 mt-1">(JPG, PNG, PDF)</p>
            </div>
          </div>




          {watchChannels?.channels?.jamatAnnouncement && (
            <div className="form-section visible">
              <div className="bg-green-700 p-4 rounded text-white">
                <h3 className="font-semibold">Jamati Announcement Details</h3>
              </div>

              <div className="bg-white p-6 rounded shadow grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstAnnouncementDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Date of 1st Announcement
                  </label>
                  <input
                    type="date"
                    id="firstAnnouncementDate"
                    className="w-full p-2 border border-gray-300 rounded"
                    {...register('firstAnnouncementDate')}
                  />
                </div>

                <div></div>

                <div className="md:col-span-2">
                  <label htmlFor="firstAnnouncementText" className="block text-sm font-medium text-gray-700 mb-1">
                    Announcement verbiage for 1st week
                  </label>
                  <textarea
                    id="firstAnnouncementText"
                    rows={5}
                    placeholder="Maximum 150 Characters"
                    className="w-full p-2 border border-gray-300 rounded"
                    {...register('firstAnnouncementText', { maxLength: 150 })}
                  />
                </div>

                <div>
                  <label htmlFor="secondAnnouncementDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Date of 2nd Announcement
                  </label>
                  <input
                    type="date"
                    id="secondAnnouncementDate"
                    className="w-full p-2 border border-gray-300 rounded"
                    {...register('secondAnnouncementDate')}
                  />
                </div>

                <div></div>

                <div className="md:col-span-2">
                  <label htmlFor="secondAnnouncementText" className="block text-sm font-medium text-gray-700 mb-1">
                    Announcement verbiage for 2nd week
                  </label>
                  <textarea
                    id="secondAnnouncementText"
                    rows={5}
                    placeholder="Maximum 150 Characters"
                    className="w-full p-2 border border-gray-300 rounded"
                    {...register('secondAnnouncementText', { maxLength: 150 })}
                  />
                </div>
              </div>
            </div>
          )}

          {watchChannels?.channels?.ismailiInsight && (
            <div className="form-section visible">
              <div className="bg-green-700 p-4 rounded text-white">
                <h3 className="font-semibold">Ismaili Insight Newsletter</h3>
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
                    {...register('publicationDate')}
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
                    {...register('submissionTitle')}
                  />
                </div>

                <div>
                  <label htmlFor="submissionType" className="block text-sm font-medium text-gray-700 mb-1">
                    Select type of submission
                  </label>
                  <select
                    id="submissionType"
                    className="w-full p-2 border border-gray-300 rounded"
                    {...register('submissionType')}
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
                    {...register('shortText', { maxLength: 150 })}
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="graphicLink" className="block text-sm font-medium text-gray-700 mb-1">
                    Link of graphic or photos to be used (Provide in PNG format, square shape, 1080x1080)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-6 mt-2 flex flex-col items-center justify-center">
                    <p className="text-sm text-gray-500">Drag your files here or</p>
                    <button type="button" className="text-blue-500 hover:underline">browse</button>
                  </div>
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
                    {...register('registrationLink')}
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
                    <button type="button" className="text-sm text-blue-600 hover:underline">Select All</button>
                  </div>
                  <div className="border border-gray-300 rounded p-2">
                    <div className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id="acstCorpusChristi"
                        className="mr-2"
                        {...register('jamatkhanas.acstCorpusChristi')}
                      />
                      <label htmlFor="acstCorpusChristi">Corpus Christi</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="acstSanAntonio"
                        className="mr-2"
                        {...register('jamatkhanas.acstSanAntonio')}
                      />
                      <label htmlFor="acstSanAntonio">San Antonio</label>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold">ACCT</h4>
                    <button type="button" className="text-sm text-blue-600 hover:underline">Select All</button>
                  </div>
                  <div className="border border-gray-300 rounded p-2">
                    <div className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id="acctCollegeStation"
                        className="mr-2"
                        {...register('jamatkhanas.acctCollegeStation')}
                      />
                      <label htmlFor="acctCollegeStation">College Station</label>
                    </div>
                    <div className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id="acctAustinSouth"
                        className="mr-2"
                        {...register('jamatkhanas.acctAustinSouth')}
                      />
                      <label htmlFor="acctAustinSouth">Austin South</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="acctAustin"
                        className="mr-2"
                        {...register('jamatkhanas.acctAustin')}
                      />
                      <label htmlFor="acctAustin">Austin</label>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold">GREATER HOUSTON</h4>
                    <button type="button" className="text-sm text-blue-600 hover:underline">Select All</button>
                  </div>
                  <div className="border border-gray-300 rounded p-2">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="ghClearLake"
                          className="mr-2"
                          {...register('jamatkhanas.ghClearLake')}
                        />
                        <label htmlFor="ghClearLake">Clear Lake</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="ghKaty"
                          className="mr-2"
                          {...register('jamatkhanas.ghKaty')}
                        />
                        <label htmlFor="ghKaty">Katy</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="ghHeadquarters"
                          className="mr-2"
                          {...register('jamatkhanas.ghHeadquarters')}
                        />
                        <label htmlFor="ghHeadquarters">Headquarters</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="ghPrincipal"
                          className="mr-2"
                          {...register('jamatkhanas.ghPrincipal')}
                        />
                        <label htmlFor="ghPrincipal">Principal</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="ghHarvestGreen"
                          className="mr-2"
                          {...register('jamatkhanas.ghHarvestGreen')}
                        />
                        <label htmlFor="ghHarvestGreen">Harvest Green</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="ghSugarLand"
                          className="mr-2"
                          {...register('jamatkhanas.ghSugarLand')}
                        />
                        <label htmlFor="ghSugarLand">Sugar Land</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="ghBeaumont"
                          className="mr-2"
                          {...register('jamatkhanas.ghBeaumont')}
                        />
                        <label htmlFor="ghBeaumont">Beaumont</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="ghSpring"
                          className="mr-2"
                          {...register('jamatkhanas.ghSpring')}
                        />
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
                  {...register('comment')}
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
              onClick={() => router.push('/')}
            >
              Cancel
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}