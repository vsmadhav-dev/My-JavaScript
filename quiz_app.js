let questions = [
  {
    category: "G.K",
    question: "Prime minister of Italy?",
    choices: ["Gorgeina Meloni", "Narendra Modi", "Donald Trump"],
    answer: "Gorgeina Meloni"
  },
  {
    category: "Geography",
    question: "Which sovereign country has the most time zones in the world, including its overseas territories?",
    choices: ["Russia", "India", "France"],
    answer: "France"
  },
  {
    category: "History",
    question: `Which empire was ruled by the dynamic "Jagatai line" and collapsed in 1687 when its last ruler, Baba Palang, was overthrown after decades of warfare with the Kazakhs and Uyghurs?`,
    choices: ["Chagatai Khanate", "Turksme", "Kazak"],
    answer: "Chagatai Khanate"
  },
  {
    category: "Geography",
    thought: "This is a fun one because many think of Egypt or Iraq, but Sudan actually has more individual pyramids.",
    question: "Which country is home to the highest number of ancient pyramids?",
    choices: ["Egypt", "Sudan", "Mexico"],
    answer: "Sudan"
  },
  {
    category: "Geography",
    question: "Which sovereign nation is considered the closest neighbor to the United States mainland without sharing a land border?",
    choices: ["Cuba", "Russia", "The Bahamas"],
    answer: "Russia"
  }
];


function getRandomQuestion(questions) {
  let randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}


function getRandomComputerChoice(choices) {
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}


function getResults(questionObj, computerChoice) {
  if (questionObj.answer === computerChoice) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}
// Code to check whether the functions are working correctly or not. 
const selectedQuestion = getRandomQuestion(questions);
console.log(selectedQuestion.category);
console.log(selectedQuestion.question);

const computerSelection = getRandomComputerChoice(selectedQuestion.choices);
console.log(computerSelection);

const gameResult = getResults(selectedQuestion, computerSelection);
console.log(gameResult);
