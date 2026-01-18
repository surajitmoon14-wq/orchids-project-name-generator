const data = [
  { gender: "female", ethnicity: "group B", parentalEducation: "bachelor's degree", lunch: "standard", testPrep: "none", mathScore: 72, readingScore: 72, writingScore: 74 },
  { gender: "female", ethnicity: "group C", parentalEducation: "some college", lunch: "standard", testPrep: "completed", mathScore: 69, readingScore: 90, writingScore: 88 },
  { gender: "female", ethnicity: "group B", parentalEducation: "master's degree", lunch: "standard", testPrep: "none", mathScore: 90, readingScore: 95, writingScore: 93 },
  { gender: "male", ethnicity: "group A", parentalEducation: "associate's degree", lunch: "free/reduced", testPrep: "none", mathScore: 47, readingScore: 57, writingScore: 44 },
  { gender: "male", ethnicity: "group C", parentalEducation: "some college", lunch: "standard", testPrep: "none", mathScore: 76, readingScore: 78, writingScore: 75 },
  { gender: "female", ethnicity: "group B", parentalEducation: "associate's degree", lunch: "standard", testPrep: "none", mathScore: 71, readingScore: 83, writingScore: 78 },
  { gender: "female", ethnicity: "group B", parentalEducation: "some college", lunch: "standard", testPrep: "completed", mathScore: 88, readingScore: 95, writingScore: 92 },
  { gender: "male", ethnicity: "group B", parentalEducation: "some college", lunch: "free/reduced", testPrep: "none", mathScore: 40, readingScore: 43, writingScore: 39 },
  { gender: "male", ethnicity: "group D", parentalEducation: "high school", lunch: "free/reduced", testPrep: "completed", mathScore: 64, readingScore: 64, writingScore: 67 },
  { gender: "female", ethnicity: "group B", parentalEducation: "high school", lunch: "free/reduced", testPrep: "none", mathScore: 38, readingScore: 60, writingScore: 50 },
  { gender: "male", ethnicity: "group C", parentalEducation: "associate's degree", lunch: "standard", testPrep: "none", mathScore: 58, readingScore: 54, writingScore: 52 },
  { gender: "male", ethnicity: "group D", parentalEducation: "associate's degree", lunch: "standard", testPrep: "none", mathScore: 40, readingScore: 52, writingScore: 43 },
  { gender: "female", ethnicity: "group B", parentalEducation: "high school", lunch: "standard", testPrep: "none", mathScore: 65, readingScore: 81, writingScore: 73 },
  { gender: "male", ethnicity: "group A", parentalEducation: "some college", lunch: "standard", testPrep: "completed", mathScore: 78, readingScore: 72, writingScore: 70 },
  { gender: "female", ethnicity: "group A", parentalEducation: "master's degree", lunch: "standard", testPrep: "none", mathScore: 50, readingScore: 53, writingScore: 58 },
  { gender: "female", ethnicity: "group C", parentalEducation: "some high school", lunch: "standard", testPrep: "none", mathScore: 69, readingScore: 75, writingScore: 78 },
  { gender: "male", ethnicity: "group C", parentalEducation: "high school", lunch: "standard", testPrep: "none", mathScore: 88, readingScore: 89, writingScore: 86 },
  { gender: "female", ethnicity: "group B", parentalEducation: "some high school", lunch: "free/reduced", testPrep: "none", mathScore: 18, readingScore: 32, writingScore: 28 },
  { gender: "male", ethnicity: "group C", parentalEducation: "master's degree", lunch: "free/reduced", testPrep: "completed", mathScore: 46, readingScore: 42, writingScore: 46 },
  { gender: "female", ethnicity: "group C", parentalEducation: "associate's degree", lunch: "free/reduced", testPrep: "none", mathScore: 54, readingScore: 58, writingScore: 61 },
  { gender: "male", ethnicity: "group D", parentalEducation: "high school", lunch: "standard", testPrep: "none", mathScore: 66, readingScore: 69, writingScore: 63 },
  { gender: "female", ethnicity: "group B", parentalEducation: "some college", lunch: "free/reduced", testPrep: "completed", mathScore: 65, readingScore: 75, writingScore: 70 },
  { gender: "male", ethnicity: "group D", parentalEducation: "some college", lunch: "standard", testPrep: "none", mathScore: 44, readingScore: 54, writingScore: 53 },
  { gender: "female", ethnicity: "group C", parentalEducation: "some high school", lunch: "standard", testPrep: "none", mathScore: 69, readingScore: 73, writingScore: 73 },
  { gender: "male", ethnicity: "group D", parentalEducation: "bachelor's degree", lunch: "free/reduced", testPrep: "completed", mathScore: 74, readingScore: 71, writingScore: 80 },
  { gender: "male", ethnicity: "group A", parentalEducation: "master's degree", lunch: "free/reduced", testPrep: "none", mathScore: 73, readingScore: 74, writingScore: 72 },
  { gender: "male", ethnicity: "group B", parentalEducation: "some college", lunch: "standard", testPrep: "none", mathScore: 69, readingScore: 54, writingScore: 55 },
  { gender: "female", ethnicity: "group C", parentalEducation: "bachelor's degree", lunch: "standard", testPrep: "none", mathScore: 67, readingScore: 69, writingScore: 75 },
  { gender: "male", ethnicity: "group C", parentalEducation: "high school", lunch: "standard", testPrep: "none", mathScore: 70, readingScore: 70, writingScore: 65 },
  { gender: "female", ethnicity: "group D", parentalEducation: "master's degree", lunch: "standard", testPrep: "none", mathScore: 62, readingScore: 70, writingScore: 75 },
  { gender: "female", ethnicity: "group D", parentalEducation: "some college", lunch: "standard", testPrep: "none", mathScore: 69, readingScore: 74, writingScore: 74 },
  { gender: "female", ethnicity: "group B", parentalEducation: "some college", lunch: "standard", testPrep: "none", mathScore: 63, readingScore: 65, writingScore: 61 },
  { gender: "female", ethnicity: "group E", parentalEducation: "master's degree", lunch: "free/reduced", testPrep: "none", mathScore: 56, readingScore: 72, writingScore: 65 },
  { gender: "male", ethnicity: "group D", parentalEducation: "some college", lunch: "standard", testPrep: "none", mathScore: 40, readingScore: 42, writingScore: 38 },
  { gender: "male", ethnicity: "group E", parentalEducation: "some college", lunch: "standard", testPrep: "none", mathScore: 97, readingScore: 87, writingScore: 82 },
  { gender: "male", ethnicity: "group E", parentalEducation: "associate's degree", lunch: "standard", testPrep: "completed", mathScore: 81, readingScore: 81, writingScore: 79 },
  { gender: "female", ethnicity: "group D", parentalEducation: "associate's degree", lunch: "standard", testPrep: "none", mathScore: 74, readingScore: 81, writingScore: 83 },
  { gender: "female", ethnicity: "group D", parentalEducation: "some high school", lunch: "free/reduced", testPrep: "none", mathScore: 50, readingScore: 64, writingScore: 59 },
  { gender: "female", ethnicity: "group D", parentalEducation: "associate's degree", lunch: "free/reduced", testPrep: "completed", mathScore: 75, readingScore: 90, writingScore: 88 },
  { gender: "male", ethnicity: "group B", parentalEducation: "associate's degree", lunch: "free/reduced", testPrep: "none", mathScore: 57, readingScore: 56, writingScore: 57 },
  { gender: "male", ethnicity: "group C", parentalEducation: "associate's degree", lunch: "free/reduced", testPrep: "none", mathScore: 55, readingScore: 61, writingScore: 54 },
  { gender: "female", ethnicity: "group C", parentalEducation: "associate's degree", lunch: "standard", testPrep: "none", mathScore: 58, readingScore: 73, writingScore: 68 },
  { gender: "female", ethnicity: "group B", parentalEducation: "associate's degree", lunch: "standard", testPrep: "none", mathScore: 53, readingScore: 58, writingScore: 65 },
  { gender: "male", ethnicity: "group B", parentalEducation: "some college", lunch: "free/reduced", testPrep: "completed", mathScore: 59, readingScore: 65, writingScore: 66 },
  { gender: "female", ethnicity: "group E", parentalEducation: "associate's degree", lunch: "free/reduced", testPrep: "none", mathScore: 50, readingScore: 56, writingScore: 54 },
  { gender: "male", ethnicity: "group B", parentalEducation: "associate's degree", lunch: "standard", testPrep: "none", mathScore: 65, readingScore: 54, writingScore: 57 },
  { gender: "female", ethnicity: "group A", parentalEducation: "associate's degree", lunch: "standard", testPrep: "completed", mathScore: 55, readingScore: 65, writingScore: 62 },
  { gender: "female", ethnicity: "group C", parentalEducation: "high school", lunch: "standard", testPrep: "none", mathScore: 66, readingScore: 71, writingScore: 76 },
  { gender: "female", ethnicity: "group D", parentalEducation: "associate's degree", lunch: "free/reduced", testPrep: "completed", mathScore: 57, readingScore: 74, writingScore: 76 },
  { gender: "male", ethnicity: "group C", parentalEducation: "high school", lunch: "standard", testPrep: "completed", mathScore: 82, readingScore: 84, writingScore: 82 },
  { gender: "male", ethnicity: "group E", parentalEducation: "some college", lunch: "standard", testPrep: "none", mathScore: 53, readingScore: 55, writingScore: 48 },
  { gender: "male", ethnicity: "group E", parentalEducation: "associate's degree", lunch: "free/reduced", testPrep: "completed", mathScore: 77, readingScore: 69, writingScore: 68 },
  { gender: "male", ethnicity: "group C", parentalEducation: "some college", lunch: "standard", testPrep: "none", mathScore: 53, readingScore: 44, writingScore: 42 },
  { gender: "male", ethnicity: "group D", parentalEducation: "high school", lunch: "standard", testPrep: "none", mathScore: 88, readingScore: 78, writingScore: 75 },
  { gender: "female", ethnicity: "group C", parentalEducation: "some high school", lunch: "free/reduced", testPrep: "completed", mathScore: 71, readingScore: 84, writingScore: 87 },
  { gender: "female", ethnicity: "group C", parentalEducation: "high school", lunch: "free/reduced", testPrep: "none", mathScore: 33, readingScore: 41, writingScore: 43 },
  { gender: "female", ethnicity: "group E", parentalEducation: "associate's degree", lunch: "standard", testPrep: "completed", mathScore: 82, readingScore: 85, writingScore: 86 },
  { gender: "male", ethnicity: "group D", parentalEducation: "associate's degree", lunch: "standard", testPrep: "none", mathScore: 52, readingScore: 55, writingScore: 49 },
  { gender: "male", ethnicity: "group D", parentalEducation: "some college", lunch: "standard", testPrep: "completed", mathScore: 58, readingScore: 59, writingScore: 58 },
  { gender: "female", ethnicity: "group C", parentalEducation: "some high school", lunch: "free/reduced", testPrep: "none", mathScore: 0, readingScore: 17, writingScore: 10 },
  { gender: "male", ethnicity: "group E", parentalEducation: "bachelor's degree", lunch: "free/reduced", testPrep: "completed", mathScore: 79, readingScore: 74, writingScore: 72 },
  { gender: "male", ethnicity: "group A", parentalEducation: "some high school", lunch: "free/reduced", testPrep: "none", mathScore: 39, readingScore: 39, writingScore: 34 },
  { gender: "male", ethnicity: "group A", parentalEducation: "associate's degree", lunch: "free/reduced", testPrep: "none", mathScore: 62, readingScore: 61, writingScore: 55 },
  { gender: "female", ethnicity: "group C", parentalEducation: "associate's degree", lunch: "standard", testPrep: "none", mathScore: 69, readingScore: 80, writingScore: 71 },
  { gender: "female", ethnicity: "group D", parentalEducation: "some high school", lunch: "standard", testPrep: "none", mathScore: 59, readingScore: 58, writingScore: 59 },
  { gender: "male", ethnicity: "group B", parentalEducation: "some high school", lunch: "standard", testPrep: "none", mathScore: 67, readingScore: 64, writingScore: 61 },
  { gender: "male", ethnicity: "group D", parentalEducation: "some high school", lunch: "free/reduced", testPrep: "none", mathScore: 45, readingScore: 37, writingScore: 37 },
  { gender: "female", ethnicity: "group C", parentalEducation: "some college", lunch: "standard", testPrep: "none", mathScore: 60, readingScore: 72, writingScore: 74 },
  { gender: "male", ethnicity: "group B", parentalEducation: "associate's degree", lunch: "free/reduced", testPrep: "none", mathScore: 61, readingScore: 58, writingScore: 56 },
  { gender: "female", ethnicity: "group C", parentalEducation: "associate's degree", lunch: "standard", testPrep: "none", mathScore: 39, readingScore: 64, writingScore: 57 },
  { gender: "female", ethnicity: "group D", parentalEducation: "some college", lunch: "free/reduced", testPrep: "completed", mathScore: 58, readingScore: 63, writingScore: 73 },
  { gender: "male", ethnicity: "group D", parentalEducation: "some college", lunch: "standard", testPrep: "completed", mathScore: 63, readingScore: 55, writingScore: 63 },
  { gender: "female", ethnicity: "group A", parentalEducation: "associate's degree", lunch: "free/reduced", testPrep: "none", mathScore: 41, readingScore: 51, writingScore: 48 },
  { gender: "male", ethnicity: "group C", parentalEducation: "some high school", lunch: "free/reduced", testPrep: "none", mathScore: 61, readingScore: 57, writingScore: 56 },
  { gender: "male", ethnicity: "group C", parentalEducation: "some high school", lunch: "standard", testPrep: "none", mathScore: 49, readingScore: 49, writingScore: 41 },
  { gender: "male", ethnicity: "group B", parentalEducation: "associate's degree", lunch: "free/reduced", testPrep: "none", mathScore: 44, readingScore: 41, writingScore: 38 },
  { gender: "male", ethnicity: "group E", parentalEducation: "some high school", lunch: "standard", testPrep: "none", mathScore: 30, readingScore: 26, writingScore: 22 },
  { gender: "male", ethnicity: "group A", parentalEducation: "bachelor's degree", lunch: "standard", testPrep: "completed", mathScore: 80, readingScore: 78, writingScore: 81 },
  { gender: "female", ethnicity: "group D", parentalEducation: "some high school", lunch: "standard", testPrep: "completed", mathScore: 61, readingScore: 74, writingScore: 72 },
  { gender: "female", ethnicity: "group E", parentalEducation: "master's degree", lunch: "standard", testPrep: "none", mathScore: 62, readingScore: 68, writingScore: 68 },
  { gender: "female", ethnicity: "group B", parentalEducation: "associate's degree", lunch: "standard", testPrep: "none", mathScore: 47, readingScore: 49, writingScore: 50 },
  { gender: "male", ethnicity: "group B", parentalEducation: "high school", lunch: "free/reduced", testPrep: "none", mathScore: 49, readingScore: 45, writingScore: 45 },
  { gender: "male", ethnicity: "group A", parentalEducation: "some college", lunch: "free/reduced", testPrep: "completed", mathScore: 50, readingScore: 47, writingScore: 54 },
  { gender: "male", ethnicity: "group E", parentalEducation: "associate's degree", lunch: "standard", testPrep: "none", mathScore: 72, readingScore: 64, writingScore: 63 },
  { gender: "male", ethnicity: "group D", parentalEducation: "high school", lunch: "free/reduced", testPrep: "none", mathScore: 42, readingScore: 39, writingScore: 34 },
  { gender: "female", ethnicity: "group C", parentalEducation: "some college", lunch: "standard", testPrep: "none", mathScore: 73, readingScore: 80, writingScore: 82 },
  { gender: "female", ethnicity: "group C", parentalEducation: "some college", lunch: "free/reduced", testPrep: "none", mathScore: 76, readingScore: 83, writingScore: 88 },
  { gender: "female", ethnicity: "group D", parentalEducation: "associate's degree", lunch: "standard", testPrep: "none", mathScore: 71, readingScore: 71, writingScore: 74 },
  { gender: "female", ethnicity: "group A", parentalEducation: "some college", lunch: "standard", testPrep: "none", mathScore: 58, readingScore: 70, writingScore: 67 },
  { gender: "female", ethnicity: "group D", parentalEducation: "some high school", lunch: "standard", testPrep: "none", mathScore: 73, readingScore: 86, writingScore: 82 },
  { gender: "female", ethnicity: "group C", parentalEducation: "bachelor's degree", lunch: "standard", testPrep: "none", mathScore: 65, readingScore: 72, writingScore: 74 },
  { gender: "male", ethnicity: "group C", parentalEducation: "high school", lunch: "free/reduced", testPrep: "none", mathScore: 27, readingScore: 34, writingScore: 36 },
  { gender: "male", ethnicity: "group C", parentalEducation: "high school", lunch: "standard", testPrep: "none", mathScore: 71, readingScore: 79, writingScore: 71 },
  { gender: "male", ethnicity: "group C", parentalEducation: "associate's degree", lunch: "free/reduced", testPrep: "completed", mathScore: 43, readingScore: 45, writingScore: 50 },
  { gender: "female", ethnicity: "group B", parentalEducation: "some college", lunch: "standard", testPrep: "none", mathScore: 79, readingScore: 86, writingScore: 92 },
  { gender: "male", ethnicity: "group C", parentalEducation: "associate's degree", lunch: "free/reduced", testPrep: "completed", mathScore: 78, readingScore: 81, writingScore: 82 },
  { gender: "male", ethnicity: "group B", parentalEducation: "some high school", lunch: "standard", testPrep: "completed", mathScore: 65, readingScore: 66, writingScore: 62 },
  { gender: "female", ethnicity: "group E", parentalEducation: "some college", lunch: "standard", testPrep: "completed", mathScore: 63, readingScore: 72, writingScore: 70 },
  { gender: "female", ethnicity: "group D", parentalEducation: "some college", lunch: "free/reduced", testPrep: "none", mathScore: 58, readingScore: 67, writingScore: 62 },
];

