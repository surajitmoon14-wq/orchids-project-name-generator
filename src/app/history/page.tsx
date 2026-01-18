"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  History,
  Trash2,
  ArrowLeft,
  Home,
  Brain,
  Trophy,
  Calendar,
  User,
  AlertCircle,
  Rocket,
  TrendingUp,
  BarChart3,
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
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
          backgroundImage: `url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80')`,
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

function HistoryCard({
  entry,
  index,
  onDelete,
}: {
  entry: PredictionHistory;
  index: number;
  onDelete: (id: string) => void;
}) {
  const getScoreGradient = (score: number) => {
    if (score >= 90) return "from-emerald-500 to-teal-500";
    if (score >= 80) return "from-blue-500 to-cyan-500";
    if (score >= 70) return "from-indigo-500 to-purple-500";
    if (score >= 60) return "from-amber-500 to-orange-500";
    return "from-rose-500 to-pink-500";
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: -100, scale: 0.8 }}
      transition={{ delay: index * 0.05 }}
      layout
    >
      <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
        <div className={`h-1 bg-gradient-to-r ${getScoreGradient(entry.prediction)}`} />
        <CardContent className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${getScoreGradient(
                    entry.prediction
                  )} flex items-center justify-center shadow-lg`}
                >
                  <span className="text-xl font-bold text-white">{Math.round(entry.prediction)}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm text-zinc-500 mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(entry.timestamp)}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-indigo-500" />
                    <span className="text-sm font-medium text-zinc-800 capitalize">{entry.input.gender}</span>
                    <span className="text-zinc-300">|</span>
                    <span className="text-sm text-zinc-600">{entry.input.ethnicity}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                <div className="px-3 py-2 bg-zinc-100 rounded-lg">
                  <span className="text-zinc-500">Education</span>
                  <div className="font-medium text-zinc-700 capitalize truncate">
                    {entry.input.parentalEducation.replace("'s", "")}
                  </div>
                </div>
                <div className="px-3 py-2 bg-zinc-100 rounded-lg">
                  <span className="text-zinc-500">Lunch</span>
                  <div className="font-medium text-zinc-700 capitalize">{entry.input.lunch}</div>
                </div>
                <div className="px-3 py-2 bg-zinc-100 rounded-lg">
                  <span className="text-zinc-500">Reading</span>
                  <div className="font-medium text-zinc-700">{entry.input.readingScore}</div>
                </div>
                <div className="px-3 py-2 bg-zinc-100 rounded-lg">
                  <span className="text-zinc-500">Writing</span>
                  <div className="font-medium text-zinc-700">{entry.input.writingScore}</div>
                </div>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => onDelete(entry.id)}
              className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hover:text-red-500 hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-20"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mb-6"
      >
        <BarChart3 className="w-10 h-10 text-zinc-400" />
      </motion.div>
      <h3 className="text-xl font-semibold text-white mb-2">No Predictions Yet</h3>
      <p className="text-zinc-400 mb-8 max-w-sm mx-auto">
        Start making predictions to build your history. Each saved prediction will appear here.
      </p>
      <Link href="/predict">
        <Button
          size="lg"
          className="h-12 px-6 font-medium bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white shadow-lg shadow-indigo-500/25"
        >
          <Rocket className="w-5 h-5 mr-2" />
          Make Your First Prediction
        </Button>
      </Link>
    </motion.div>
  );
}

function ClearConfirmDialog({
  onConfirm,
  onCancel,
}: {
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onCancel}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl p-6 shadow-2xl max-w-sm w-full"
      >
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-red-100 mb-4">
            <AlertCircle className="w-7 h-7 text-red-500" />
          </div>
          <h3 className="text-lg font-semibold text-zinc-800 mb-2">Clear All History?</h3>
          <p className="text-sm text-zinc-500 mb-6">
            This will permanently delete all your saved predictions. This action cannot be undone.
          </p>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 border-zinc-300 text-zinc-700 hover:bg-zinc-100"
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 bg-red-500 hover:bg-red-600 text-white"
              onClick={onConfirm}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear All
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HistoryPage() {
  const [history, setHistory] = useState<PredictionHistory[]>([]);
  const [showClearDialog, setShowClearDialog] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("predictionHistory");
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const handleDelete = (id: string) => {
    const updated = history.filter((entry) => entry.id !== id);
    setHistory(updated);
    localStorage.setItem("predictionHistory", JSON.stringify(updated));
  };

  const handleClearAll = () => {
    setHistory([]);
    localStorage.removeItem("predictionHistory");
    setShowClearDialog(false);
  };

  const averageScore =
    history.length > 0
      ? Math.round(history.reduce((sum, entry) => sum + entry.prediction, 0) / history.length)
      : 0;

  const bestScore = history.length > 0 ? Math.round(Math.max(...history.map((e) => e.prediction))) : 0;

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StudyBackground />

      <nav className="relative z-20 px-4 md:px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
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
            <Link href="/predict">
              <Button variant="ghost" className="gap-1 md:gap-2 text-zinc-300 hover:text-white hover:bg-white/10 px-2 md:px-4 text-sm md:text-base">
                <Brain className="w-4 h-4" />
                <span className="hidden sm:inline">Predict</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </nav>

      <main className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-6 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 mb-4 md:mb-6 shadow-2xl shadow-indigo-500/25"
          >
            <History className="w-7 h-7 md:w-8 md:h-8 text-white" />
          </motion.div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 md:mb-3">
            Prediction History
          </h1>

          <p className="text-sm md:text-base text-zinc-400">
            Track your predictions and monitor your progress over time
          </p>
        </motion.div>

        {history.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8"
          >
            <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-lg overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />
              <CardContent className="p-4 md:p-5 text-center">
                <div className="text-2xl md:text-3xl font-bold text-zinc-800 mb-1">{history.length}</div>
                <div className="text-xs md:text-sm text-zinc-500">Total Predictions</div>
              </CardContent>
            </Card>
            <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-lg overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
              <CardContent className="p-4 md:p-5 text-center">
                <div className="flex items-center justify-center gap-2">
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-cyan-500" />
                  <span className="text-2xl md:text-3xl font-bold text-zinc-800">{averageScore}</span>
                </div>
                <div className="text-xs md:text-sm text-zinc-500">Average Score</div>
              </CardContent>
            </Card>
            <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-lg overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
              <CardContent className="p-4 md:p-5 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Trophy className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
                  <span className="text-2xl md:text-3xl font-bold text-zinc-800">{bestScore}</span>
                </div>
                <div className="text-xs md:text-sm text-zinc-500">Best Score</div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {history.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-end mb-4 md:mb-6"
          >
            <Button
              variant="outline"
              className="gap-2 border-white/20 bg-white/5 text-zinc-300 hover:text-red-400 hover:border-red-500/30 hover:bg-red-500/5 text-sm"
              onClick={() => setShowClearDialog(true)}
            >
              <Trash2 className="w-4 h-4" />
              Clear All
            </Button>
          </motion.div>
        )}

        <AnimatePresence mode="popLayout">
          {history.length > 0 ? (
            <div className="space-y-4">
              {history.map((entry, index) => (
                <HistoryCard key={entry.id} entry={entry} index={index} onDelete={handleDelete} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {showClearDialog && (
          <ClearConfirmDialog
            onConfirm={handleClearAll}
            onCancel={() => setShowClearDialog(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
