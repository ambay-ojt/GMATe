export const QUESTIONS = {
  problemSolving: [
    {
      id: "ps1", difficulty: "medium", topic: "Algebra",
      question: "If 2x + 3y = 12 and x - y = 1, what is the value of x?",
      options: ["A) 2", "B) 3", "C) 4", "D) 5", "E) 6"],
      answer: "B) 3",
      explanationSteps: [
        { type: "text", content: "We have a system of two equations. Use substitution to isolate x." },
        { type: "step", num: 1, label: "Express x from Equation 2", content: "x - y = 1  →  x = y + 1" },
        { type: "step", num: 2, label: "Substitute into Equation 1", content: "2(y + 1) + 3y = 12" },
        { type: "step", num: 3, label: "Expand and simplify", content: "2y + 2 + 3y = 12  →  5y = 10" },
        { type: "step", num: 4, label: "Solve for y", content: "y = 10 / 5  =  2" },
        { type: "step", num: 5, label: "Solve for x", content: "x = y + 1  =  2 + 1  =  3" },
        { type: "result", label: "Answer", content: "x = 3" },
        { type: "note", content: "Always substitute back to verify: 2(3) + 3(2) = 6 + 6 = 12 ✓ and 3 - 2 = 1 ✓" },
      ],
      hint: "Substitute one equation into the other."
    },
    {
      id: "ps2", difficulty: "easy", topic: "Arithmetic",
      question: "A store sells a jacket for $120 after applying a 20% discount. What was the original price?",
      options: ["A) $140", "B) $144", "C) $150", "D) $160", "E) $180"],
      answer: "C) $150",
      explanationSteps: [
        { type: "text", content: "A 20% discount means the customer pays 80% of the original price." },
        { type: "step", num: 1, label: "Set up the equation", content: "Original × 0.80  =  $120" },
        { type: "step", num: 2, label: "Solve for original", content: "Original  =  120 / 0.80  =  $150" },
        { type: "result", label: "Original Price", content: "$150" },
        { type: "note", content: "Quick check: 150 × 0.20 = $30 discount. 150 - 30 = $120 ✓" },
      ],
      hint: "Sale price = original × (1 - discount rate)"
    },
    {
      id: "ps3", difficulty: "hard", topic: "Number Properties",
      question: "What is the units digit of 13⁴ × 17² × 29³?",
      options: ["A) 1", "B) 3", "C) 7", "D) 9", "E) 0"],
      answer: "D) 9",
      explanationSteps: [
        { type: "text", content: "Only the units digit of each base affects the final units digit. Extract units digits first." },
        { type: "step", num: 1, label: "Units digit of 13^4  →  3^4", content: "3^1=3,  3^2=9,  3^3=27,  3^4=81  →  units digit = 1" },
        { type: "step", num: 2, label: "Units digit of 17^2  →  7^2", content: "7^2 = 49  →  units digit = 9" },
        { type: "step", num: 3, label: "Units digit of 29^3  →  9^3", content: "9^1=9,  9^2=81,  9^3=729  →  units digit = 9" },
        { type: "divider" },
        { type: "step", num: 4, label: "Multiply units digits only", content: "1  ×  9  ×  9  =  81  →  units digit = 9" },
        { type: "result", label: "Units Digit", content: "9" },
        { type: "note", content: "Powers of 3 cycle every 4: 3,9,7,1. Powers of 9 cycle every 2: 9,1." },
      ],
      hint: "Only the units digit of each base matters."
    },
    {
      id: "ps4", difficulty: "medium", topic: "Ratios",
      question: "The ratio of boys to girls in a class is 3:4. If there are 35 students total, how many are boys?",
      options: ["A) 12", "B) 15", "C) 18", "D) 20", "E) 21"],
      answer: "B) 15",
      explanationSteps: [
        { type: "text", content: "In a ratio, each number represents 'parts'. Find what each part is worth." },
        { type: "step", num: 1, label: "Find total parts", content: "3 + 4  =  7 total parts" },
        { type: "step", num: 2, label: "Find value of 1 part", content: "1 part  =  35 / 7  =  5 students" },
        { type: "step", num: 3, label: "Calculate boys", content: "Boys  =  3 parts  =  3 × 5  =  15" },
        { type: "result", label: "Number of Boys", content: "15 students" },
        { type: "note", content: "Verify: Girls = 4 × 5 = 20. Total = 15 + 20 = 35 ✓" },
      ],
      hint: "Find the value of each 'part' by dividing total by sum of ratio."
    },
    {
      id: "ps5", difficulty: "medium", topic: "Probability",
      question: "From a group of 3 boys and 3 girls, 4 children are selected randomly. What is the probability that 2 boys and 2 girls are selected?",
      options: ["A) 1/5", "B) 2/5", "C) 3/5", "D) 3/10", "E) 2/3"],
      answer: "C) 3/5",
      explanationSteps: [
        { type: "text", content: "Use combinations C(n,r) = n! / (r! × (n-r)!) to count favorable and total outcomes." },
        { type: "step", num: 1, label: "Favorable: choose 2 boys from 3", content: "C(3,2)  =  3! / (2! × 1!)  =  3" },
        { type: "step", num: 2, label: "Favorable: choose 2 girls from 3", content: "C(3,2)  =  3! / (2! × 1!)  =  3" },
        { type: "step", num: 3, label: "Total favorable outcomes", content: "3  ×  3  =  9" },
        { type: "step", num: 4, label: "Total ways to choose 4 from 6", content: "C(6,4)  =  6! / (4! × 2!)  =  15" },
        { type: "step", num: 5, label: "Calculate probability", content: "P  =  9/15  =  3/5" },
        { type: "result", label: "Probability", content: "3/5  =  0.60  =  60%" },
      ],
      hint: "Use combinations: C(n,r) = n!/(r!(n-r)!)"
    },
    {
      id: "ps6", difficulty: "easy", topic: "Percentages",
      question: "If 60% of a number is 90, what is 25% of the same number?",
      options: ["A) 30.5", "B) 37.5", "C) 45", "D) 54", "E) 60"],
      answer: "B) 37.5",
      explanationSteps: [
        { type: "text", content: "First recover the original number, then apply the new percentage." },
        { type: "step", num: 1, label: "Find the original number", content: "0.60 × N  =  90" },
        { type: "step", num: 2, label: "Solve for N", content: "N  =  90 / 0.60  =  150" },
        { type: "step", num: 3, label: "Find 25% of N", content: "0.25 × 150  =  37.5" },
        { type: "result", label: "25% of the number", content: "37.5" },
      ],
      hint: "First find the original number, then find the required percentage."
    },
    {
      id: "ps7", difficulty: "hard", topic: "Work/Rate",
      question: "Pipe A fills a tank in 6 hours. Pipe B fills the same tank in 4 hours. If both are opened, with pipe A opened 1 hour before pipe B, how long does it take to fill the tank?",
      options: ["A) 2.0 hrs", "B) 2.2 hrs", "C) 2.4 hrs", "D) 2.6 hrs", "E) 3.0 hrs"],
      answer: "E) 3.0 hrs",
      explanationSteps: [
        { type: "text", content: "Let t = time (in hours) that pipe B runs. Since A starts 1 hour earlier, A runs for (t + 1) hours." },
        { type: "step", num: 1, label: "Rate of Pipe A", content: "Rate_A  =  1/6 tank per hour" },
        { type: "step", num: 2, label: "Rate of Pipe B", content: "Rate_B  =  1/4 tank per hour" },
        { type: "step", num: 3, label: "Set up equation (work = 1 full tank)", content: "(t+1)/6  +  t/4  =  1" },
        { type: "step", num: 4, label: "Multiply through by 12", content: "2(t+1)  +  3t  =  12" },
        { type: "step", num: 5, label: "Expand and solve", content: "2t + 2 + 3t  =  12  →  5t  =  10  →  t  =  2" },
        { type: "step", num: 6, label: "Total time from when A starts", content: "Total  =  t + 1  =  2 + 1  =  3 hours" },
        { type: "result", label: "Time to Fill Tank", content: "3.0 hours" },
        { type: "note", content: "Verify: A fills (3)(1/6) = 1/2. B fills (2)(1/4) = 1/2. Total = 1 full tank ✓" },
      ],
      hint: "Let t = time B runs. A runs for t+1 hours."
    },
    {
      id: "ps8", difficulty: "medium", topic: "Geometry",
      question: "A rectangle has a perimeter of 48 cm. If the length is 3 times the width, what is the area?",
      options: ["A) 96 cm²", "B) 108 cm²", "C) 120 cm²", "D) 144 cm²", "E) 112 cm²"],
      answer: "B) 108 cm²",
      explanationSteps: [
        { type: "text", content: "Write two equations: one for perimeter, one for the length-width relationship." },
        { type: "step", num: 1, label: "Perimeter formula", content: "2(l + w)  =  48  →  l + w  =  24" },
        { type: "step", num: 2, label: "Length-width relationship", content: "l  =  3w" },
        { type: "step", num: 3, label: "Substitute l = 3w into l + w = 24", content: "3w + w  =  24  →  4w  =  24  →  w  =  6" },
        { type: "step", num: 4, label: "Find length", content: "l  =  3 × 6  =  18 cm" },
        { type: "step", num: 5, label: "Calculate area", content: "Area  =  l × w  =  18 × 6  =  108 cm²" },
        { type: "result", label: "Area", content: "108 cm²" },
      ],
      hint: "Write two equations: one for perimeter, one for the length-width relationship."
    },
    {
      id: "ps9", difficulty: "easy", topic: "Sequences",
      question: "The sum of the first n consecutive positive even integers is n(n+1). What is the sum of the first 8 positive even integers?",
      options: ["A) 56", "B) 64", "C) 72", "D) 80", "E) 90"],
      answer: "C) 72",
      explanationSteps: [
        { type: "text", content: "Apply the given formula directly with n = 8." },
        { type: "step", num: 1, label: "Given formula", content: "Sum  =  n(n + 1)" },
        { type: "step", num: 2, label: "Substitute n = 8", content: "Sum  =  8 × (8 + 1)  =  8 × 9  =  72" },
        { type: "result", label: "Sum of first 8 even integers", content: "72" },
        { type: "note", content: "Manual check: 2+4+6+8+10+12+14+16 = 72 ✓" },
      ],
      hint: "Plug n=8 directly into the formula."
    },
    {
      id: "ps10", difficulty: "hard", topic: "Statistics",
      question: "The average of 5 numbers is 20. When a 6th number is added, the average becomes 22. What is the 6th number?",
      options: ["A) 24", "B) 28", "C) 30", "D) 32", "E) 34"],
      answer: "D) 32",
      explanationSteps: [
        { type: "text", content: "Use the relationship: Sum = Average × Count for both scenarios." },
        { type: "step", num: 1, label: "Sum of original 5 numbers", content: "Sum_5  =  20 × 5  =  100" },
        { type: "step", num: 2, label: "Sum of 6 numbers (new average)", content: "Sum_6  =  22 × 6  =  132" },
        { type: "step", num: 3, label: "Find the 6th number", content: "6th number  =  Sum_6 - Sum_5  =  132 - 100  =  32" },
        { type: "result", label: "6th Number", content: "32" },
        { type: "note", content: "Intuition: Average increased by 2. With 6 numbers, 6×2=12 extra needed. But we also need to 'raise' the old 5 numbers: 5×2=10, plus 2 for the new slot = 12. So new number = 20+12 = 32 ✓" },
      ],
      hint: "Use sum = average × count for both cases."
    },
    {
      id: "ps11", difficulty: "medium", topic: "Inequalities",
      question: "For how many integer values of x is |2x - 3| < 7?",
      options: ["A) 5", "B) 6", "C) 7", "D) 8", "E) 9"],
      answer: "B) 6",
      explanationSteps: [
        { type: "text", content: "Remove the absolute value by writing a compound inequality." },
        { type: "step", num: 1, label: "Expand absolute value inequality", content: "-7  <  2x - 3  <  7" },
        { type: "step", num: 2, label: "Add 3 to all parts", content: "-7 + 3  <  2x  <  7 + 3  →  -4  <  2x  <  10" },
        { type: "step", num: 3, label: "Divide all parts by 2", content: "-2  <  x  <  5" },
        { type: "step", num: 4, label: "List valid integers", content: "x  ∈  {-1, 0, 1, 2, 3, 4}" },
        { type: "result", label: "Count of integers", content: "6 integers" },
        { type: "note", content: "Note: x = -2 and x = 5 are excluded because the inequality is strict (<, not ≤)." },
      ],
      hint: "Solve -7 < 2x-3 < 7 as a compound inequality."
    },
  ],
  dataSufficiency: [
    {
      id: "ds1", difficulty: "medium", topic: "Algebra",
      question: "What is the value of x?\n\n(1) 2x + y = 10\n(2) x - y = 2",
      options: ["A) Statement (1) alone is sufficient", "B) Statement (2) alone is sufficient", "C) Both statements together are sufficient", "D) Each statement alone is sufficient", "E) Neither statement is sufficient"],
      answer: "C) Both statements together are sufficient",
      explanationSteps: [
        { type: "text", content: "Strategy: Test each statement alone first (AD or BCE approach). One equation with two unknowns is never sufficient alone." },
        { type: "step", num: 1, label: "Test Statement (1) alone", content: "2x + y = 10  →  infinite solutions (e.g. x=1,y=8  or  x=5,y=0)" },
        { type: "step", num: 2, label: "Statement (1) result", content: "NOT sufficient  →  eliminates A and D" },
        { type: "step", num: 3, label: "Test Statement (2) alone", content: "x - y = 2  →  infinite solutions (e.g. x=3,y=1  or  x=10,y=8)" },
        { type: "step", num: 4, label: "Statement (2) result", content: "NOT sufficient  →  eliminates B" },
        { type: "divider" },
        { type: "step", num: 5, label: "Test both together — add the equations", content: "(2x + y) + (x - y)  =  10 + 2  →  3x  =  12  →  x  =  4" },
        { type: "result", label: "Answer", content: "C — Both statements together are sufficient" },
        { type: "note", content: "Two equations, two unknowns → unique solution. Once we know x=4, y=2 as well." },
      ],
      hint: "Check if you can isolate x with each statement independently first."
    },
    {
      id: "ds2", difficulty: "easy", topic: "Number Properties",
      question: "Is integer n even?\n\n(1) n/2 is an integer\n(2) n + 3 is odd",
      options: ["A) Statement (1) alone is sufficient", "B) Statement (2) alone is sufficient", "C) Both statements together are sufficient", "D) Each statement alone is sufficient", "E) Neither statement is sufficient"],
      answer: "D) Each statement alone is sufficient",
      explanationSteps: [
        { type: "step", num: 1, label: "Test Statement (1): n/2 is an integer", content: "n/2 = integer  →  n is divisible by 2  →  n is EVEN" },
        { type: "step", num: 2, label: "Statement (1) result", content: "Always YES  →  SUFFICIENT" },
        { type: "divider" },
        { type: "step", num: 3, label: "Test Statement (2): n + 3 is odd", content: "odd + odd = even,  even + odd = odd" },
        { type: "step", num: 4, label: "Apply rule", content: "If n + 3 is ODD  →  n must be EVEN  (even + odd = odd ✓)" },
        { type: "step", num: 5, label: "Statement (2) result", content: "Always YES (n is even)  →  SUFFICIENT" },
        { type: "result", label: "Answer", content: "D — Each statement alone is sufficient" },
      ],
      hint: "Test both statements independently before testing them together."
    },
    {
      id: "ds3", difficulty: "hard", topic: "Geometry",
      question: "What is the area of circle C?\n\n(1) The circumference is 10π\n(2) The diameter is 10",
      options: ["A) Statement (1) alone is sufficient", "B) Statement (2) alone is sufficient", "C) Both statements together are sufficient", "D) Each statement alone is sufficient", "E) Neither statement is sufficient"],
      answer: "D) Each statement alone is sufficient",
      explanationSteps: [
        { type: "text", content: "Key formulas: C = 2πr,  d = 2r,  Area = πr²" },
        { type: "step", num: 1, label: "Statement (1): C = 10π", content: "2πr  =  10π  →  r  =  5" },
        { type: "step", num: 2, label: "Calculate area from Statement (1)", content: "Area  =  π × 5²  =  25π  →  SUFFICIENT" },
        { type: "divider" },
        { type: "step", num: 3, label: "Statement (2): diameter = 10", content: "d  =  2r  →  r  =  10/2  =  5" },
        { type: "step", num: 4, label: "Calculate area from Statement (2)", content: "Area  =  π × 5²  =  25π  →  SUFFICIENT" },
        { type: "result", label: "Answer", content: "D — Each statement alone is sufficient" },
        { type: "note", content: "Both statements describe the same circle (r=5). Either one uniquely determines the area." },
      ],
      hint: "Both circumference and diameter uniquely determine radius."
    },
    {
      id: "ds4", difficulty: "medium", topic: "Inequalities",
      question: "Is x > 0?\n\n(1) x² > 0\n(2) x³ > 0",
      options: ["A) Statement (1) alone is sufficient", "B) Statement (2) alone is sufficient", "C) Both statements together are sufficient", "D) Each statement alone is sufficient", "E) Neither statement is sufficient"],
      answer: "B) Statement (2) alone is sufficient",
      explanationSteps: [
        { type: "step", num: 1, label: "Test Statement (1): x² > 0", content: "x = 3  →  x²=9 > 0  ✓  but x = -3  →  x²=9 > 0  ✓ also" },
        { type: "step", num: 2, label: "Statement (1) result", content: "x could be positive OR negative  →  NOT sufficient" },
        { type: "divider" },
        { type: "step", num: 3, label: "Test Statement (2): x³ > 0", content: "x = 3  →  x³=27 > 0  ✓   but  x = -3  →  x³=-27 < 0  ✗" },
        { type: "step", num: 4, label: "Rule: odd powers preserve sign", content: "x³ > 0  ⟹  x > 0  (always)" },
        { type: "step", num: 5, label: "Statement (2) result", content: "Always YES  →  SUFFICIENT" },
        { type: "result", label: "Answer", content: "B — Statement (2) alone is sufficient" },
        { type: "note", content: "Key insight: Even powers (x²) hide the sign of x. Odd powers (x³) reveal it." },
      ],
      hint: "Think about what each expression reveals about the sign of x."
    },
    {
      id: "ds5", difficulty: "medium", topic: "Ratios",
      question: "What is the ratio of x to y?\n\n(1) x is 4 more than twice y\n(2) The sum of x and y is 19",
      options: ["A) Statement (1) alone is sufficient", "B) Statement (2) alone is sufficient", "C) Both statements together are sufficient", "D) Each statement alone is sufficient", "E) Neither statement is sufficient"],
      answer: "C) Both statements together are sufficient",
      explanationSteps: [
        { type: "step", num: 1, label: "Statement (1): x = 2y + 4", content: "x/y  =  (2y+4)/y  =  2 + 4/y  →  depends on y" },
        { type: "step", num: 2, label: "Statement (1) result", content: "Ratio unknown without knowing y  →  NOT sufficient" },
        { type: "step", num: 3, label: "Statement (2): x + y = 19", content: "e.g. x=10,y=9 → ratio=10/9  or  x=14,y=5 → ratio=14/5" },
        { type: "step", num: 4, label: "Statement (2) result", content: "Multiple ratios possible  →  NOT sufficient" },
        { type: "divider" },
        { type: "step", num: 5, label: "Both together: substitute (1) into (2)", content: "(2y + 4) + y  =  19  →  3y  =  15  →  y  =  5" },
        { type: "step", num: 6, label: "Solve for x", content: "x  =  2(5) + 4  =  14" },
        { type: "step", num: 7, label: "Calculate ratio", content: "x/y  =  14/5  →  unique ratio" },
        { type: "result", label: "Answer", content: "C — Both statements together are sufficient" },
      ],
      hint: "A ratio can be determined if you know both variables' exact values."
    },
    {
      id: "ds6", difficulty: "hard", topic: "Statistics",
      question: "What is the median of set S = {a, b, c, d, e} arranged in ascending order?\n\n(1) The average of the set is 12\n(2) c = 11",
      options: ["A) Statement (1) alone is sufficient", "B) Statement (2) alone is sufficient", "C) Both statements together are sufficient", "D) Each statement alone is sufficient", "E) Neither statement is sufficient"],
      answer: "B) Statement (2) alone is sufficient",
      explanationSteps: [
        { type: "text", content: "For an odd-count set in ascending order, the median is always the middle (3rd) value." },
        { type: "step", num: 1, label: "Identify the median position", content: "Set has 5 values  →  median = 3rd value = c" },
        { type: "divider" },
        { type: "step", num: 2, label: "Test Statement (1): average = 12", content: "Average tells us: a+b+c+d+e = 60" },
        { type: "step", num: 3, label: "Statement (1) result", content: "Many distributions give avg=12 with different medians  →  NOT sufficient" },
        { type: "divider" },
        { type: "step", num: 4, label: "Test Statement (2): c = 11", content: "c is the 3rd value = median  →  median = 11" },
        { type: "step", num: 5, label: "Statement (2) result", content: "Directly gives the median  →  SUFFICIENT" },
        { type: "result", label: "Answer", content: "B — Statement (2) alone is sufficient" },
      ],
      hint: "For 5 values in order, the median is the 3rd value."
    },
    {
      id: "ds7", difficulty: "medium", topic: "Percents",
      question: "A town has 20,000 residents. What percentage are female?\n\n(1) 60% of residents are female\n(2) There are 8,000 male residents",
      options: ["A) Statement (1) alone is sufficient", "B) Statement (2) alone is sufficient", "C) Both statements together are sufficient", "D) Each statement alone is sufficient", "E) Neither statement is sufficient"],
      answer: "D) Each statement alone is sufficient",
      explanationSteps: [
        { type: "step", num: 1, label: "Statement (1): 60% are female", content: "Directly states female% = 60%  →  SUFFICIENT" },
        { type: "divider" },
        { type: "step", num: 2, label: "Statement (2): 8,000 males", content: "Female count  =  20,000 - 8,000  =  12,000" },
        { type: "step", num: 3, label: "Calculate female percentage", content: "Female%  =  12,000 / 20,000  =  0.60  =  60%" },
        { type: "step", num: 4, label: "Statement (2) result", content: "Gives a unique percentage  →  SUFFICIENT" },
        { type: "result", label: "Answer", content: "D — Each statement alone is sufficient" },
        { type: "note", content: "Both independently yield 60% female — a nice consistency check." },
      ],
      hint: "If you know total and one part, you can always find the other percentage."
    },
  ],
  criticalReasoning: [
    {
      id: "cr1", difficulty: "medium", topic: "Weaken",
      question: "Politician: Hybrid cars use significantly less fuel per kilometer than conventional cars. Therefore, switching the government fleet to hybrid cars will substantially reduce the government's fuel costs.\n\nWhich of the following, if true, most seriously weakens the argument?",
      options: [
        "A) Hybrid cars have higher purchase prices than conventional cars",
        "B) Government drivers tend to drive fewer kilometers per year than average drivers",
        "C) Hybrid cars require more frequent maintenance than conventional cars",
        "D) Government fleets currently use diesel, which is cheaper than gasoline",
        "E) Some hybrid models perform poorly in cold weather conditions"
      ],
      answer: "A) Hybrid cars have higher purchase prices than conventional cars",
      explanationSteps: [
        { type: "step", num: 1, label: "Identify the Conclusion", content: "Switching to hybrids will SUBSTANTIALLY REDUCE fuel costs" },
        { type: "step", num: 2, label: "Identify the Premise", content: "Hybrids use less fuel per kilometer than conventional cars" },
        { type: "step", num: 3, label: "Identify the Hidden Assumption", content: "Lower fuel use = lower TOTAL costs (ignoring other cost factors)" },
        { type: "divider" },
        { type: "step", num: 4, label: "Evaluate Answer A", content: "Higher purchase price → total cost of ownership could INCREASE despite fuel savings" },
        { type: "step", num: 5, label: "Does A attack the assumption?", content: "YES — 'substantially reduce costs' ignores purchase costs → weakens the conclusion" },
        { type: "result", label: "Correct Answer", content: "A — attacks the cost-reduction assumption directly" },
        { type: "note", content: "Wrong answers: B (driving fewer km would actually STRENGTHEN the need to maximize fuel efficiency). C (maintenance costs could also weaken, but A is more direct on the cost claim)." },
      ],
      hint: "Look for what assumption the argument relies on, then find what breaks it."
    },
    {
      id: "cr2", difficulty: "medium", topic: "Assumption",
      question: "Although computers can enhance people's ability to communicate, the effectiveness of communication depends on the quality of thinking behind it. Students who use computers to write essays tend to produce longer essays but not necessarily better ones.\n\nThe argument above assumes which of the following?",
      options: [
        "A) Longer essays are always better than shorter ones",
        "B) Computers do not improve the quality of students' thinking",
        "C) Essay length is the best measure of communication effectiveness",
        "D) Students who write by hand produce better essays",
        "E) Computers have no effect on writing quality"
      ],
      answer: "B) Computers do not improve the quality of students' thinking",
      explanationSteps: [
        { type: "step", num: 1, label: "Identify the Conclusion", content: "Computers don't make communication MORE EFFECTIVE for students" },
        { type: "step", num: 2, label: "Identify the Premise", content: "Students using computers write LONGER but not necessarily BETTER essays" },
        { type: "step", num: 3, label: "Spot the logical gap", content: "Argument assumes: longer essays ≠ better thinking, and computers don't improve thinking" },
        { type: "divider" },
        { type: "step", num: 4, label: "Apply Negation Test to Answer B", content: "Negate B: 'Computers DO improve the quality of students' thinking'" },
        { type: "step", num: 5, label: "Does negation destroy the argument?", content: "If computers improve thinking → essays could be better → conclusion falls apart ✓" },
        { type: "result", label: "Correct Answer", content: "B — negating it destroys the argument (classic assumption test)" },
        { type: "note", content: "Negation Test: The correct assumption, when negated, must make the conclusion invalid or unsupported." },
      ],
      hint: "The assumption is the unstated premise needed to connect evidence to conclusion."
    },
    {
      id: "cr3", difficulty: "hard", topic: "Strengthen",
      question: "A cost-effective solution to the problem of airport congestion is to have airlines increase the number of passengers per flight rather than to add new flights. Airlines could accomplish this by eliminating the first-class sections.\n\nWhich of the following, if true, most strengthens the argument?",
      options: [
        "A) First-class passengers generate more revenue per seat than economy passengers",
        "B) Most airports are already operating at maximum capacity",
        "C) First-class sections account for a disproportionately large share of aircraft space relative to the revenue they generate",
        "D) Adding new flights would require expensive runway construction",
        "E) Passengers prefer more spacious seating on long-haul flights"
      ],
      answer: "C) First-class sections account for a disproportionately large share of aircraft space relative to the revenue they generate",
      explanationSteps: [
        { type: "step", num: 1, label: "Identify the Conclusion", content: "Eliminating first-class is a cost-effective solution to congestion" },
        { type: "step", num: 2, label: "Identify the Premise", content: "More passengers per flight (not more flights) reduces congestion" },
        { type: "step", num: 3, label: "What does the argument need to work?", content: "Eliminating first-class must (a) add meaningful capacity and (b) be cost-effective" },
        { type: "divider" },
        { type: "step", num: 4, label: "Evaluate Answer C", content: "First-class uses DISPROPORTIONATE SPACE for relatively low revenue" },
        { type: "step", num: 5, label: "Does C strengthen the conclusion?", content: "YES — removing it frees large capacity (more passengers) AND improves cost efficiency" },
        { type: "result", label: "Correct Answer", content: "C — directly supports both the capacity gain and the cost-effectiveness" },
        { type: "note", content: "Answer A actually weakens the argument (suggests eliminating first-class loses revenue). D strengthens an unstated part of the argument but doesn't directly support the proposed solution." },
      ],
      hint: "Find the answer that makes the proposed solution more viable or the conclusion more likely true."
    },
    {
      id: "cr4", difficulty: "medium", topic: "Inference",
      question: "A neuroscientist argues that memory evolved not primarily to allow us to remember the past but to allow us to imagine and prepare for future events. This is supported by studies showing that people with amnesia also have reduced ability to imagine future scenarios.\n\nWhich of the following can be most properly inferred from the passage?",
      options: [
        "A) People with amnesia cannot plan for the future at all",
        "B) Memory and future imagination may share the same neural mechanisms",
        "C) Evolution only develops traits that serve future-oriented purposes",
        "D) Neuroscientists now agree that memory is primarily future-oriented",
        "E) Amnesia is caused by an inability to imagine the future"
      ],
      answer: "B) Memory and future imagination may share the same neural mechanisms",
      explanationSteps: [
        { type: "step", num: 1, label: "Key evidence in the passage", content: "Amnesia (memory loss) CORRELATES WITH reduced future imagination ability" },
        { type: "step", num: 2, label: "What does this correlation suggest?", content: "The two abilities (memory, future imagination) may share the same brain systems" },
        { type: "divider" },
        { type: "step", num: 3, label: "Evaluate Answer B", content: "'May share the same neural mechanisms' — carefully hedged, supported by the correlation" },
        { type: "step", num: 4, label: "Check for overreach", content: "B uses 'may' — appropriately cautious. Passage supports this inference ✓" },
        { type: "result", label: "Correct Answer", content: "B — valid inference, not overstated" },
        { type: "note", content: "Inference rules: Must be TRUE based on the passage. Avoid 'always/never/all' (A,C,D are too strong). Avoid reversing causality (E reverses the relationship)." },
      ],
      hint: "A valid inference must be supported by the passage but should not overstate what's said."
    },
    {
      id: "cr5", difficulty: "hard", topic: "Paradox",
      question: "To reduce productivity losses from employees calling in sick, a company instituted mandatory wellness programs. After the program started, the number of sick days taken by employees actually increased.\n\nWhich of the following, if true, best resolves the apparent paradox?",
      options: [
        "A) The wellness program was expensive to implement",
        "B) Employees who previously came to work while sick now stay home, preventing spread of illness",
        "C) Some employees resented the mandatory nature of the wellness program",
        "D) The wellness program did not cover mental health issues",
        "E) Employee productivity increased during the same period"
      ],
      answer: "B) Employees who previously came to work while sick now stay home, preventing spread of illness",
      explanationSteps: [
        { type: "step", num: 1, label: "State the paradox clearly", content: "Goal: Reduce productivity loss from sick employees" },
        { type: "step", num: 2, label: "Paradox", content: "Wellness program → sick days INCREASED (opposite of expected)" },
        { type: "step", num: 3, label: "What we need to explain", content: "Both facts must be TRUE simultaneously without contradiction" },
        { type: "divider" },
        { type: "step", num: 4, label: "Evaluate Answer B", content: "Before: sick employees came to work (infecting others, counted as 0 sick days)" },
        { type: "step", num: 5, label: "After wellness program", content: "Sick employees stay HOME (more reported sick days, but less spread = higher total productivity)" },
        { type: "step", num: 6, label: "Does B resolve the paradox?", content: "YES — more sick days reported, but less productivity loss overall. Both facts now make sense." },
        { type: "result", label: "Correct Answer", content: "B — explains why sick days rose while the program still achieved its goal" },
        { type: "note", content: "Paradox questions: find an answer that makes BOTH the premise AND the surprising result true at the same time." },
      ],
      hint: "Find an explanation that makes both facts true simultaneously without contradiction."
    },
  ]
};

