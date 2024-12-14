"use client";

import { useState } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Home,
  MapPin,
  Menu,
  Search,
  Settings,
  Trash2,
  User,
} from "lucide-react";

// This would normally come from your database
const userData = {
  username: "johndoe",
  name: "John Doe",
  location: "New York, USA",
  createdAt: "2023-01-01",
  updatedAt: "2024-01-14",
  postsCount: 42,
  posts: [
    {
      id: 1,
      title: "My first post",
      description: "This is the beginning of my journey.",
      createdAt: "2024-01-14",
    },
    {
      id: 2,
      title: "Another interesting post",
      description: "Sharing some thoughts on recent events.",
      createdAt: "2024-01-13",
    },
    {
      id: 3,
      title: "Latest thoughts",
      description: "Reflecting on personal growth and future plans.",
      createdAt: "2024-01-12",
    },
  ],
};

const menuItems = [
  { icon: Home, name: "Home" },
  { icon: User, name: "Profile" },
  { icon: Settings, name: "Settings" },
];

export default function ProfilePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("newest");

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <div className="flex items-center">
           
            <a href="/" className="text-4xl font-bold text-indigo-600">
              Dhahabu
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="search"
                placeholder="Search in Dhaabu..."
                className="w-96 rounded-full bg-gray-200 px-4 py-2 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Login/Logout
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto flex">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 top-20 transform bg-white shadow-lg transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "w-64" : "w-20"
          }`}
        >
          <button
            onClick={toggleSidebar}
            className="absolute -right-3 top-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-0.5 text-black shadow-md hover:bg-gray-100"
          >
            {isSidebarOpen ? (
              <ChevronLeft className="h-6 w-6" />
            ) : (
              <ChevronRight className="h-6 w-6" />
            )}
          </button>
          <nav className="mt-8 space-y-4 px-2">
         
            {menuItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <item.icon className="h-5 w-5" />
                <span
                  className={`ml-3 transition-opacity duration-300 ${
                    isSidebarOpen ? "block" : "hidden"
                  }`}
                >
                  {item.name}
                </span>
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main
          className={`flex-1 p-4 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "ml-64" : "ml-20"
          }`}
        >
          {/* Profile Header */}
          <div className="mb-6 overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            <div className="relative px-4 pb-4 pt-16">
              <div className="absolute -top-12 left-4">
                <div className="h-24 w-24 rounded-full border-4 border-white bg-gray-300"></div>
              </div>
              <div className="mb-4 flex flex-col items-start justify-between space-y-2 sm:flex-row sm:items-center sm:space-y-0">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">
                    {userData.name}
                  </h1>
                  <p className="text-sm text-gray-600">@{userData.username}</p>
                </div>
                <div className="space-x-2">
                  <button className="rounded bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Edit Profile
                  </button>
                  <button className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                    Delete Profile
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="mr-1 h-4 w-4" />
                  {userData.location}
                </div>
                <div className="flex items-center">
                  <CalendarDays className="mr-1 h-4 w-4" />
                  Joined {new Date(userData.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>

          {/* Posts Section */}
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <div className="mb-4 flex flex-col items-start justify-between space-y-2 sm:flex-row sm:items-center sm:space-y-0">
              <h2 className="text-lg font-semibold text-gray-800">Posts</h2>
              <div className="flex rounded-md bg-gray-100 p-1">
                {["newest", "oldest", "popular"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-md px-3 py-1 text-sm font-medium capitalize transition-colors ${
                      activeTab === tab
                        ? "bg-white text-indigo-600 shadow"
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {userData.posts.map((post) => (
                <div
                  key={post.id}
                  className="rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {post.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {post.description}
                      </p>
                      <p className="mt-2 text-xs text-gray-500">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <button className="rounded-full p-2 text-gray-600 hover:bg-gray-200 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}





