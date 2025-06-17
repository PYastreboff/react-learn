import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp
} from "@fortawesome/free-solid-svg-icons";

const ITEMS_PER_PAGE = 10;

function Users({ setPage, setCurrentPatient, people }) {
  const [search, setSearch] = useState("");
  const [currentUsersPage, setCurrentUsersPage] = useState(1);
  const [collapsed, setCollapsed] = useState(false);

  // 🔍 Filter people by name or email
  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase()) ||
    person.email.toLowerCase().includes(search.toLowerCase())
  );

  // 📄 Paginate filtered people
  const paginated = filteredPeople.slice(
    (currentUsersPage - 1) * ITEMS_PER_PAGE,
    currentUsersPage * ITEMS_PER_PAGE
  );

  const totalUsersPages = Math.ceil(filteredPeople.length / ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-slate-100 p-8 flex-1">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 w-full">
        <h1 className="text-3xl text-left">Hello Admin User 👋🏼,</h1>
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search people..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              setCurrentUsersPage(1); // Reset pagination on new search
            }}
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </div>
      </div>

      {/* User Table */}
      <div className="bg-white p-6 pb-3 rounded-2xl shadow mb-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-left">
            Manage Roles Here, You have all the POWER! ✊
          </h1>
          <button
            onClick={() => setCollapsed(prev => !prev)}
            className="text-2xl text-gray-500 hover:text-gray-800 ml-3"
          >
            <FontAwesomeIcon icon={collapsed ? faChevronDown : faChevronUp} />
          </button>
        </div>

        {!collapsed && (
          <>
            <table className="w-full text-sm text-left text-gray-600">
              <thead className="text-xs text-gray-400 uppercase border-b">
                <tr>
                  <th className="py-2">Doctor Name</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {paginated.length > 0 ? (
                  paginated.map(person => (
                    <tr
                      key={person.id}
                      className="border-b hover:bg-gray-50 cursor-pointer"
                    >
                      <td className="py-3">{person.name}</td>
                      <td>{person.phone}</td>
                      <td>{person.email}</td>
                      <td>{person.country}</td>
                      <td>
                        <select
                            className="px-2 border-r-[16px] border-r-transparent py-1 rounded bg-yellow-100 font-medium text-yellow-800 text-xs capitalize focus:outline-none hover:cursor-pointer"
                            defaultValue="suspected"
                            onChange={(e) => {
                            // Optionally handle role update logic here
                            console.log("Role changed to:", e.target.value);
                            }}
                        >
                            <option value="silly">Silly</option>
                            <option value="novice">Novice</option>
                            <option value="admin">Admin</option>
                            <option value="banned">Banned</option>
                        </select>
                        </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-gray-500 py-4 text-center">
                      No users found with this search criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Pagination */}
            {totalUsersPages > 1 && (
              <div className="mt-4 flex justify-end gap-2">
                <button
                  onClick={() => setCurrentUsersPage(p => Math.max(p - 1, 1))}
                  disabled={currentUsersPage === 1}
                  className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
                >
                  Prev
                </button>
                <span className="px-2 py-1 text-sm text-gray-600">
                  Page {currentUsersPage} of {totalUsersPages}
                </span>
                <button
                  onClick={() =>
                    setCurrentUsersPage(p =>
                      Math.min(p + 1, totalUsersPages)
                    )
                  }
                  disabled={currentUsersPage === totalUsersPages}
                  className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Users;