export const FLASHCARDS = [
  { front: "What is the 5-step AD/BCE strategy in Data Sufficiency?", back: "1. Evaluate Statement (1). If sufficient, answer is A or D.\n2. If (1) is NOT sufficient, answer is B, C, or E.\n3. Evaluate Statement (2) independently.\n4. If (2) is sufficient and (1) was not, answer is B.\n5. If neither worked alone, combine them for C or E." },
  { front: "Negation Test for Assumptions", back: "Take an answer choice and negate it. If the negated version makes the conclusion fall apart (makes it impossible), that choice is the necessary assumption." },
  { front: "Average Speed Formula (Common Trap)", back: "Total Distance / Total Time.\nNever simply average the two speeds unless the time spent at each speed is identical." },
  { front: "Units Digit Cycle of 3", back: "3¹=3, 3²=9, 3³=7, 3⁴=1. The cycle is 3, 9, 7, 1 (repeats every 4). Divide exponent by 4 to find the position." },
  { front: "Area of a Circle", back: "πr²" },
  { front: "Pythagorean Theorem & Common Triples", back: "a² + b² = c²\nCommon triples: (3,4,5), (5,12,13), (8,15,17), (7,24,25)" },
  { front: "Sum of Interior Angles of a Polygon", back: "(n - 2) * 180°\n(e.g., triangle = 180, quadrilateral = 360, pentagon = 540)." },
  { front: "Difference of Squares formula", back: "a² - b² = (a - b)(a + b)\nExtremely common on GMAT for simplifying complex expressions." },
  { front: "Probability of A or B (General Rule)", back: "P(A or B) = P(A) + P(B) - P(A and B)\nSubtract the overlap once so it's not double-counted." },
  { front: "Side ratios of a 30-60-90 triangle", back: "1 : √3 : 2\n(Smallest side opposite 30°, largest hypotenuse opposite 90°)." },
  { front: "Side ratios of a 45-45-90 triangle", back: "1 : 1 : √2\n(Wait: √2 is approx 1.414)." },
  { front: "Divisibility rule for 3 and 9", back: "For 3: Sum of digits is divisible by 3.\nFor 9: Sum of digits is divisible by 9." },
  { front: "Divisibility rule for 4", back: "The last two digits as a whole must be divisible by 4 (e.g., 1,524 works because 24/4=6)." },
  { front: "Overlapping Sets Formula (2 Groups)", back: "Total = Group A + Group B - Both + Neither" },
  { front: "What is the 'C' Trap in Data Sufficiency?", back: "When both statements together look like an obvious system of equations, but one actually provides enough info alone (often D or B)." },
  { front: "Formula for Combinations (Order doesn't matter)", back: "C(n,r) = n! / [r! * (n - r)!]" },
  { front: "Equation for a circle on a coordinate plane", back: "(x - h)² + (y - k)² = r²\n(h, k) is the center, r is the radius." },
  { front: "What is a 'Scope Shift' in Verbal?", back: "When the premise discusses one context (e.g., 'sales') but the conclusion assumes another (e.g., 'profitability')." },
  { front: "Relationship between Mean and Median in an evenly spaced set", back: "Mean = Median\n(e.g., for integers {2, 4, 6, 8, 10}, both are 6)." },
  { front: "Causation vs Correlation flaw", back: "Assuming X causes Y just because they occurred together or in sequence. (Post hoc ergo propter hoc)." },
  { front: "Surface Area of a Cylinder", back: "2πr² + 2πrh\n(Two circles + the 'label' area h * circumference)." },
  { front: "GMAT 'Extreme Language' Warning", back: "Avoid answer choices with 'Always', 'Never', 'None', or 'All' in Inference questions unless the passage is 100% absolute." },
  { front: "What is 'Pre-phrasing' in Critical Reasoning?", back: "Pausing after reading the stimulus to predict what the answer or flaw might be BEFORE looking at the trap-filled choices." },
  { front: "Quadratic Identities (x+y)² and (x-y)²", back: "(x+y)² = x² + 2xy + y²\n(x-y)² = x² - 2xy + y²" },
  { front: "What does 'Sufficient' mean for a 'Value' question?", back: "The statement must lead to ONE AND ONLY ONE numerical value. If it gives a range or two answers, it is INSUFFICIENT." },
];

