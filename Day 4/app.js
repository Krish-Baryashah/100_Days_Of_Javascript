/*
FIrst Dynamic Render --Question and Options
Check Option is Selected ? YEs ==> Score : No ==> Warning
at the end of Quiz ===> Score
*/
const quiz = [
  {
    question: "What is the difference between `let`, `const`, and `var`?",
    ans1text: "let and const are block-scoped, var is function-scoped",
    ans2text: "const and var are the same",
    ans3text: "let is globally scoped",
    ans4text: "var is block-scoped",
    answer: "let and const are block-scoped, var is function-scoped",
  },
  {
    question: "What are arrow functions in JavaScript?",
    ans1text: "A new syntax for defining functions introduced in ES6",
    ans2text: "A type of function only used in classes",
    ans3text: "Functions with automatic hoisting",
    ans4text: "Functions that must always return a value",
    answer: "A new syntax for defining functions introduced in ES6",
  },
  {
    question: "Explain the difference between `==` and `===`.",
    ans1text:
      "== checks for value equality, === checks for value and type equality",
    ans2text: "They both work the same way",
    ans3text: "=== only works for numbers",
    ans4text: "== is stricter than ===",
    answer:
      "== checks for value equality, === checks for value and type equality",
  },
  {
    question: "What is a closure in JavaScript?",
    ans1text:
      "A function that has access to its outer scope even after the function execution ends",
    ans2text: "A function inside another function",
    ans3text: "A type of JavaScript loop",
    ans4text: "A built-in JavaScript method",
    answer:
      "A function that has access to its outer scope even after the function execution ends",
  },
  {
    question: "Explain event delegation.",
    ans1text:
      "A technique where a parent element handles events for its children",
    ans2text: "A way to delay JavaScript execution",
    ans3text: "A way to delegate functions to another script",
    ans4text: "An API used for managing events",
    answer:
      "A technique where a parent element handles events for its children",
  },
  {
    question: "What is the `this` keyword in JavaScript?",
    ans1text: "It refers to the current execution context",
    ans2text: "It always refers to the global object",
    ans3text: "It is used to create objects",
    ans4text: "It is a keyword for defining functions",
    answer: "It refers to the current execution context",
  },
  {
    question: "What are promises in JavaScript?",
    ans1text: "A way to handle asynchronous operations",
    ans2text: "A method for declaring functions",
    ans3text: "A special type of variable",
    ans4text: "An alternative to variables",
    answer: "A way to handle asynchronous operations",
  },
  {
    question:
      "What is the difference between `map()`, `forEach()`, `filter()`, and `reduce()`?",
    ans1text:
      "map() returns a new array, forEach() executes a function for each item, filter() creates a new array with matching items, reduce() accumulates values",
    ans2text: "forEach() modifies the original array",
    ans3text: "reduce() and map() are identical",
    ans4text: "filter() is used only for numbers",
    answer:
      "map() returns a new array, forEach() executes a function for each item, filter() creates a new array with matching items, reduce() accumulates values",
  },
  {
    question: "How does the JavaScript event loop work?",
    ans1text:
      "It continuously checks and executes tasks from the call stack and the message queue",
    ans2text: "It runs in parallel with the main JavaScript thread",
    ans3text: "It executes all tasks simultaneously",
    ans4text: "It is a built-in timer",
    answer:
      "It continuously checks and executes tasks from the call stack and the message queue",
  },
  {
    question: "What is hoisting in JavaScript?",
    ans1text:
      "The process where function and variable declarations are moved to the top of their scope",
    ans2text: "A way to optimize JavaScript performance",
    ans3text: "A method of looping through arrays",
    ans4text: "A JavaScript debugging technique",
    answer:
      "The process where function and variable declarations are moved to the top of their scope",
  },
];

const question = document.getElementById("quiz-question");
// console.log(question);
// console.log(question.textContent);
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");

// console.log(option_a);
// console.log(option_b);
// console.log(option_c);
// console.log(option_d);
// console.log(option_a.textContent);
// console.log(option_b.textContent);
// console.log(option_c.textContent);
// console.log(option_d.textContent);

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;
// console.log(quiz[currentQuestion].question);
// console.log(quiz[currentQuestion].ans1text);
// console.log(quiz[currentQuestion].ans2text);
// console.log(quiz[currentQuestion].ans3text);
// console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;

submit.addEventListener("click", () => {
  const checkedAns = document.querySelector('input[type="radio"]:checked');
  if (checkedAns === null) {
    alert("Please Select a Answer");
  } else {
    if (
      checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer
    ) {
      score++;
    }
    checkedAns.checked = false;
    currentQuestion++;
    if (currentQuestion < quiz.length) {
      question.textContent = quiz[currentQuestion].question;
      option_a.textContent = quiz[currentQuestion].ans1text;
      option_b.textContent = quiz[currentQuestion].ans2text;
      option_c.textContent = quiz[currentQuestion].ans3text;
      option_d.textContent = quiz[currentQuestion].ans4text;
      checkedAns.checked = false;
    }else{
        alert(`Your Score is ${score} out of ${quiz.length}`);
        location.reload();
        
    }
  }
});
