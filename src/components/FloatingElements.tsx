"use client";

import { motion } from "framer-motion";
import { 
  BookOpen, 
  Calculator, 
  GraduationCap, 
  Lightbulb, 
  Pencil, 
  Star,
  Brain,
  Atom
} from "lucide-react";

export function FloatingElements() {
  const elements = [
    { Icon: BookOpen, color: "text-violet-400", x: "10%", y: "20%", delay: 0 },
    { Icon: Calculator, color: "text-pink-400", x: "85%", y: "15%", delay: 0.5 },
    { Icon: GraduationCap, color: "text-cyan-400", x: "15%", y: "70%", delay: 1 },
    { Icon: Lightbulb, color: "text-amber-400", x: "90%", y: "60%", delay: 1.5 },
    { Icon: Pencil, color: "text-emerald-400", x: "5%", y: "45%", delay: 2 },
    { Icon: Star, color: "text-yellow-400", x: "80%", y: "80%", delay: 2.5 },
    { Icon: Brain, color: "text-purple-400", x: "70%", y: "25%", delay: 0.3 },
    { Icon: Atom, color: "text-blue-400", x: "25%", y: "85%", delay: 1.2 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.6, 
            scale: 1,
            y: [0, -20, 0, 20, 0],
            rotate: [0, 10, -10, 5, 0]
          }}
          transition={{ 
            opacity: { delay: item.delay, duration: 0.5 },
            scale: { delay: item.delay, duration: 0.5 },
            y: { 
              delay: item.delay + 0.5, 
              duration: 6 + Math.random() * 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            },
            rotate: {
              delay: item.delay + 0.5,
              duration: 8 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className={`absolute ${item.color}`}
          style={{ left: item.x, top: item.y }}
        >
          <item.Icon className="w-8 h-8 md:w-10 md:h-10 drop-shadow-lg" />
        </motion.div>
      ))}

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{ 
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3
          }}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-violet-400 to-pink-400"
          style={{ 
            left: `${Math.random() * 100}%`, 
            top: `${Math.random() * 100}%` 
          }}
        />
      ))}
    </div>
  );
}
