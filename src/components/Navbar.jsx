import React, { useState } from "react";
import { Search, Bell, Menu, X, Brain } from "lucide-react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { SignOutButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const sidebarItems = [
    { name: "Dashboard", path: "/app/dashboard", icon: "📊" },
    { name: "Schedule", path: "/app/schedule", icon: "📅" },
    { name: "Subjects", path: "/app/subjects", icon: "📚" },
    { name: "Quiz Center", path: "/app/quiz", icon: "🧠" },
    { name: "Progress", path: "/app/progress", icon: "🎯" },
    { name: "Study Groups", path: "/app/groups", icon: "👥" },
  ];

  const getCurrentPageName = () => {
    const path = location.pathname;
    const item = sidebarItems.find((item) => item.path === path);
    return item ? item.name : "Dashboard";
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="absolute w-full bg-gradient-to-r from-blue-600 to-purple-600 min-h-75"></div>

      <aside
        className={`fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-slate-800 shadow-2xl max-w-64 ease-nav-brand z-50 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0 border border-slate-700`}
      >
        <div className="h-19">
          <button
            className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer xl:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-4 h-4 text-slate-400" />
          </button>
          <div className="block px-8 py-6 m-0 text-sm whitespace-nowrap">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-2">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand text-white">
                SyllaBrite
              </span>
            </div>
          </div>
        </div>

        <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-slate-600 to-transparent" />

        <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
          <ul className="flex flex-col pl-0 mb-0">
            {sidebarItems.map((item, index) => {
              const isActive =
                location.pathname === item.path ||
                (location.pathname === "/app" &&
                  item.path === "/app/dashboard");
              return (
                <li key={index} className="mt-0.5 w-full">
                  <Link
                    to={item.path}
                    className={`py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold transition-colors ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30"
                        : "text-slate-300 hover:bg-slate-700 hover:text-white"
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mx-4 mb-4">
          <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
            <div className="w-1/2 mx-auto mb-4">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">📖</span>
              </div>
            </div>
            <div className="flex-auto w-full p-4 pt-0 text-center">
              <div className="transition-all duration-200 ease-nav-brand">
                <h6 className="mb-0 text-sm text-slate-200">Need help?</h6>
                <p className="mb-0 text-xs font-semibold leading-tight text-slate-400">
                  Check our study guides
                </p>
              </div>
            </div>
          </div>

         

          <button className="inline-block w-full px-4 py-2 mb-2 text-xs font-bold leading-normal text-center text-white capitalize transition-all ease-in rounded-lg shadow-md bg-slate-600 hover:bg-slate-500 hover:shadow-xs hover:-translate-y-px">
            Study Guide
          </button>
          <button className="inline-block w-full px-4 py-2 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-gradient-to-r from-blue-500 to-purple-500 border-0 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 hover:shadow-xs hover:-translate-y-px">
            Upgrade to Pro
          </button>
        </div>

        <div className="mx-4 mb-4 absolute bottom-0 w-[90%] ">
          <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
            <div className="w-1/2 mx-auto mb-4">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto">
                <UserButton className="h-full w-full"/>
              </div>
            </div>
           
          </div>
          
          <button className="inline-block w-full px-4 py-2 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-gradient-to-r from-blue-500 to-purple-500 border-0 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 hover:shadow-xs hover:-translate-y-px">
            <SignOutButton/>
          </button>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <main className="relative h-full min-h-screen transition-all duration-200 ease-in-out xl:ml-68">
        <nav className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start">
          <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
            <nav className="flex-1">
              <ol className="flex flex-wrap pt-1 mr-4 bg-transparent rounded-lg sm:mr-8">
                <li className="text-sm leading-normal">
                  <span className="text-white opacity-50">Pages</span>
                </li>
                <li className="text-sm pl-2 capitalize leading-normal text-white before:float-left before:pr-2 before:text-white before:content-['/']">
                  {getCurrentPageName()}
                </li>
              </ol>
              <h6 className="mb-0 font-bold text-white capitalize">
                {getCurrentPageName()}
              </h6>
            </nav>

            <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
              <div className="flex items-center md:ml-auto md:pr-4">
                <div className="relative flex flex-wrap items-stretch w-full max-w-xs transition-all rounded-lg ease">
                  <span className="text-sm ease leading-5.6 absolute z-10 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-400 transition-all">
                    <Search className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    className="pl-9 text-sm focus:shadow-primary-outline ease w-full leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-slate-600 bg-slate-700 text-white bg-clip-padding py-2 pr-3 transition-all placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:transition-shadow"
                    placeholder="Search..."
                  />
                </div>
              </div>
              <ul className="flex flex-row justify-end pl-0 mb-0 list-none">
                <li className="flex items-center">
                  <button className="block px-2 py-2 text-sm font-semibold text-white transition-all ease-nav-brand hover:opacity-75">
                    <Bell className="w-4 h-4" />
                  </button>
                </li>
                <li className="flex items-center pl-2 xl:hidden">
                  <button
                    className="block p-2 text-sm text-white transition-all ease-nav-brand hover:opacity-75"
                    onClick={() => setSidebarOpen(true)}
                  >
                    <Menu className="w-4 h-4" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="w-full px-6 py-6 mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Navbar;
