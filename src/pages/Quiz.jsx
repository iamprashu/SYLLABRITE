import React from "react";
import { Brain, Play, Trophy, Clock } from "lucide-react";

const Quiz = () => {
  const quizzes = [
    {
      subject: "Mathematics",
      title: "Calculus Fundamentals",
      questions: 15,
      duration: "20 min",
      difficulty: "Medium",
      lastScore: 85,
      color: "bg-blue-500",
    },
    {
      subject: "Physics",
      title: "Quantum Mechanics",
      questions: 20,
      duration: "30 min",
      difficulty: "Hard",
      lastScore: 78,
      color: "bg-purple-500",
    },
    {
      subject: "Chemistry",
      title: "Organic Reactions",
      questions: 12,
      duration: "15 min",
      difficulty: "Easy",
      lastScore: 92,
      color: "bg-indigo-500",
    },
  ];

  const recentScores = [
    { subject: "Mathematics", score: 85, date: "Today" },
    { subject: "Physics", score: 78, date: "Yesterday" },
    { subject: "Chemistry", score: 92, date: "2 days ago" },
    { subject: "Biology", score: 88, date: "3 days ago" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Quiz Center</h1>
          <p className="text-slate-300">
            Test your knowledge and track progress
          </p>
        </div>
        <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg transition-colors">
          <Brain className="w-4 h-4" />
          <span>Create Quiz</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-slate-800 rounded-2xl shadow-2xl p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Available Quizzes
            </h3>
            <div className="space-y-4">
              {quizzes.map((quiz, index) => (
                <div
                  key={index}
                  className="border border-slate-600 rounded-lg p-4 hover:border-slate-500 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 ${quiz.color} rounded-lg flex items-center justify-center`}
                      >
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          {quiz.title}
                        </h4>
                        <p className="text-sm text-slate-300">{quiz.subject}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-xs text-slate-400">
                            {quiz.questions} questions
                          </span>
                          <span className="text-xs text-slate-400">
                            {quiz.duration}
                          </span>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              quiz.difficulty === "Easy"
                                ? "bg-green-500/20 text-green-300 border border-green-500/30"
                                : quiz.difficulty === "Medium"
                                ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                                : "bg-red-500/20 text-red-300 border border-red-500/30"
                            }`}
                          >
                            {quiz.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg transition-colors">
                        <Play className="w-4 h-4" />
                        <span>Start</span>
                      </button>
                      {quiz.lastScore && (
                        <p className="text-sm text-slate-300 mt-1">
                          Last: {quiz.lastScore}%
                        </p>
                      )}
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
              Quiz Stats
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Average Score</span>
                <span className="font-semibold text-blue-400">86%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Quizzes Taken</span>
                <span className="font-semibold text-white">24</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Best Score</span>
                <span className="font-semibold text-white">95%</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl shadow-2xl p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Recent Scores
            </h3>
            <div className="space-y-3">
              {recentScores.map((score, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">{score.subject}</p>
                    <p className="text-sm text-slate-300">{score.date}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-4 h-4 text-yellow-400" />
                    <span className="font-semibold text-white">
                      {score.score}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