function encodeFeatures(row) {
  const genderMap = { female: 0, male: 1 };
  const ethnicityMap = { "group A": 0, "group B": 1, "group C": 2, "group D": 3, "group E": 4 };
  const educationMap = {
    "some high school": 0,
    "high school": 1,
    "some college": 2,
    "associate's degree": 3,
    "bachelor's degree": 4,
    "master's degree": 5,
  };
  const lunchMap = { "free/reduced": 0, standard: 1 };
  const testPrepMap = { none: 0, completed: 1 };

  return [
    1,
    genderMap[row.gender],
    ethnicityMap[row.ethnicity],
    educationMap[row.parentalEducation],
    lunchMap[row.lunch],
    testPrepMap[row.testPrep],
    row.readingScore,
    row.writingScore,
  ];
}

const X = data.map(encodeFeatures);
const y = data.map((d) => d.mathScore);

function transpose(matrix) {
  return matrix[0].map((_, i) => matrix.map((row) => row[i]));
}

function multiply(A, B) {
  const rowsA = A.length;
  const colsA = A[0].length;
  const colsB = B[0].length;
  const result = Array(rowsA)
    .fill(null)
    .map(() => Array(colsB).fill(0));
  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsB; j++) {
      for (let k = 0; k < colsA; k++) {
        result[i][j] += A[i][k] * B[k][j];
      }
    }
  }
  return result;
}

