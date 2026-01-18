"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  User, 
  Users, 
  GraduationCap, 
  Utensils, 
  BookCheck, 
  BookOpen, 
  PenTool,
  Loader2,
  Sparkles
} from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PredictionFormProps {
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
}

export function PredictionForm({ onSubmit, isLoading }: PredictionFormProps) {
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
    gender && 
    ethnicity && 
    parentalEducation && 
    lunch && 
    testPrep && 
    readingScore && 
    writingScore;

  const formFields = [
    { delay: 0 },
    { delay: 0.05 },
    { delay: 0.1 },
    { delay: 0.15 },
    { delay: 0.2 },
    { delay: 0.25 },
    { delay: 0.3 },
  ];

  return (
    <Card className="w-full max-w-2xl glass-card border-0 shadow-2xl">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
          <Sparkles className="w-6 h-6 text-violet-500" />
          Enter Your Details
          <Sparkles className="w-6 h-6 text-pink-500" />
        </CardTitle>
        <p className="text-muted-foreground text-sm">Fill in the information below to predict your math score</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: formFields[0].delay }}
              className="space-y-2"
            >
              <Label className="flex items-center gap-2 text-sm font-medium">
                <User className="w-4 h-4 text-violet-500" />
                Gender
              </Label>
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger className="h-11 bg-white/50 dark:bg-white/5 border-violet-200 dark:border-violet-800 focus:ring-violet-500">
                  <SelectValue placeholder="Select your gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: formFields[1].delay }}
              className="space-y-2"
            >
              <Label className="flex items-center gap-2 text-sm font-medium">
                <Users className="w-4 h-4 text-pink-500" />
                Race/Ethnicity
              </Label>
              <Select value={ethnicity} onValueChange={setEthnicity}>
                <SelectTrigger className="h-11 bg-white/50 dark:bg-white/5 border-pink-200 dark:border-pink-800 focus:ring-pink-500">
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
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: formFields[2].delay }}
              className="space-y-2"
            >
              <Label className="flex items-center gap-2 text-sm font-medium">
                <GraduationCap className="w-4 h-4 text-cyan-500" />
                Parent&apos;s Education
              </Label>
              <Select value={parentalEducation} onValueChange={setParentalEducation}>
                <SelectTrigger className="h-11 bg-white/50 dark:bg-white/5 border-cyan-200 dark:border-cyan-800 focus:ring-cyan-500">
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
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: formFields[3].delay }}
              className="space-y-2"
            >
              <Label className="flex items-center gap-2 text-sm font-medium">
                <Utensils className="w-4 h-4 text-amber-500" />
                Lunch Type
              </Label>
              <Select value={lunch} onValueChange={setLunch}>
                <SelectTrigger className="h-11 bg-white/50 dark:bg-white/5 border-amber-200 dark:border-amber-800 focus:ring-amber-500">
                  <SelectValue placeholder="Select lunch type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="free/reduced">Free/Reduced</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: formFields[4].delay }}
              className="space-y-2 md:col-span-2"
            >
              <Label className="flex items-center gap-2 text-sm font-medium">
                <BookCheck className="w-4 h-4 text-emerald-500" />
                Test Preparation Course
              </Label>
              <Select value={testPrep} onValueChange={setTestPrep}>
                <SelectTrigger className="h-11 bg-white/50 dark:bg-white/5 border-emerald-200 dark:border-emerald-800 focus:ring-emerald-500">
                  <SelectValue placeholder="Select test preparation status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: formFields[5].delay }}
              className="space-y-2"
            >
              <Label className="flex items-center gap-2 text-sm font-medium">
                <BookOpen className="w-4 h-4 text-blue-500" />
                Reading Score (0-100)
              </Label>
              <Input
                type="number"
                min="0"
                max="100"
                value={readingScore}
                onChange={(e) => setReadingScore(e.target.value)}
                placeholder="Enter your reading score"
                className="h-11 bg-white/50 dark:bg-white/5 border-blue-200 dark:border-blue-800 focus:ring-blue-500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: formFields[6].delay }}
              className="space-y-2"
            >
              <Label className="flex items-center gap-2 text-sm font-medium">
                <PenTool className="w-4 h-4 text-rose-500" />
                Writing Score (0-100)
              </Label>
              <Input
                type="number"
                min="0"
                max="100"
                value={writingScore}
                onChange={(e) => setWritingScore(e.target.value)}
                placeholder="Enter your writing score"
                className="h-11 bg-white/50 dark:bg-white/5 border-rose-200 dark:border-rose-800 focus:ring-rose-500"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button 
              type="submit" 
              disabled={!isFormValid || isLoading}
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 hover:from-violet-700 hover:via-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Predicting...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Predict My Math Score
                </>
              )}
            </Button>
          </motion.div>
        </form>
      </CardContent>
    </Card>
  );
}
