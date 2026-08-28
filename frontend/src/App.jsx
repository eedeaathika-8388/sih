import { useState } from "react";
import {
  LayoutDashboard,
  Upload,
  BookOpen,
  Brain,
  FileQuestion,
  BarChart3,
  Languages,
  FlaskConical,
  Settings,
  Bell,
  Search,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Target,
  Clock,
  Award,
  Play,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";

function App() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [language, setLanguage] = useState("English");

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "My Learning", icon: BookOpen },
    { name: "Upload Material", icon: Upload },
    { name: "AI Assistant", icon: Brain },
    { name: "Quiz & MCQs", icon: FileQuestion },
    { name: "Performance", icon: BarChart3 },
    { name: "Translation", icon: Languages },
    { name: "Simulations", icon: FlaskConical },
  ];

  const courses = [
    {
      title: "Introduction to Artificial Intelligence",
      progress: 72,
      lessons: "12 / 16 Lessons",
      color: "bg-blue-500",
    },
    {
      title: "Python Programming Basics",
      progress: 48,
      lessons: "8 / 18 Lessons",
      color: "bg-violet-500",
    },
    {
      title: "Data Structures & Algorithms",
      progress: 35,
      lessons: "5 / 14 Lessons",
      color: "bg-emerald-500",
    },
  ];

  const weakAreas = [
    { topic: "Recursion", score: "42%", level: "Needs Practice" },
    { topic: "Dynamic Programming", score: "51%", level: "Improve" },
    { topic: "Graphs", score: "63%", level: "Good Progress" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* SIDEBAR */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-72 border-r border-slate-200 bg-white p-6 transition-transform duration-300 ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-500 text-white shadow-lg">
              <Brain size={25} />
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900">EduVerse AI</h1>
              <p className="text-xs text-slate-500">Learn. Understand. Grow.</p>
            </div>
          </div>

          <button
            onClick={() => setMobileMenu(false)}
            className="lg:hidden"
          >
            <X />
          </button>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                onClick={() => {
                  setActiveMenu(item.name);
                  setMobileMenu(false);
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                  activeMenu === item.name
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 p-5 text-white">
          <Sparkles className="mb-3" size={25} />
          <h3 className="font-bold">AI Learning Partner</h3>
          <p className="mt-1 text-sm text-indigo-100">
            Personalized learning designed for you.
          </p>
          <button className="mt-4 flex items-center gap-2 text-sm font-semibold">
            Explore AI Tools <ArrowRight size={16} />
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="lg:ml-72">
        {/* HEADER */}
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white/90 px-5 py-4 backdrop-blur md:px-8">
          <div className="flex items-center gap-4">
            <button
              className="rounded-lg p-2 hover:bg-slate-100 lg:hidden"
              onClick={() => setMobileMenu(true)}
            >
              <Menu />
            </button>

            <div>
              <p className="text-sm text-slate-500">Welcome back,</p>
              <h2 className="text-xl font-bold text-slate-900">
                Ready to learn? 👋
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-600 md:flex">
              <Search size={18} />
              Search
            </button>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none"
            >
              <option>English</option>
              <option>తెలుగు</option>
              <option>हिंदी</option>
              <option>தமிழ்</option>
              <option>ಕನ್ನಡ</option>
            </select>

            <button className="relative rounded-xl p-2 hover:bg-slate-100">
              <Bell size={21} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500"></span>
            </button>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-pink-500 font-bold text-white">
              D
            </div>
          </div>
        </header>

        <div className="p-5 md:p-8">
          {/* HERO */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-600 p-7 text-white md:p-10">
            <div className="relative z-10 max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm">
                <Sparkles size={16} />
                AI-Powered Personalized Learning
              </div>

              <h1 className="text-3xl font-bold leading-tight md:text-5xl">
                Learn in the language you understand best.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-indigo-100 md:text-lg">
                Upload your study material and let AI create simple
                explanations, personalized quizzes, translations and learning
                recommendations.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-indigo-700 transition hover:scale-105">
                  <Play size={18} fill="currentColor" />
                  Continue Learning
                </button>

                <button className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-semibold backdrop-blur hover:bg-white/20">
                  Upload Material
                </button>
              </div>
            </div>

            <div className="absolute right-[-30px] top-[-40px] h-64 w-64 rounded-full bg-violet-400/30 blur-3xl"></div>
            <div className="absolute bottom-[-80px] right-[180px] h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl"></div>

            <Brain
              className="absolute bottom-8 right-8 hidden opacity-20 md:block"
              size={180}
            />
          </section>

          {/* QUICK STATS */}
          <section className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              icon={<BookOpen />}
              label="Learning Time"
              value="12.5 hrs"
              extra="+2.4 hrs this week"
              bg="bg-blue-50"
              iconBg="bg-blue-500"
            />

            <StatCard
              icon={<Target />}
              label="Average Score"
              value="78%"
              extra="+8% improvement"
              bg="bg-violet-50"
              iconBg="bg-violet-500"
            />

            <StatCard
              icon={<TrendingUp />}
              label="Learning Streak"
              value="7 Days"
              extra="Keep it going!"
              bg="bg-emerald-50"
              iconBg="bg-emerald-500"
            />

            <StatCard
              icon={<Award />}
              label="Quizzes Completed"
              value="24"
              extra="4 this week"
              bg="bg-orange-50"
              iconBg="bg-orange-500"
            />
          </section>

          <div className="mt-8 grid gap-8 xl:grid-cols-3">
            {/* LEFT SECTION */}
            <div className="space-y-8 xl:col-span-2">
              {/* CONTINUE LEARNING */}
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold">Continue Learning</h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Pick up where you left off
                    </p>
                  </div>

                  <button className="flex items-center gap-1 text-sm font-semibold text-indigo-600">
                    View All <ChevronRight size={17} />
                  </button>
                </div>

                <div className="space-y-5">
                  {courses.map((course) => (
                    <div
                      key={course.title}
                      className="rounded-2xl border border-slate-100 p-5 transition hover:shadow-md"
                    >
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-slate-800">
                            {course.title}
                          </h3>
                          <p className="mt-1 text-sm text-slate-500">
                            {course.lessons}
                          </p>
                        </div>

                        <span className="font-bold text-indigo-600">
                          {course.progress}%
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full ${course.color}`}
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* AI TOOLS */}
              <section>
                <div className="mb-5">
                  <h2 className="text-xl font-bold">AI Learning Tools</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Smart tools to make learning easier
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <ToolCard
                    icon={<Upload />}
                    title="Upload Study Material"
                    description="Upload PDF, notes or documents and let AI understand them."
                    gradient="from-blue-500 to-cyan-500"
                  />

                  <ToolCard
                    icon={<Brain />}
                    title="Simple AI Explanation"
                    description="Understand difficult topics with easy and personalized explanations."
                    gradient="from-violet-500 to-purple-500"
                  />

                  <ToolCard
                    icon={<FileQuestion />}
                    title="Quiz Generator"
                    description="Automatically generate MCQs and quizzes from your study material."
                    gradient="from-orange-400 to-rose-500"
                  />

                  <ToolCard
                    icon={<Languages />}
                    title="Real-Time Translation"
                    description="Translate educational content into regional and mother-tongue languages."
                    gradient="from-emerald-500 to-teal-500"
                  />
                </div>
              </section>
            </div>

            {/* RIGHT SECTION */}
            <div className="space-y-8">
              {/* LANGUAGE */}
              <section className="rounded-3xl bg-slate-900 p-6 text-white">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-white/10 p-3">
                    <Languages className="text-cyan-300" />
                  </div>

                  <div>
                    <h2 className="font-bold">Learn Your Way</h2>
                    <p className="text-sm text-slate-400">
                      Vernacular learning support
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-white/10 p-4">
                  <p className="text-sm text-slate-400">Current Language</p>
                  <h3 className="mt-1 text-xl font-bold">{language}</h3>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["తెలుగు", "हिंदी", "தமிழ்", "English"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className="rounded-lg bg-white/10 px-3 py-2 text-sm transition hover:bg-white/20"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </section>

              {/* WEAK AREAS */}
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold">Focus Areas</h2>
                <p className="mt-1 text-sm text-slate-500">
                  AI identified topics needing attention
                </p>

                <div className="mt-5 space-y-4">
                  {weakAreas.map((area) => (
                    <div
                      key={area.topic}
                      className="rounded-xl bg-slate-50 p-4"
                    >
                      <div className="flex justify-between">
                        <h3 className="font-semibold">{area.topic}</h3>
                        <span className="font-bold text-rose-500">
                          {area.score}
                        </span>
                      </div>

                      <p className="mt-1 text-xs text-slate-500">
                        {area.level}
                      </p>
                    </div>
                  ))}
                </div>

                <button className="mt-5 w-full rounded-xl bg-indigo-50 py-3 font-semibold text-indigo-600 hover:bg-indigo-100">
                  Practice Weak Areas
                </button>
              </section>

              {/* SIMULATION */}
              <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="bg-gradient-to-r from-orange-500 to-rose-500 p-6 text-white">
                  <FlaskConical size={30} />
                  <h2 className="mt-3 text-xl font-bold">
                    Vocational Simulation
                  </h2>
                  <p className="mt-1 text-sm text-orange-100">
                    Practice real-world skills safely.
                  </p>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-orange-100 p-3 text-orange-600">
                      <Play size={20} />
                    </div>

                    <div>
                      <h3 className="font-semibold">Interactive Training</h3>
                      <p className="text-sm text-slate-500">
                        Coming simulation module
                      </p>
                    </div>
                  </div>

                  <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 font-semibold text-white hover:bg-slate-800">
                    Explore Simulations
                    <ArrowRight size={17} />
                  </button>
                </div>
              </section>
            </div>
          </div>

          {/* AI RECOMMENDATION */}
          <section className="mt-8 rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-violet-50 p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex gap-4">
                <div className="h-fit rounded-2xl bg-indigo-600 p-4 text-white">
                  <Sparkles />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    AI Recommendation for You
                  </h2>
                  <p className="mt-2 max-w-2xl text-slate-600">
                    Based on your recent performance, spend 20 minutes
                    practicing Recursion and then attempt a personalized quiz.
                    This can help improve your score.
                  </p>
                </div>
              </div>

              <button className="whitespace-nowrap rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700">
                Start Learning
              </button>
            </div>
          </section>

          <footer className="py-8 text-center text-sm text-slate-400">
            AI-Powered Vernacular Pedagogy & Real-Time Translation Platform
          </footer>
        </div>
      </main>
    </div>
  );
}

function StatCard({ icon, label, value, extra, bg, iconBg }) {
  return (
    <div
      className={`rounded-2xl ${bg} border border-white p-5 transition hover:-translate-y-1 hover:shadow-md`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500">{label}</p>
          <h3 className="mt-2 text-2xl font-bold text-slate-900">{value}</h3>
          <p className="mt-2 text-xs font-medium text-slate-500">{extra}</p>
        </div>

        <div className={`${iconBg} rounded-xl p-3 text-white shadow-lg`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

function ToolCard({ icon, title, description, gradient }) {
  return (
    <button className="group rounded-3xl border border-slate-200 bg-white p-6 text-left transition hover:-translate-y-1 hover:shadow-xl">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg`}
      >
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-800">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>

      <div className="mt-5 flex items-center gap-2 font-semibold text-indigo-600">
        Open Tool
        <ArrowRight
          size={17}
          className="transition group-hover:translate-x-1"
        />
      </div>
    </button>
  );
}

export default App;