export const STUDY_CONTENT = {
  problemSolving: {
    title: "Problem Solving",
    color: "from-pink-500 to-rose-600",
    accent: "#f9a8d4",
    icon: "⚡",
    concepts: [
      { 
        title: "Arithmetic & Number Properties", 
        body: "**The Core Philosophy:** GMAT arithmetic is not about heavy calculation but understanding number behaviors.\n\n" +
              "• **Divisibility:** A number is divisible by 3 if the sum of its digits is divisible by 3. It's divisible by 4 if the last two digits are divisible by 4.\n" +
              "• **Prime Factorization:** The 'DNA' of a number. Use factor trees to find prime bases. This is essential for finding LCM and GCD.\n" +
              "• **Units Digit Cycles:** Identify the pattern. Powers of 2 cycle through 2, 4, 8, 6. Powers of 3 cycle through 3, 9, 7, 1.\n\n" +
              "**Pro Note:** When a problem asks about 'remainders', always set up the formula: **Dividend = Divisor × Quotient + Remainder.**"
      },
      { 
        title: "LCM & GCF / GCD", 
        body: "**Finding the Multiples and Factors:** These are the building blocks for working with fractions and ratios.\n\n" +
              "• **Greatest Common Factor (GCF):** The largest number that divides into both. **Method:** Prime factorize both numbers and take the *lowest* power of all *common* prime bases.\n" +
              "• **Least Common Multiple (LCM):** The smallest number that both divide into. **Method:** Prime factorize both and take the *highest* power of *all* prime bases appearing in either.\n" +
              "• **The Golden Rule:** LCM(a,b) × GCF(a,b) = a × b.\n\n" +
              "**Deep Dive:** For GCF, only look at what they share. For LCM, gather everything but don't double count."
      },
      { 
        title: "Fraction Operations", 
        body: "**Mastering the Parts:** Fractions are tested in almost every GMAT section.\n\n" +
              "• **Addition/Subtraction:** You **MUST** find a Least Common Denominator (LCD). Once the bottoms are the same, just add the tops. (1/2 + 1/3 = 3/6 + 2/6 = 5/6).\n" +
              "• **Multiplication:** Multiply straight across — top times top, bottom times bottom. Simplify before you multiply to save time.\n" +
              "• **Division:** Use the **Keep-Change-Flip** rule. Keep the first fraction, change ÷ to ×, and flip the second fraction. (1/2 ÷ 3/4 = 1/2 × 4/3 = 4/6 = 2/3).\n\n" +
              "**Pro Note:** To compare two fractions (e.g., 5/7 vs 7/9), cross-multiply: 5×9=45 and 7×7=49. Since 49 > 45, then 7/9 > 5/7."
      },
      { 
        title: "Algebra & Equations", 
        body: "**Variable Manipulation:** Algebra on the GMAT tests your ability to manipulate variables efficiently.\n\n" +
              "• **System of Equations:** You need *n* independent equations to solve for *n* variables. If equations are dependent (e.g., 2x + y = 10 and 4x + 2y = 20), you have infinite solutions.\n" +
              "• **Quadratics:** Master (a + b)² = a² + 2ab + b² and (a - b)² = a² - 2ab + b². The difference of squares, **a² - b² = (a + b)(a - b)**, is the most tested pattern.\n" +
              "• **Inequalities:** When multiplying or dividing by a negative number, **FLIP** the inequality sign. Always check if the variable could be zero or a fraction.\n\n" +
              "**Deep Dive:** In absolute value equations |x - a| < b, think of it as 'the distance between x and a is less than b'."
      },
      { 
        title: "Ratios, Proportions & Percents", 
        body: "**Relative Values:** These topics represent relative values rather than absolute ones.\n\n" +
              "• **Ratios:** If the ratio of A:B is 3:5, then A = 3k and B = 5k. The total is 8k. Find 'k' to find absolute values.\n" +
              "• **Percent Change:** Use (New - Old) / Old. A 20% increase followed by a 20% decrease does **NOT** return to the original. (1.20 × 0.80 = 0.96, a 4% loss).\n" +
              "• **Mixture Problems:** Use the weighted average formula or a 'balance beam' approach to find the final concentration.\n\n" +
              "**Pro Note:** 'Percent of' means multiplication. 'What percent' means x/100."
      },
      { 
        title: "Geometry: Triangles & Circles", 
        body: "**Logical Geometry:** GMAT Geometry is logic-based. Diagrams may be misleading.\n\n" +
              "• **Right Triangles:** Master 3-4-5, 5-12-13, and 8-15-17 triples. Know the ratios for 45-45-90 (1:1:√2) and 30-60-90 (1:√3:2) triangles.\n" +
              "• **Circles:** Area = πr², Circumference = 2πr. For arcs and sectors, find the fraction of the circle (Angle/360) and multiply by the total Area or Circumference.\n" +
              "• **Polygons:** Sum of interior angles = (n - 2) × 180°.\n\n" +
              "**Critical Rule:** Any triangle inscribed in a semicircle with the diameter as one side is a **RIGHT** triangle."
      },
      { 
        title: "Statistics & Probability", 
        body: "**Data Analysis:** Focus on Mean, Median, Mode, and Range.\n\n" +
              "• **Mean vs. Median:** The mean is sensitive to outliers; the median is not. If a set is evenly spaced, the Mean = Median.\n" +
              "• **Standard Deviation:** You rarely calculate it. Just know it measures 'spread'. If all numbers increase by the same constant, SD stays the same.\n" +
              "• **Probability:** P(A and B) = P(A) × P(B) for independent events. P(A or B) = P(A) + P(B) - P(A and B).\n\n" +
              "**Deep Dive:** Combinations C(n,r) for groups where order doesn't matter. Permutations P(n,r) for arrangements where order DOES matter."
      },
    ],
    walkthroughs: [
      { 
        problem: "Algebra: If 3x + 2y = 18 and 2x + 3y = 17, what is x + y?", 
        steps: [
          "Step 1: Notice the symmetry in coefficients. Instead of solving for x or y individually, add the equations together.",
          "Step 2: (3x + 2y) + (2x + 3y) = 18 + 17  →  5x + 5y = 35.",
          "Step 3: Factor out the 5: 5(x + y) = 35.",
          "Step 4: Divide by 5: x + y = 7.",
          "Key insight: GMAT often asks for an expression (x+y) rather than individual variables. Look for shortcuts like adding/subtracting equations."
        ] 
      },
      { 
        problem: "Geometry: A right triangle is inscribed in a circle of radius 5. If one leg is 6, what is the area of the triangle?", 
        steps: [
          "Step 1: Any triangle inscribed in a semicircle with the diameter as one side is a right triangle. Diameter = 2r = 10.",
          "Step 2: Use Pythagorean theorem: 6² + b² = 10²  →  36 + b² = 100  →  b² = 64  →  b = 8.",
          "Step 3: Area = 1/2 × base × height = 1/2 × 6 × 8 = 24.",
          "Result: Area = 24 units²"
        ] 
      },
      { 
        problem: "Arithmetic: What is the units digit of 3^45?", 
        steps: [
          "Step 1: Identify the cycle of powers of 3: 3^1=3, 3^2=9, 3^3=27, 3^4=81... the units digits are (3, 9, 7, 1).",
          "Step 2: The cycle length is 4.",
          "Step 3: Divide the exponent by the cycle length: 45 ÷ 4 = 11 remainder 1.",
          "Step 4: The remainder 1 corresponds to the first position in the cycle (3, 9, 7, 1).",
          "Result: The units digit is 3."
        ] 
      },
      { 
        problem: "Work Rate: Machine A can do a job in 4 hours. Machine B can do it in 6 hours. How long for both together?", 
        steps: [
          "Step 1: Find rates (work per hour). Rate A = 1/4, Rate B = 1/6.",
          "Step 2: Add rates: 1/4 + 1/6 = 3/12 + 2/12 = 5/12.",
          "Step 3: Total time = 1 / Combined Rate = 12/5.",
          "Step 4: 12/5 = 2.4 hours.",
          "Shortcut: (A × B) / (A + B) = (4 × 6) / (4 + 6) = 24 / 10 = 2.4 hours."
        ] 
      },
      { 
        problem: "Arithmetic: Find the Least Common Multiple (LCM) of 12 and 18.", 
        steps: [
          "Step 1: Prime factorize both numbers. 12 = 2² × 3. 18 = 2 × 3².",
          "Step 2: Collect all prime bases present: 2 and 3.",
          "Step 3: For each base, take the highest power: 2² and 3².",
          "Step 4: Multiply them together: 4 × 9 = 36.",
          "Result: LCM = 36."
        ]
      },
      {
        problem: "Fractions: Solve (2/3 + 1/4) ÷ (5/6).",
        steps: [
          "Step 1: Solve the parenthesis first. Find LCD for 3 and 4, which is 12.",
          "Step 2: Convert: 2/3 = 8/12 and 1/4 = 3/12. Sum = 11/12.",
          "Step 3: Perform division using Keep-Change-Flip: 11/12 ÷ 5/6 = 11/12 × 6/5.",
          "Step 4: Simplify before multiplying: 11/(2×6) × 6/5 = 11/(2×5) = 11/10.",
          "Result: 1.1 or 11/10."
        ]
      },
      {
        problem: "Arithmetic: What is the Greatest Common Factor (GCF) of 48 and 72?",
        steps: [
          "Step 1: Prime factorize 48: 2^4 × 3.",
          "Step 2: Prime factorize 72: 2³ × 3².",
          "Step 3: Identify common bases: 2 and 3.",
          "Step 4: Take the lowest power for each: 2³ and 3^1.",
          "Step 5: Multiply: 8 × 3 = 24.",
          "Result: GCF = 24."
        ]
      },
      {
        problem: "Sets: In a group of 50 people, 30 like Coffee and 25 like Tea. If 10 like neither, how many like both?",
        steps: [
          "Step 1: Use the formula: Total = Group A + Group B - Both + Neither.",
          "Step 2: 50 = 30 + 25 - Both + 10.",
          "Step 3: 50 = 65 - Both.",
          "Step 4: Both = 65 - 50 = 15.",
          "Result: 15 people like both."
        ]
      },
    ],
    mistakes: ["❌ Confusing percent OF with percent MORE THAN", "❌ Forgetting to check both positive and negative solutions in quadratics", "❌ Misreading 'at least' vs. 'more than' (≥ vs. >)", "❌ Not checking if an answer makes logical sense (e.g., negative length)", "❌ Assuming diagrams are to scale unless specifically stated."],
    tips: ["✅ Backsolve from answer choices when stuck — start with B or D", "✅ Plug in simple numbers (1, 2, 10) to test variable relationships", "✅ Estimate aggressively — GMAT answers are spread far enough apart", "✅ Draw a diagram for every geometry problem", "✅ 'Picking Numbers': If variables are in the options, pick easy numbers to find the match."],
  },
  dataSufficiency: {
    title: "Data Sufficiency",
    color: "from-rose-400 to-pink-600",
    accent: "#f472b6",
    icon: "🔍",
    concepts: [
      { 
        title: "The AD/BCE Strategy", 
        body: "**Elimination Flowchart:** Data Sufficiency is a game of elimination. Always use the AD/BCE flowchart.\n\n" +
              "• **Evaluate Statement (1):** If (1) is sufficient, the answer must be **A** or **D**. If (1) is not sufficient, it must be **B**, **C**, or **E**.\n" +
              "• **Evaluate Statement (2):** Evaluate it completely independently of (1).\n" +
              "• **Combine if necessary:** Only combine them if neither worked alone.\n\n" +
              "**Pro Note:** Never let the information from Statement 1 'bleed' into your evaluation of Statement 2."
      },
      { 
        title: "Yes/No vs. Value Questions", 
        body: "**Defining Sufficiency:** Understand exactly what 'sufficiency' means for each question type.\n\n" +
              "• **Value Question:** Sufficient if the statement provides **ONE** and only one value (e.g., x = 5). If it gives a range (x > 2), it is NOT sufficient.\n" +
              "• **Yes/No Question:** Sufficient if the answer is a consistent 'Always Yes' or a consistent 'Always No'. If it's 'Sometimes Yes, Sometimes No', it is NOT sufficient.\n\n" +
              "**Deep Dive:** A 'No' answer is just as sufficient as a 'Yes' answer. 'Always No' is a sufficient statement."
      },
      { 
        title: "Testing Numbers effectively", 
        body: "**F.R.O.Z.E.N technique:** Don't just pick random numbers. Pick 'target' numbers to prove insufficiency.\n\n" +
              "• **F.R.O.Z.E.N:** Fractions, Roots, One, Zero, Extremes (large/small), Negatives.\n" +
              "• **Goal:** Try to find two different scenarios that satisfy the statement but give different answers to the question.\n\n" +
              "**Pro Note:** If you find one scenario for 'Yes' and one for 'No', you are done — it's insufficient."
      },
      { 
        title: "Algebraic Sufficiency", 
        body: "**Safeguard with Algebra:** Sometimes algebra is safer than testing numbers.\n\n" +
              "• **Linear Equations:** One linear equation with one variable is sufficient. One equation with two variables is NOT.\n" +
              "• **Quadratics:** An equation like x² = 25 is often **NOT** sufficient because x could be 5 or -5.\n" +
              "• **Inequalities:** If the question is x > y, and the statement is x - y > 0, it's sufficient.\n\n" +
              "**Critical Insight:** Be careful with 'hidden' variables. In geometry, a 'square' has one internal variable (side), while a 'rectangle' has two (length and width)."
      },
      { 
        title: "The 'C' Trap & 'E' Guessing", 
        body: "**Common Pitfalls:** GMAT attracts you toward 'C' when the statements look like they need each other.\n\n" +
              "• **The Trap:** If you need both to solve a simple system of equations, double-check if one actually gives the answer alone through some hidden property.\n" +
              "• **Statement 1 = Statement 2:** If both statements provide the exact same information, the answer is usually **D** or **E**.\n\n" +
              "**Pro Strategy:** If you have to guess, and the statements look very different, 'C' is common. If they look identical, pick 'D' or 'E'."
      },
    ],
    walkthroughs: [
      { 
        problem: "Value: What is the value of x? (1) x² - 5x + 6 = 0 (2) x > 2", 
        steps: [
          "Step 1: Evaluate Statement (1). Factor the quadratic: (x-2)(x-3) = 0. So x = 2 or x = 3. Two values → NOT sufficient.",
          "Step 2: Evaluate Statement (2). x > 2. This gives infinite values (3, 4, 5.5...). NOT sufficient.",
          "Step 3: Combine them. From (1), x is 2 or 3. From (2), x must be greater than 2. This leaves only x = 3.",
          "Result: One unique value. Answer is C."
        ] 
      },
      { 
        problem: "Yes/No: Is n even? (1) n² + 1 is odd (2) 2n is even", 
        steps: [
          "Step 1: Evaluate (1). n² + 1 = odd  →  n² = even (since odd - 1 = even). If n² is even, n must be even. Always Yes. Sufficient.",
          "Step 2: Evaluate (2). 2n is even. This is true for ANY integer n (even or odd). 2(3)=6, 2(4)=8. Does not tell us if n is even. NOT sufficient.",
          "Result: Statement 1 works, statement 2 doesn't. Answer is A."
        ] 
      },
      { 
        problem: "Inequality: Is x/y > 1? (1) x > y (2) y > 0", 
        steps: [
          "Step 1: Evaluate (1). x > y. If x=5, y=2, then x/y = 2.5 (>1). If x=-2, y=-5, then x/y = 0.4 (<1). NOT sufficient.",
          "Step 2: Evaluate (2). y > 0. Tells nothing about x. NOT sufficient.",
          "Step 3: Combine. If x > y and y > 0, then x is a larger positive number than y. Dividing a larger positive by a smaller positive always gives > 1. Sufficient.",
          "Result: Answer is C."
        ] 
      },
      { 
        problem: "Geometry: What is the area of rectangle R? (1) The perimeter is 20 (2) The diagonal is √50", 
        steps: [
          "Step 1: Formula for area is L × W. We need both L and W.",
          "Step 2: Evaluate (1). 2(L+W) = 20  →  L+W = 10. Could be (5,5), (6,4), etc. Different areas. NOT sufficient.",
          "Step 3: Evaluate (2). L² + W² = 50. Could be (5,5) or (1,7). Different areas. NOT sufficient.",
          "Step 4: Combine. L+W=10 and L²+W²=50. From (1), W = 10-L. Substitute into (2): L² + (10-L)² = 50  →  L² + 100 - 20L + L² = 50  →  2L² - 20L + 50 = 0  →  L² - 10L + 25 = 0  →  (L-5)² = 0. So L=5, which means W=5.",
          "Result: Unique area 25. Answer is C."
        ] 
      },
      { 
        problem: "Remainders: If n is an integer, is n divisible by 6? (1) n is divisible by 3 (2) n is divisible by 2", 
        steps: [
          "Step 1: A number is divisible by 6 if it is divisible by both 2 AND 3.",
          "Step 2: Evaluate (1). Divisible by 3 (e.g., 3, 9, 12). Some work (12), some don't (9). NOT sufficient.",
          "Step 3: Evaluate (2). Divisible by 2 (e.g., 2, 4, 6). Some work (6), some don't (4). NOT sufficient.",
          "Step 4: Combine. divisible by 3 AND divisible by 2. This is the definition of divisible by 6.",
          "Result: Always Yes. Answer is C."
        ] 
      },
    ],
    mistakes: ["❌ Solving for the actual answer instead of just checking sufficiency", "❌ Letting Statement 2 'contaminate' your evaluation of Statement 1", "❌ Assuming a statement is sufficient because it gives a value (check if it gives the RIGHT value)", "❌ Forgetting x could be 0, negative, or a fraction"],
    tips: ["✅ Always evaluate Statement 1 completely before reading Statement 2", "✅ For yes/no questions: 'always yes' or 'always no' = sufficient. 'Sometimes yes, sometimes no' = not sufficient", "✅ The 'C' Trap: If Statement 1 and 2 together look like an obvious system of equations, GMAT often hides a way for one to work ALONE.", "✅ When statements together are needed, you must show neither works alone first"],
  },
  criticalReasoning: {
    title: "Critical Reasoning",
    color: "from-rose-500 to-pink-600",
    accent: "#fb7185",
    icon: "🧠",
    concepts: [
      { 
        title: "The Logic of the GMAT", 
        body: "**Argument Components:** Critical Reasoning tests your ability to take a set of facts and evaluate the strength of a claim.\n\n" +
              "• **Premise:** Facts that the author takes as true. You should generally accept these.\n" +
              "• **Conclusion:** The claim or prediction the author makes based on the premises.\n" +
              "• **Assumption:** The unstated 'glue' that connects the premise to the conclusion.\n\n" +
              "**Pro Note:** Most CR questions are simply asking you to find, strengthen, or weaken this unstated assumption."
      },
      { 
        title: "Common Logical Flaws", 
        body: "**Predictable Failures:** GMAT arguments often fail in predictable ways.\n\n" +
              "• **Correlation vs. Causation:** Just because X and Y happen together doesn't mean X causes Y. Maybe Z causes both, or it's a coincidence.\n" +
              "• **Sampling Bias:** Drawing a broad conclusion from a small or unrepresentative group.\n" +
              "• **False Dilemma:** Assuming only two options exist when there are others.\n" +
              "• **Scope Shift:** When the premise discusses one thing (e.g., efficiency) but the conclusion discusses another (e.g., profits).\n\n" +
              "**Deep Dive:** Pay close attention to 'quantity' words (some, most, all) and 'probability' words (could, will, must)."
      },
      { 
        title: "The Negation Test", 
        body: "**Assumption Tool:** This is the ultimate tool for Assumption questions.\n\n" +
              "• **Procedure:** Take an answer choice and negate it (make it 'not' true).\n" +
              "• **Evaluation:** If the negated choice makes the conclusion fall apart, it **MUST** be the assumption.\n\n" +
              "**Pro Note:** When negating, don't just find the opposite. Negate the core logical quantity (e.g., 'most' becomes 'not more than half')."
      },
      { 
        title: "Strengthen & Weaken Strategy", 
        body: "**Attacking the Gap:** These questions ask you to either support or attack the assumption.\n\n" +
              "• **Weaken:** Look for an alternative explanation or a reason why the premise doesn't lead to the conclusion.\n" +
              "• **Strengthen:** Find additional evidence that supports the link or rules out an alternative explanation.\n\n" +
              "**Critical Rule:** You are not looking for something that 'proves' the conclusion true/false, just something that makes it *more* or *less* likely."
      },
      { 
        title: "Advanced: Boldface & Resolve", 
        body: "**Special Frameworks:** Special question types require specific frameworks.\n\n" +
              "• **Boldface:** Identify the role of the bolded sentences (premise, conclusion, counter-evidence?).\n" +
              "• **Resolve Paradox:** find an answer that makes two contradictory facts coexist logically.\n\n" +
              "**Pro Tip:** For 'Evaluate the Argument', find the answer that would strengthen if 'Yes' and weaken if 'No'."
      },
    ],
    walkthroughs: [
      { 
        problem: "Assumption: 'Companies that offer gym memberships have fewer sick days. Thus, gym memberships improve employee health.'", 
        steps: [
          "Step 1: Identify the Conclusion — 'gym memberships improve employee health'.",
          "Step 2: Identify the Premise — 'fewer sick days correlate with gym memberships'.",
          "Step 3: Find the Gap — the argument assumes the membership CAUSES the health (and not that healthier people are just more likely to join gyms).",
          "Step 4: Use Negation — 'Healthy people are NOT more likely to join gyms anyway.' If this were false (they ARE more likely), the argument falls apart.",
          "Result: The assumption is that joining the gym *leads* to health, not the other way around."
        ] 
      },
      { 
        problem: "Weaken: 'Our city has fewer parks than neighboring cities. To improve resident happiness, we must build three new parks.'", 
        steps: [
          "Step 1: Conclusion — building 3 parks is necessary for happiness.",
          "Step 2: Premise — we have fewer parks than others.",
          "Step 3: Gap — assumes park count is the *primary* factor in happiness.",
          "Step 4: Weaken — find an alternative or a cost. Choice: 'Residents prefer indoor recreation over parks.' This suggests parks won't fulfill the goal.",
          "Key Strategy: Attack the link between premise and conclusion."
        ] 
      },
      { 
        problem: "Strengthen: 'A new law requires labels on sugary drinks. This will reduce diabetes rates because people will buy fewer labeled drinks.'", 
        steps: [
          "Step 1: Plan — we need to support the link between 'labels' and 'actually buying fewer'.",
          "Step 2: Choice — 'Studies show that consumers in this city read labels before making purchases.'",
          "Step 3: Why it works — it makes the premise ('labels will work') more likely to be true in reality.",
          "Result: Ruling out a failure point (people ignoring labels) strengthens the argument."
        ] 
      },
      { 
        problem: "Resolve Paradox: 'The unemployment rate dropped, but the total number of people with jobs also decreased.'", 
        steps: [
          "Step 1: Identify the conflict — lower rate (%) but lower count (number).",
          "Step 2: Think of the denominator — Unemployment rate = (Unemployed) / (Labor Force).",
          "Step 3: Solution — choice: 'Many people reached retirement age and left the labor force entirely.'",
          "Step 4: Logic — if the labor force shrinks faster than the job loss, the rate can still drop. The paradox is resolved."
        ] 
      },
      { 
        problem: "Boldface: 'Scientists believe that **global warming is accelerating**. However, **recent data shows a cooling trend in some regions**...'", 
        steps: [
          "Step 1: Role of 1st bold — 'global warming is accelerating' is the main claim scientists believe (the background).",
          "Step 2: Role of 2nd bold — 'a cooling trend' is counter-evidence used to challenge the first claim.",
          "Step 3: Compare choices — 'The first is a position that the argument seeks to challenge; the second is evidence used to support that challenge.'",
          "Result: Correct description of the logical roles."
        ] 
      },
    ],
    mistakes: ["❌ Picking answers that are 'true in the real world' but not supported by the passage", "❌ Choosing answers that are too extreme ('always', 'never', 'all') for Inference questions", "❌ Confusing strengthen with assumption — they're different tasks", "❌ For Weaken: attacking a premise (stated as true) instead of the assumption", "❌ Ignoring the scope of the conclusion."],
    tips: ["✅ Pre-phrase your answer before looking at choices — this prevents getting tricked", "✅ Eliminate answers that are out-of-scope or bring in outside information", "✅ For Paradox: both facts are true — find an answer that makes BOTH make sense simultaneously", "✅ Read conclusions carefully for scope (some vs. all, could vs. must)", "✅ Beware of 'Extreme Language': If the conclusion is modest, an extreme answer is likely wrong."],
  }
};