function multiplyVector(A, v) {
  return A.map((row) => row.reduce((sum, val, i) => sum + val * v[i], 0));
}

function inverse(matrix) {
  const n = matrix.length;
  const aug = matrix.map((row, i) => [...row, ...Array(n).fill(0).map((_, j) => (i === j ? 1 : 0))]);
  for (let i = 0; i < n; i++) {
    let maxRow = i;
    for (let k = i + 1; k < n; k++) {
      if (Math.abs(aug[k][i]) > Math.abs(aug[maxRow][i])) maxRow = k;
    }
    [aug[i], aug[maxRow]] = [aug[maxRow], aug[i]];
    const pivot = aug[i][i];
    if (Math.abs(pivot) < 1e-10) {
      aug[i][i] = 1e-10;
    }
    for (let j = 0; j < 2 * n; j++) aug[i][j] /= pivot || 1e-10;
    for (let k = 0; k < n; k++) {
      if (k !== i) {
        const factor = aug[k][i];
        for (let j = 0; j < 2 * n; j++) aug[k][j] -= factor * aug[i][j];
      }
    }
  }
  return aug.map((row) => row.slice(n));
}

const Xt = transpose(X);
const XtX = multiply(Xt, X.map((r) => r.map((v) => [v])).map((r) => r.map((v) => v[0])));
const XtXMatrix = Xt.map((row, i) => Xt.map((_, j) => X.reduce((s, xRow) => s + xRow[i] * xRow[j], 0)));
const XtXInv = inverse(XtXMatrix);
const Xty = Xt.map((row) => row.reduce((s, v, i) => s + v * y[i], 0));
const coefficients = multiplyVector(XtXInv, Xty);

