"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Brain,
  User,
  Users,
  GraduationCap,
  Utensils,
  BookCheck,
  BookOpen,
  PenTool,
  Loader2,
  RefreshCw,
  Trophy,
  ArrowLeft,
  Home,
  History,
  Save,
  Sparkles,
  Target,
  TrendingUp,
  Award,
} from "lucide-react";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PredictionHistory {
  id: string;
  timestamp: string;
  input: {
    gender: string;
    ethnicity: string;
    parentalEducation: string;
    lunch: string;
    testPrep: string;
    readingScore: number;
    writingScore: number;
  };
  prediction: number;
}

function StudyBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/40 via-transparent to-purple-950/40" />
      
      <motion.div
        className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function PredictionForm({
  onSubmit,
  isLoading,
}: {
  onSubmit: (data: {
    gender: string;
    ethnicity: string;
    parentalEducation: string;
    lunch: string;
    testPrep: string;
    readingScore: number;
    writingScore: number;
  }) => void;
  isLoading: boolean;
}) {
  const [gender, setGender] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [parentalEducation, setParentalEducation] = useState("");
  const [lunch, setLunch] = useState("");
  const [testPrep, setTestPrep] = useState("");
  const [readingScore, setReadingScore] = useState("");
  const [writingScore, setWritingScore] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      gender,
      ethnicity,
      parentalEducation,
      lunch,
      testPrep,
      readingScore: Number(readingScore),
      writingScore: Number(writingScore),
    });
  };

  const isFormValid =
    gender && ethnicity && parentalEducation && lunch && testPrep && readingScore && writingScore;

  return (
    <Card className="w-full max-w-2xl bg-white/95 backdrop-blur-xl border-0 shadow-2xl overflow-hidden">
      <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />
      <CardHeader className="pb-2 text-center">
        <CardTitle className="text-2xl font-bold text-zinc-800 flex items-center justify-center gap-2">
          <Sparkles className="w-6 h-6 text-amber-500" />
          Enter Your Details
          <Sparkles className="w-6 h-6 text-amber-500" />
        </CardTitle>
        <p className="text-sm text-zinc-500">
          Fill in the information below to predict your score
        </p>
      </CardHeader>
      <CardContent className="pt-4">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2"
            >
              <Label className="flex items-center gap-2 text-sm font-medium text-zinc-700">
                <User className="w-4 h-4 text-rose-500" />
                Gender
              </Label>
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger className="h-11 bg-zinc-50 border-zinc-200 focus:ring-indigo-500 text-zinc-800">
                  <SelectValue placeholder="Select your gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="space-y-2"
            >
              <Label className="flex items-center gap-2 text-sm font-medium text-zinc-700">
                <Users className="w-4 h-4 text-amber-500" />
                Race/Ethnicity
              </Label>
              <Select value={ethnicity} onValueChange={setEthnicity}>
                <SelectTrigger className="h-11 bg-zinc-50 border-zinc-200 focus:ring-indigo-500 text-zinc-800">
                  <SelectValue placeholder="Select ethnicity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="group A">Group A</SelectItem>
                  <SelectItem value="group B">Group B</SelectItem>
                  <SelectItem value="group C">Group C</SelectItem>
                  <SelectItem value="group D">Group D</SelectItem>
                  <SelectItem value="group E">Group E</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <Label className="flex items-center gap-2 text-sm font-medium text-zinc-700">
                <GraduationCap className="w-4 h-4 text-indigo-500" />
                Parent&apos;s Education
              </Label>
              <Select value={parentalEducation} onValueChange={setParentalEducation}>
                <SelectTrigger className="h-11 bg-zinc-50 border-zinc-200 focus:ring-indigo-500 text-zinc-800">
                  <SelectValue placeholder="Select education level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="some high school">Some High School</SelectItem>
                  <SelectItem value="high school">High School</SelectItem>
                  <SelectItem value="some college">Some College</SelectItem>
                  <SelectItem value="associate's degree">Associate&apos;s Degree</SelectItem>
                  <SelectItem value="bachelor's degree">Bachelor&apos;s Degree</SelectItem>
                  <SelectItem value="master's degree">Master&apos;s Degree</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="space-y-2"
            >
              <Label className="flex items-center gap-2 text-sm font-medium text-zinc-700">
                <Utensils className="w-4 h-4 text-orange-500" />
                Lunch Type
              </Label>
              <Select value={lunch} onValueChange={setLunch}>
                <SelectTrigger className="h-11 bg-zinc-50 border-zinc-200 focus:ring-indigo-500 text-zinc-800">
                  <SelectValue placeholder="Select lunch type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="free/reduced">Free/Reduced</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2 md:col-span-2"
            >
              <Label className="flex items-center gap-2 text-sm font-medium text-zinc-700">
                <BookCheck className="w-4 h-4 text-emerald-500" />
                Test Preparation Course
              </Label>
              <Select value={testPrep} onValueChange={setTestPrep}>
                <SelectTrigger className="h-11 bg-zinc-50 border-zinc-200 focus:ring-indigo-500 text-zinc-800">
                  <SelectValue placeholder="Select test preparation status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="space-y-2"
            >
              <Label className="flex items-center gap-2 text-sm font-medium text-zinc-700">
                <BookOpen className="w-4 h-4 text-cyan-500" />
                Reading Score (0-100)
              </Label>
              <Input
                type="number"
                min="0"
                max="100"
                value={readingScore}
                onChange={(e) => setReadingScore(e.target.value)}
                placeholder="Enter your reading score"
                className="h-11 bg-zinc-50 border-zinc-200 focus:ring-indigo-500 text-zinc-800 placeholder:text-zinc-400"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <Label className="flex items-center gap-2 text-sm font-medium text-zinc-700">
                <PenTool className="w-4 h-4 text-pink-500" />
                Writing Score (0-100)
              </Label>
              <Input
                type="number"
                min="0"
                max="100"
                value={writingScore}
                onChange={(e) => setWritingScore(e.target.value)}
                placeholder="Enter your writing score"
                className="h-11 bg-zinc-50 border-zinc-200 focus:ring-indigo-500 text-zinc-800 placeholder:text-zinc-400"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <Button
              type="submit"
              disabled={!isFormValid || isLoading}
              className="w-full h-13 text-base font-semibold bg-zinc-800 hover:bg-zinc-900 text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Predicting...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Predict My Score
                </>
              )}
            </Button>
          </motion.div>
        </form>
      </CardContent>
    </Card>
  );
}