export const MOCK_EXAM_CONFIG = { total: 20, ps: 11, ds: 6, cr: 3, minutes: 40 };

export const TOPIC_CONFIG = [
  {
    key: "problemSolving",
    label: "Problem Solving",
    subtitle: "Quantitative Reasoning",
    icon: "⚡",
    desc: "Arithmetic, algebra, geometry, ratios, statistics, and number properties.",
    gradient: "linear-gradient(135deg,#ec4899,#be185d)",
    glow: "rgba(236,72,153,0.5)",
    accent: "#f9a8d4",
    accentBg: "rgba(236,72,153,0.12)",
    accentBorder: "rgba(244,114,182,0.45)",
    count: 11,
  },
  {
    key: "dataSufficiency",
    label: "Data Sufficiency",
    subtitle: "Is the data enough?",
    icon: "🔍",
    desc: "Determine if two statements provide enough information to answer a question.",
    gradient: "linear-gradient(135deg,#f472b6,#ec4899)",
    glow: "rgba(244,114,182,0.5)",
    accent: "#fbcfe8",
    accentBg: "rgba(244,114,182,0.12)",
    accentBorder: "rgba(249,168,212,0.45)",
    count: 7,
  },
  {
    key: "criticalReasoning",
    label: "Critical Reasoning",
    subtitle: "Analyze arguments & logic",
    icon: "🧠",
    desc: "Weaken, strengthen, assume, infer, and resolve paradoxes in real arguments.",
    gradient: "linear-gradient(135deg,#fb7185,#f43f5e)",
    glow: "rgba(251,113,133,0.5)",
    accent: "#fecdd3",
    accentBg: "rgba(251,113,133,0.12)",
    accentBorder: "rgba(253,164,175,0.45)",
    count: 5,
  },
  {
    key: "all",
    label: "All Topics",
    subtitle: "Mixed adaptive",
    icon: "🎯",
    desc: "Questions from all three categories, shuffled for full GMAT simulation.",
    gradient: "linear-gradient(135deg,#e879f9,#ec4899)",
    glow: "rgba(232,121,249,0.5)",
    accent: "#f5d0fe",
    accentBg: "rgba(232,121,249,0.12)",
    accentBorder: "rgba(240,171,252,0.45)",
    count: 23,
  },
];