console.log("Trained Model Coefficients:");
console.log("============================");
console.log(`Intercept: ${coefficients[0].toFixed(4)}`);
console.log(`Gender (male=1): ${coefficients[1].toFixed(4)}`);
console.log(`Ethnicity (0-4): ${coefficients[2].toFixed(4)}`);
console.log(`Parental Education (0-5): ${coefficients[3].toFixed(4)}`);
console.log(`Lunch (standard=1): ${coefficients[4].toFixed(4)}`);
console.log(`Test Prep (completed=1): ${coefficients[5].toFixed(4)}`);
console.log(`Reading Score: ${coefficients[6].toFixed(4)}`);
console.log(`Writing Score: ${coefficients[7].toFixed(4)}`);

const predictions = X.map((row) => row.reduce((s, v, i) => s + v * coefficients[i], 0));
const mse = y.reduce((s, actual, i) => s + Math.pow(actual - predictions[i], 2), 0) / y.length;
const meanY = y.reduce((a, b) => a + b, 0) / y.length;
const ssTotal = y.reduce((s, v) => s + Math.pow(v - meanY, 2), 0);
const ssResidual = y.reduce((s, v, i) => s + Math.pow(v - predictions[i], 2), 0);
const r2 = 1 - ssResidual / ssTotal;

console.log(`\nModel Performance:`);
console.log(`MSE: ${mse.toFixed(4)}`);
console.log(`R² Score: ${r2.toFixed(4)}`);

console.log("\n// Export for API route:");
console.log("const modelCoefficients = {");
console.log(`  intercept: ${coefficients[0]},`);
console.log(`  gender: ${coefficients[1]},`);
console.log(`  ethnicity: ${coefficients[2]},`);
console.log(`  parentalEducation: ${coefficients[3]},`);
console.log(`  lunch: ${coefficients[4]},`);
console.log(`  testPrep: ${coefficients[5]},`);
console.log(`  readingScore: ${coefficients[6]},`);
console.log(`  writingScore: ${coefficients[7]},`);
console.log("};");
