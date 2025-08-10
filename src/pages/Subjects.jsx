import React from "react";
import { BookOpen, Plus, TrendingUp } from "lucide-react";

const Subjects = () => {
  const subjects = [
    {
      name: "Mathematics",
      progress: 75,
      totalTopics: 24,
      completedTopics: 18,
      nextTopic: "Integration by Parts",
      color: "bg-blue-500",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      name: "Physics",
      progress: 60,
      totalTopics: 20,
      completedTopics: 12,
      nextTopic: "Quantum Mechanics",
      color: "bg-purple-500",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      name: "Chemistry",
      progress: 85,
      totalTopics: 18,
      completedTopics: 15,
      nextTopic: "Organic Reactions",
      color: "bg-indigo-500",
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      name: "Biology",
      progress: 45,
      totalTopics: 22,
      completedTopics: 10,
      nextTopic: "Cell Division",
      color: "bg-cyan-500",
      gradient: "from-cyan-500 to-cyan-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">My Subjects</h1>
          <p className="text-slate-300">
            Track your progress across all subjects
          </p>
        </div>
        <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Subject</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-2xl shadow-2xl p-6 hover:shadow-3xl transition-all cursor-pointer border border-slate-700 hover:border-slate-600"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${subject.gradient} flex items-center justify-center`}
              >
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-white">
                  {subject.progress}%
                </span>
                <p className="text-xs text-slate-400">Complete</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mb-2">
              {subject.name}
            </h3>

            <div className="mb-4">
              <div className="flex justify-between text-sm text-slate-300 mb-1">
                <span>Progress</span>
                <span>
                  {subject.completedTopics}/{subject.totalTopics} topics
                </span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${subject.gradient}`}
                  style={{ width: `${subject.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">Next Topic:</span>
              </div>
              <p className="text-sm font-medium text-white">
                {subject.nextTopic}
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-700">
              <button className="w-full flex items-center justify-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">View Details</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-800 rounded-2xl shadow-2xl p-6 border border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4">
          Overall Progress
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1">66%</div>
            <p className="text-sm text-slate-300">Average Progress</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-1">55</div>
            <p className="text-sm text-slate-300">Topics Completed</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1">29</div>
            <p className="text-sm text-slate-300">Topics Remaining</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
