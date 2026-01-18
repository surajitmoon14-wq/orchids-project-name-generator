"use client";

import { motion } from "framer-motion";
import { 
  Trophy, 
  Star, 
  Sparkles, 
  RefreshCw,
  TrendingUp,
  Award,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface ResultCardProps {
  score: number;
  onReset: () => void;
}

export function ResultCard({ score, onReset }: ResultCardProps) {
  const [displayScore, setDisplayScore] = useState(0);
  const [mounted, setMounted] = useState(false);
  const roundedScore = Math.round(score);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    if (s >= 90) return { label: "Excellent!", color: "text-emerald-500", bgColor: "from-emerald-500 to-teal-500", emoji: "🌟" };
    if (s >= 80) return { label: "Great Job!", color: "text-blue-500", bgColor: "from-blue-500 to-cyan-500", emoji: "🎉" };
    if (s >= 70) return { label: "Good Work!", color: "text-violet-500", bgColor: "from-violet-500 to-purple-500", emoji: "👍" };
    if (s >= 60) return { label: "Keep Going!", color: "text-amber-500", bgColor: "from-amber-500 to-orange-500", emoji: "💪" };
    return { label: "You Can Do It!", color: "text-rose-500", bgColor: "from-rose-500 to-pink-500", emoji: "📚" };
  };

  const category = getScoreCategory(roundedScore);

  const confettiColors = ["#8B5CF6", "#EC4899", "#06B6D4", "#F59E0B", "#10B981", "#6366F1"];

  return (
    <div className="relative">
      {mounted && roundedScore >= 70 && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                y: -20, 
                rotate: 0,
                opacity: 1
              }}
              animate={{ 
                y: "100vh",
                rotate: 720,
                opacity: 0
              }}
              transition={{ 
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 0.5,
                ease: "linear"
              }}
              className="absolute w-3 h-3 rounded-sm"
              style={{ 
                backgroundColor: confettiColors[i % confettiColors.length],
                left: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      )}

      <Card className="w-full max-w-md glass-card border-0 shadow-2xl overflow-hidden">
        <div className={`h-2 bg-gradient-to-r ${category.bgColor}`} />
        <CardContent className="p-8 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r ${category.bgColor} mb-6 shadow-2xl`}
          >
            <Trophy className="w-12 h-12 text-white" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-medium text-muted-foreground mb-2">
              Your Predicted Math Score
            </h2>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
            className="relative"
          >
            <div className="text-8xl font-bold gradient-text mb-2">
              {displayScore}
            </div>
            <div className="text-2xl text-muted-foreground">/100</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-6 mb-8"
          >
            <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${category.bgColor} text-white font-semibold text-lg`}>
              <span className="text-2xl">{category.emoji}</span>
              {category.label}
              <Sparkles className="w-5 h-5" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="grid grid-cols-3 gap-3 mb-8"
          >
            {[
              { icon: TrendingUp, label: "Progress", value: "Strong" },
              { icon: Target, label: "Accuracy", value: "High" },
              { icon: Award, label: "Potential", value: "Great" },
            ].map((stat, index) => (
              <div key={stat.label} className="p-3 rounded-xl bg-white/50 dark:bg-white/5">
                <stat.icon className="w-5 h-5 mx-auto mb-1 text-violet-500" />
                <div className="text-xs text-muted-foreground">{stat.label}</div>
                <div className="text-sm font-semibold">{stat.value}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            <Button
              onClick={onReset}
              variant="outline"
              className="w-full h-12 text-base font-medium border-2 border-violet-200 dark:border-violet-800 hover:bg-violet-50 dark:hover:bg-violet-950"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Another Prediction
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-6 flex items-center justify-center gap-1"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + i * 0.1 }}
              >
                <Star 
                  className={`w-5 h-5 ${i < Math.floor(roundedScore / 20) ? "text-amber-400 fill-amber-400" : "text-gray-300"}`} 
                />
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}
