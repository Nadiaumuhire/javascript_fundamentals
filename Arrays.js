const marks = [78, 45, 90, 62, 50, 0, 100, 33];
function analyseMarks(marks, passMrk = 50) {
  let total = 0;
  let passed = 0;
  let failed = 0;

  let highest = marks[0];
  let lowest = marks[0];

  for (let mark of marks) {
    total = total + mark;

    if (mark > highest) {
      highest = mark;
    }

    if (mark < lowest) {
      lowest = mark;
    }

    if (mark >= passMark) {
      passed++;
    } else {
      failed++;
    }
  }

  let average = total / marks.length;

  let range = highest - lowest;

  let passRate = (passed / marks.length) * 100;

  let grade;

  if (average >= 80) {
    grade = "A";
  } else if (average >= 60) {
    grade = "B";
  } else if (average >= 50) {
    grade = "C";
  } else if (average >= 40) {
    grade = "D";
  } else {
    grade = "F";
  }

  return {
    average: average,
    highest: highest,
    lowest: lowest,
    range: range,
    passed: passed,
    failed: failed,
    passRate: passRate,
    grade: grade,
  };
}

console.log(analyseMarks(marks));
