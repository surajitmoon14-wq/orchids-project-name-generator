import { NextRequest, NextResponse } from "next/server";

const modelCoefficients = {
  intercept: -9.75355549254854,
  gender: 11.709658393284485,
  ethnicity: 0.23970986890921142,
  parentalEducation: 0.06583453843205689,
  lunch: 2.3213609777046997,
  testPrep: -2.928649343238817,
  readingScore: 0.22221813622289233,
  writingScore: 0.7719641532715116,
};

const genderMap: Record<string, number> = { female: 0, male: 1 };
const ethnicityMap: Record<string, number> = {
  "group A": 0,
  "group B": 1,
  "group C": 2,
  "group D": 3,
  "group E": 4,
};
const educationMap: Record<string, number> = {
  "some high school": 0,
  "high school": 1,
  "some college": 2,
  "associate's degree": 3,
  "bachelor's degree": 4,
  "master's degree": 5,
};
const lunchMap: Record<string, number> = { "free/reduced": 0, standard: 1 };
const testPrepMap: Record<string, number> = { none: 0, completed: 1 };

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const {
      gender,
      ethnicity,
      parentalEducation,
      lunch,
      testPrep,
      readingScore,
      writingScore,
    } = data;

    const genderEncoded = genderMap[gender] ?? 0;
    const ethnicityEncoded = ethnicityMap[ethnicity] ?? 0;
    const educationEncoded = educationMap[parentalEducation] ?? 0;
    const lunchEncoded = lunchMap[lunch] ?? 0;
    const testPrepEncoded = testPrepMap[testPrep] ?? 0;

    const prediction =
      modelCoefficients.intercept +
      modelCoefficients.gender * genderEncoded +
      modelCoefficients.ethnicity * ethnicityEncoded +
      modelCoefficients.parentalEducation * educationEncoded +
      modelCoefficients.lunch * lunchEncoded +
      modelCoefficients.testPrep * testPrepEncoded +
      modelCoefficients.readingScore * readingScore +
      modelCoefficients.writingScore * writingScore;

    const clampedPrediction = Math.max(0, Math.min(100, Math.round(prediction * 10) / 10));

    await new Promise((resolve) => setTimeout(resolve, 1500));

    return NextResponse.json({
      prediction: clampedPrediction,
      success: true,
    });
  } catch (error) {
    console.error("Prediction error:", error);
    return NextResponse.json(
      { error: "Failed to process prediction" },
      { status: 500 }
    );
  }
}
