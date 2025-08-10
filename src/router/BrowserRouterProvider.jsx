import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../pages/Auth";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import Schedule from "../pages/Schedule";
import Subjects from "../pages/Subjects";
import Quiz from "../pages/Quiz";

const BrowserRouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/app" element={<Navbar />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="subjects" element={<Subjects />} />
          <Route path="quiz" element={<Quiz />} />
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default BrowserRouterProvider;
