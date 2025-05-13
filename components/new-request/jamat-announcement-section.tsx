import { Calendar } from "lucide-react"

export default function JamatAnnouncementSection({ formProps }) {
  const { register } = formProps

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
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
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
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
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
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Announcement verbiage for 1st week</label>
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
  )
}