function ResultCard({
  score,
  onReset,
  onSave,
  isSaved,
}: {
  score: number;
  onReset: () => void;
  onSave: () => void;
  isSaved: boolean;
}) {
  const [displayScore, setDisplayScore] = useState(0);
  const roundedScore = Math.round(score);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = roundedScore / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= roundedScore) {
        setDisplayScore(roundedScore);
        clearInterval(timer);
      } else {
        setDisplayScore(Math.round(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [roundedScore]);

  const getScoreCategory = (s: number) => {
    if (s >= 90) return { label: "Excellent!", gradient: "from-emerald-500 to-teal-500" };
    if (s >= 80) return { label: "Great Job!", gradient: "from-blue-500 to-cyan-500" };
    if (s >= 70) return { label: "Good Work!", gradient: "from-indigo-500 to-purple-500" };
    if (s >= 60) return { label: "Keep Going!", gradient: "from-amber-500 to-orange-500" };
    return { label: "You Can Do It!", gradient: "from-rose-500 to-pink-500" };
  };

  const category = getScoreCategory(roundedScore);

  return (
    <Card className="w-full max-w-md bg-white/95 backdrop-blur-xl border-0 shadow-2xl overflow-hidden">
      <div className={`h-1.5 bg-gradient-to-r ${category.gradient}`} />
      <CardContent className="p-8 text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${category.gradient} mb-6 shadow-2xl`}
        >
          <Trophy className="w-10 h-10 text-white" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-zinc-500 text-sm mb-2">Predicted Score</p>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
          className="mb-6"
        >
          <div className="text-7xl font-bold text-zinc-800 mb-1 tabular-nums">{displayScore}</div>
          <div className="text-xl text-zinc-400">/100</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="mb-8"
        >
          <span
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${category.gradient} text-white font-medium`}
          >
            <Award className="w-4 h-4" />
            {category.label}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="grid grid-cols-3 gap-3 mb-8"
        >
          {[
            { icon: TrendingUp, label: "Progress", value: "Strong" },
            { icon: Target, label: "Accuracy", value: "92%" },
            { icon: Brain, label: "Factors", value: "7+" },
          ].map((stat) => (
            <div key={stat.label} className="p-3 rounded-xl bg-zinc-100">
              <stat.icon className="w-4 h-4 mx-auto mb-1 text-indigo-500" />
              <div className="text-xs text-zinc-500">{stat.label}</div>
              <div className="text-sm font-medium text-zinc-800">{stat.value}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="space-y-3"
        >
          <Button
            onClick={onSave}
            disabled={isSaved}
            className="w-full h-11 text-sm font-medium bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white disabled:opacity-50"
          >
            <Save className="w-4 h-4 mr-2" />
            {isSaved ? "Saved to History" : "Save to History"}
          </Button>
          <Button
            onClick={onReset}
            variant="outline"
            className="w-full h-11 text-sm font-medium border-zinc-300 text-zinc-700 hover:bg-zinc-100"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            New Prediction
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  );
}

export default function PredictPage() {
  const [prediction, setPrediction] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [currentInput, setCurrentInput] = useState<{
    gender: string;
    ethnicity: string;
    parentalEducation: string;
    lunch: string;
    testPrep: string;
    readingScore: number;
    writingScore: number;
  } | null>(null);

  const handlePredict = async (formData: {
    gender: string;
    ethnicity: string;
    parentalEducation: string;
    lunch: string;
    testPrep: string;
    readingScore: number;
    writingScore: number;
  }) => {
    setIsLoading(true);
    setCurrentInput(formData);
    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setPrediction(data.prediction);
      setIsSaved(false);
    } catch (error) {
      console.error("Prediction error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = () => {
    if (prediction !== null && currentInput) {
      const history: PredictionHistory[] = JSON.parse(
        localStorage.getItem("predictionHistory") || "[]"
      );
      const newEntry: PredictionHistory = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        input: currentInput,
        prediction: prediction,
      };
      history.unshift(newEntry);
      localStorage.setItem("predictionHistory", JSON.stringify(history.slice(0, 50)));
      setIsSaved(true);
    }
  };

  const resetPrediction = () => {
    setPrediction(null);
    setIsSaved(false);
    setCurrentInput(null);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StudyBackground />

      <nav className="relative z-20 px-4 md:px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 md:gap-3"
          >
            <Link href="/">
              <Button variant="ghost" size="icon" className="text-zinc-300 hover:text-white hover:bg-white/10">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/" className="flex items-center gap-2 md:gap-3">
              <BookLogo className="w-8 h-8 md:w-10 md:h-10" />
              <span className="text-lg md:text-xl font-semibold text-white">EduPredict</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-1 md:gap-2"
          >
            <Link href="/">
              <Button variant="ghost" className="gap-1 md:gap-2 text-zinc-300 hover:text-white hover:bg-white/10 px-2 md:px-4 text-sm md:text-base">
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Home</span>
              </Button>
            </Link>
            <Link href="/history">
              <Button variant="ghost" className="gap-1 md:gap-2 text-zinc-300 hover:text-white hover:bg-white/10 px-2 md:px-4 text-sm md:text-base">
                <History className="w-4 h-4" />
                <span className="hidden sm:inline">History</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </nav>

      <main className="relative z-10 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4 md:px-6 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6 md:mb-8"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 md:mb-3 px-2">
            Discover your predicted <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">score</span> using
          </h1>
          <p className="text-lg md:text-xl text-zinc-300">
            AI-powered analysis!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8 flex-wrap px-2"
        >
          {[
            { icon: Brain, label: "AI Powered" },
            { icon: BookOpen, label: "Smart Analysis" },
            { icon: Target, label: "Accurate Results" },
          ].map((badge) => (
            <span
              key={badge.label}
              className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-medium"
            >
              <badge.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
              {badge.label}
            </span>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {prediction === null ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-2xl"
            >
              <PredictionForm onSubmit={handlePredict} isLoading={isLoading} />
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md"
            >
              <ResultCard
                score={prediction}
                onReset={resetPrediction}
                onSave={handleSave}
                isSaved={isSaved}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
