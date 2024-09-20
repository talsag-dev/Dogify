// src/main.ts
import "./style.css";
import { renderHeader } from "./components/Header";
import { renderFooter } from "./components/Footer";
import { renderLanding } from "./components/Landing";
import { renderQuestionnaire } from "./components/Questionnaire";
import { renderResults } from "./components/Results";
import questions from "./assets/questions.json";
import breeds from "./assets/breeds.json";
import { Breed } from "./types";

// Application State
let currentQuestion = 0;
const answers: string[] = [];

// Render Header and Footer
renderHeader();
renderFooter();
renderLanding();

window.startQuiz = startQuiz;
window.selectOption = selectOption;
window.resetQuiz = resetQuiz;

// Function to Start the Quiz
function startQuiz() {
  currentQuestion = 0;
  answers.length = 0; // Reset answers
  renderQuestionnaire(
    currentQuestion,
    questions[currentQuestion].text,
    questions[currentQuestion].options
  );
}

// Function to Handle Option Selection
function selectOption(option: string) {
  answers.push(option);
  nextQuestion();
}

// Function to Navigate to the Next Question or Results
function nextQuestion() {
  currentQuestion++;

  if (currentQuestion >= questions.length) {
    renderResults(getMatchingBreeds());
  } else {
    const question = questions[currentQuestion];
    renderQuestionnaire(currentQuestion, question.text, question.options);
  }
}

// Function to Get Matching Breeds Based on Answers
function getMatchingBreeds(): Breed[] {
  // Simple matching algorithm: count how many traits match
  return breeds
    .map((breed) => {
      const matchCount = answers.filter((answer) =>
        breed.traits.includes(answer)
      ).length;
      return { ...breed, matchCount };
    })
    .filter((breed) => breed.matchCount && breed.matchCount > 0)
    .sort((a, b) => (b.matchCount || 0) - (a.matchCount || 0));
}

// Function to Reset the Quiz
function resetQuiz() {
  currentQuestion = 0;
  answers.length = 0;
  renderLanding();
}
