import React from "react";
import {
  Clock,
  BookOpen,
  Target,
  Award,
  ChevronRight,
  Play,
  CheckCircle,
  AlertCircle,
  Star,
  Zap,
  BarChart3,
  Brain,
} from "lucide-react";

const Dashboard = () => {
  const quickStats = [
    {
      title: "Study Hours Today",
      value: "4.2h",
      target: "6h",
      progress: 70,
      change: "+0.8h",
      changeType: "positive",
      icon: Clock,
      bgGradient: "from-blue-500 to-blue-600",
    },
    {
      title: "Active Subjects",
      value: "6",
      target: "8",
      progress: 75,
      change: "+1",
      changeType: "positive",
      icon: BookOpen,
      bgGradient: "from-purple-500 to-purple-600",
    },
    {
      title: "Quiz Average",
      value: "87%",
      target: "90%",
      progress: 97,
      change: "+3%",
      changeType: "positive",
      icon: Target,
      bgGradient: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Study Streak",
      value: "12",
      target: "30",
      progress: 40,
      change: "+1",
      changeType: "positive",
      icon: Award,
      bgGradient: "from-cyan-500 to-cyan-600",
    },
  ];

  const todaySchedule = [
    {
      time: "09:00",
      subject: "Mathematics",
      topic: "Calculus - Integration",
      duration: "2h",
      status: "completed",
      progress: 100,
    },
    {
      time: "14:00",
      subject: "Physics",
      topic: "Quantum Mechanics",
      duration: "1.5h",
      status: "in-progress",
      progress: 60,
    },
    {
      time: "16:30",
      subject: "Chemistry",
      topic: "Organic Reactions",
      duration: "1h",
      status: "upcoming",
      progress: 0,
    },
  ];

  const recentAchievements = [
    {
      title: "Quiz Master",
      description: "Scored 95% in Physics Quiz",
      icon: Star,
      color: "text-yellow-400",
      time: "2 hours ago",
    },
    {
      title: "Study Streak",
      description: "10 days consecutive study",
      icon: Zap,
      color: "text-orange-400",
      time: "Today",
    },
    {
      title: "Topic Completed",
      description: "Finished Calculus Chapter 5",
      icon: CheckCircle,
      color: "text-green-400",
      time: "Yesterday",
    },
  ];

  const subjectProgress = [
    {
      name: "Mathematics",
      progress: 85,
      color: "bg-blue-500",
      topics: "18/21",
    },
    { name: "Physics", progress: 72, color: "bg-purple-500", topics: "13/18" },
    {
      name: "Chemistry",
      progress: 91,
      color: "bg-indigo-500",
      topics: "20/22",
    },
    { name: "Biology", progress: 64, color: "bg-cyan-500", topics: "16/25" },
  ];

  const upcomingDeadlines = [
    {
      task: "Physics Lab Report",
      subject: "Physics",
      due: "Tomorrow",
      priority: "high",
      color: "text-red-400",
    },
    {
      task: "Math Assignment Ch.6",
      subject: "Mathematics",
      due: "3 days",
      priority: "medium",
      color: "text-yellow-400",
    },
    {
      task: "Chemistry Quiz Prep",
      subject: "Chemistry",
      due: "5 days",
      priority: "low",
      color: "text-green-400",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Good morning, Student! 👋
          </h1>
          <p className="text-slate-300 mt-1">
            Ready to continue your learning journey?
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-xl transition-all shadow-lg">
            <Play className="w-4 h-4" />
            <span>Start Study Session</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-2xl p-6 shadow-2xl transition-all duration-300 border border-slate-700 hover:shadow-3xl hover:border-slate-600"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.bgGradient} flex items-center justify-center shadow-lg`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div
                  className={`text-sm font-medium ${
                    stat.changeType === "positive"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {stat.change}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium text-slate-400">
                {stat.title}
              </h3>
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-sm text-slate-500">/ {stat.target}</span>
              </div>

              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${stat.bgGradient} transition-all duration-500`}
                  style={{ width: `${stat.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">
                Today's Schedule
              </h2>
              <button className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors">
                <span className="text-sm font-medium">View All</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              {todaySchedule.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-slate-700 hover:bg-slate-600 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        item.status === "completed"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : item.status === "in-progress"
                          ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          : "bg-slate-600 text-slate-400 border border-slate-500"
                      }`}
                    >
                      {item.status === "completed" ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : item.status === "in-progress" ? (
                        <Play className="w-5 h-5" />
                      ) : (
                        <Clock className="w-5 h-5" />
                      )}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-white">
                        {item.subject}
                      </h3>
                      <span className="text-sm text-slate-400">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-sm text-slate-300 mt-1">{item.topic}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-slate-400">
                        {item.duration}
                      </span>
                      {item.status === "in-progress" && (
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-slate-600 rounded-full h-1">
                            <div
                              className="h-1 bg-blue-500 rounded-full transition-all duration-300"
                              style={{ width: `${item.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-slate-400">
                            {item.progress}%
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">
                Subject Progress
              </h2>
              <button className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors">
                <BarChart3 className="w-4 h-4" />
                <span className="text-sm font-medium">Analytics</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {subjectProgress.map((subject, index) => (
                <div key={index} className="p-4 rounded-xl bg-slate-700">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-white">{subject.name}</h3>
                    <span className="text-sm text-slate-400">
                      {subject.topics}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 bg-slate-600 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${subject.color} transition-all duration-500`}
                        style={{ width: `${subject.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-slate-300">
                      {subject.progress}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-6">
              Recent Achievements
            </h2>

            <div className="space-y-4">
              {recentAchievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <div
                    className={`w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center ${achievement.color}`}
                  >
                    <achievement.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-white text-sm">
                      {achievement.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      {achievement.description}
                    </p>
                    <span className="text-xs text-slate-400">
                      {achievement.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">
                Upcoming Deadlines
              </h2>
              <AlertCircle className="w-5 h-5 text-orange-400" />
            </div>

            <div className="space-y-3">
              {upcomingDeadlines.map((deadline, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg border border-slate-600 hover:border-slate-500 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-white text-sm">
                      {deadline.task}
                    </h3>
                    <p className="text-xs text-slate-300">{deadline.subject}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs font-medium ${deadline.color}`}>
                      {deadline.due}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 py-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
              View All Deadlines
            </button>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <Brain className="w-8 h-8" />
              <div>
                <h3 className="font-semibold">AI Study Tip</h3>
                <p className="text-blue-100 text-sm">Personalized for you</p>
              </div>
            </div>
            <p className="text-sm text-blue-50 leading-relaxed">
              Based on your progress, consider spending more time on Physics
              concepts. Try the spaced repetition technique for better
              retention.
            </p>
            <button className="mt-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Get More Tips
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
