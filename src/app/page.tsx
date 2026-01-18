"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Brain,
  ChevronRight,
  History,
  Target,
  TrendingUp,
  BarChart3,
  Database,
  Cpu,
  ArrowRight,
  Layers,
  Sparkles,
  BookOpen,
  GraduationCap,
  Shield,
  Clock,
  Lightbulb,
  CheckCircle,
  LineChart,
  Gauge,
  FileText,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function BookLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill="url(#bookGrad)" />
      <path
        d="M10 12C10 10.8954 10.8954 10 12 10H18C19.1046 10 20 10.8954 20 12V28C20 29.1046 19.1046 30 18 30H12C10.8954 30 10 29.1046 10 28V12Z"
        fill="white"
        fillOpacity="0.9"
      />
      <path
        d="M20 12C20 10.8954 20.8954 10 22 10H28C29.1046 10 30 10.8954 30 12V28C30 29.1046 29.1046 30 28 30H22C20.8954 30 20 29.1046 20 28V12Z"
        fill="white"
        fillOpacity="0.7"
      />
      <path d="M20 10V30" stroke="url(#bookGrad)" strokeWidth="1.5" />
      <circle cx="15" cy="16" r="2" fill="#6366f1" />
      <path d="M12 21H18" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 24H16" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 16H28" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 19H26" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 22H28" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function StudyBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/30 via-transparent to-purple-950/30" />
      
      <motion.div
        className="absolute top-1/4 -left-20 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-indigo-500/20 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/15 rounded-full blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-purple-500/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function FloatingElements() {
  const elements = [
    { left: "5%", top: "15%", delay: 0, icon: "📚" },
    { left: "92%", top: "20%", delay: 1, icon: "✏️" },
    { left: "8%", top: "70%", delay: 2, icon: "📖" },
    { left: "88%", top: "75%", delay: 1.5, icon: "🎓" },
    { left: "15%", top: "45%", delay: 0.5, icon: "📝" },
    { left: "85%", top: "50%", delay: 2.5, icon: "💡" },
    { left: "50%", top: "10%", delay: 1.8, icon: "🏆" },
    { left: "3%", top: "35%", delay: 0.8, icon: "📊" },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none hidden md:block">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl md:text-3xl lg:text-4xl opacity-50"
          style={{ left: el.left, top: el.top }}
          animate={{
            y: [0, -20, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: el.delay,
          }}
        >
          {el.icon}
        </motion.div>
      ))}
    </div>
  );
}

function StatsCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, mounted]);

  if (!mounted) {
    return <span className="tabular-nums">{value}{suffix}</span>;
  }

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: "ML-Powered Analysis",
      description: "Advanced linear regression model trained on thousands of real student records",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Target,
      title: "92% Accuracy",
      description: "Industry-leading prediction accuracy validated through rigorous testing",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: TrendingUp,
      title: "Performance Insights",
      description: "Understand how various factors impact your academic potential",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data stays private - predictions happen locally in your browser",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Clock,
      title: "Instant Results",
      description: "Get your predicted score in seconds with our optimized algorithm",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: Lightbulb,
      title: "Smart Recommendations",
      description: "Receive personalized suggestions to improve your academic performance",
      gradient: "from-rose-500 to-pink-500",
    },
  ];

  const stats = [
    { value: 92, suffix: "%", label: "Accuracy" },
    { value: 7, suffix: "+", label: "Features" },
    { value: 1000, suffix: "+", label: "Data Points" },
    { value: 50, suffix: "K+", label: "Predictions" },
  ];

  const techStack = [
    { icon: Cpu, label: "ML Model" },
    { icon: Database, label: "Dataset" },
    { icon: BarChart3, label: "Analytics" },
    { icon: Layers, label: "Next.js" },
  ];

  const badges = [
    { icon: Brain, label: "AI Powered" },
    { icon: BookOpen, label: "Smart Analysis" },
    { icon: Target, label: "High Accuracy" },
    { icon: GraduationCap, label: "Student Focused" },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Enter Your Details",
      description: "Fill in demographic info, parental education, and your current test scores",
      icon: FileText,
    },
    {
      step: "02",
      title: "AI Analysis",
      description: "Our ML model processes your data using trained coefficients",
      icon: Settings,
    },
    {
      step: "03",
      title: "Get Prediction",
      description: "Receive your predicted academic score instantly with confidence level",
      icon: Gauge,
    },
    {
      step: "04",
      title: "Track Progress",
      description: "Save results and monitor your improvement over time",
      icon: LineChart,
    },
  ];



  return (
    <div className="min-h-screen relative overflow-hidden">
      <StudyBackground />
      <FloatingElements />

      <nav className="relative z-20 px-4 md:px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 md:gap-3"
          >
            <BookLogo className="w-9 h-9 md:w-10 md:h-10" />
            <span className="text-lg md:text-xl font-semibold text-white">EduPredict</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-1 md:gap-2"
          >
            <Link href="/history">
              <Button variant="ghost" className="gap-1 md:gap-2 text-zinc-300 hover:text-white hover:bg-white/10 px-2 md:px-4 text-sm md:text-base">
                <History className="w-4 h-4" />
                <span className="hidden sm:inline">History</span>
              </Button>
            </Link>
            <Link href="/predict">
              <Button className="gap-1 md:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-3 md:px-4 text-sm md:text-base">
                <span className="hidden sm:inline">Launch App</span>
                <span className="sm:hidden">Start</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="min-h-[85vh] md:min-h-[90vh] flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8 flex-wrap"
            >
              {badges.map((badge, i) => (
                <motion.span
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-medium"
                >
                  <badge.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  {badge.label}
                </motion.span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 tracking-tight leading-tight"
            >
              <span className="text-white">Discover your predicted</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                academic score
              </span>
              <span className="text-white"> using</span>
              <br />
              <span className="text-white">AI-powered analysis!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg lg:text-xl text-zinc-300 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-4"
            >
              Advanced ML model analyzing demographic factors, parental education, 
              and test performance to predict academic outcomes with high accuracy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-12 md:mb-16"
            >
              <Link href="/predict">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-sm md:text-base font-medium bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white shadow-xl shadow-indigo-500/25"
                >
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Start Prediction
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-1" />
                </Button>
              </Link>
              <Link href="/history">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-sm md:text-base font-medium border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30"
                >
                  <History className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  View History
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1"
                  >
                    <StatsCounter value={stat.value} suffix={stat.suffix} />
                  </motion.div>
                  <div className="text-xs md:text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="px-4 md:px-6 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent mb-16 md:mb-20"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                Powerful Features
              </h2>
              <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto px-4">
                Everything you need to understand and improve your academic performance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden group">
                    <CardContent className="p-5 md:p-6">
                      <div
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-3 md:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 md:px-6 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                How It Works
              </h2>
              <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto px-4">
                Four simple steps to predict your academic performance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {howItWorks.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 mb-4 shadow-xl shadow-indigo-500/20">
                      <item.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="text-xs font-bold text-indigo-400 mb-2">STEP {item.step}</div>
                    <h3 className="text-base md:text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-xs md:text-sm text-zinc-400">{item.description}</p>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-indigo-500/50 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 md:px-6 py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 lg:p-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white">About The Project</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    Dataset & Training
                  </h3>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                    Model trained on student performance data using linear regression.
                    Features include gender, ethnicity, parental education level, lunch type,
                    test preparation status, and current reading/writing scores.
                  </p>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    Prediction Method
                  </h3>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                    Uses weighted coefficients derived from training data to calculate
                    predicted scores. Each feature contributes to the final prediction
                    based on its correlation with academic performance.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-6 border-t border-white/10">
                <span className="text-xs md:text-sm text-zinc-500">Built with:</span>
                {techStack.map((tech) => (
                  <div
                    key={tech.label}
                    className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-300 text-xs md:text-sm"
                  >
                    <tech.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    {tech.label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 md:px-6 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 lg:p-12"
            >
              <div className="flex justify-center mb-6">
                <BookLogo className="w-16 h-16 md:w-20 md:h-20" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                Ready to predict your score?
              </h2>
              <p className="text-sm md:text-base text-zinc-300 mb-6 md:mb-8 max-w-lg mx-auto px-4">
                Join thousands of students using AI to understand and improve their academic performance
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                <Link href="/predict">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-12 md:h-14 px-8 md:px-10 text-sm md:text-base font-medium bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white shadow-xl shadow-indigo-500/25"
                  >
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Start Free Prediction
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="flex items-center justify-center gap-4 md:gap-6 mt-6 md:mt-8 text-xs md:text-sm text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Free to use
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  No signup required
                </span>
                <span className="hidden sm:flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Instant results
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <footer className="px-4 md:px-6 py-6 md:py-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <BookLogo className="w-6 h-6" />
              <span>EduPredict - ML Score Predictor</span>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              <Link href="/predict" className="text-sm text-zinc-400 hover:text-white transition-colors">
                Predict
              </Link>
              <Link href="/history" className="text-sm text-zinc-400 hover:text-white transition-colors">
                History
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
