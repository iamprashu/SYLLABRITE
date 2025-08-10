import React from "react";
import { Calendar, Clock, Plus } from "lucide-react";

const Schedule = () => {
  const scheduleItems = [
    {
      time: "09:00 AM",
      subject: "Mathematics",
      topic: "Calculus - Derivatives",
      duration: "2 hours",
      type: "study",
      color: "bg-blue-500",
    },
    {
      time: "02:00 PM",
      subject: "Physics",
      topic: "Quantum Mechanics Quiz",
      duration: "1 hour",
      type: "quiz",
      color: "bg-purple-500",
    },
    {
      time: "04:30 PM",
      subject: "Chemistry",
      topic: "Organic Chemistry Review",
      duration: "1.5 hours",
      type: "review",
      color: "bg-indigo-500",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Study Schedule</h1>
          <p className="text-slate-300">Manage your daily study plan</p>
        </div>
        <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Session</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-slate-800 rounded-2xl shadow-2xl p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Today's Schedule
            </h3>
            <div className="space-y-4">
              {scheduleItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-lg border border-slate-600 hover:border-slate-500 transition-colors"
                >
                  <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-white">{item.subject}</h4>
                      <span className="text-sm text-slate-300">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-sm text-slate-300">{item.topic}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span className="text-xs text-slate-400">
                        {item.duration}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          item.type === "study"
                            ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                            : item.type === "quiz"
                            ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                            : "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-800 rounded-2xl shadow-2xl p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Stats
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Total Study Time</span>
                <span className="font-semibold text-white">4.5 hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Sessions Today</span>
                <span className="font-semibold text-white">3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Completed</span>
                <span className="font-semibold text-blue-400">1/3</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl shadow-2xl p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Calendar</h3>
            <div className="flex items-center justify-center">
              <Calendar className="w-16 h-16 text-blue-400" />
            </div>
            <p className="text-center text-slate-300 mt-2">
              Calendar view coming soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
