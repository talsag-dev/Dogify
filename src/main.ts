// src/main.ts
import "./style.css";
import { renderHeader } from "./components/Header";
import { renderFooter } from "./components/Footer";
import { renderLanding } from "./components/Landing";
import { renderQuestionnaire } from "./components/Questionnaire";
import { renderResults } from "./components/Results";

// Application State
let currentQuestion = 0;
const answers: string[] = [];

// Questions Array
interface Question {
  text: string;
  options: { label: string; value: string }[];
}

const questions: Question[] = [
  {
    text: "Would you prefer a playful or calm dog?",
    options: [
      { label: "Playful", value: "playful" },
      { label: "Calm", value: "calm" },
    ],
  },
  {
    text: "Do you live in an apartment or a house?",
    options: [
      { label: "Apartment", value: "apartment" },
      { label: "House", value: "house" },
    ],
  },
  {
    text: "How much exercise can you provide daily?",
    options: [
      { label: "Low Exercise", value: "low_exercise" },
      { label: "High Exercise", value: "high_exercise" },
    ],
  },
  {
    text: "Do you have children?",
    options: [
      { label: "Yes", value: "has_children" },
      { label: "No", value: "no_children" },
    ],
  },
  {
    text: "Are you looking for a hypoallergenic breed?",
    options: [
      { label: "Yes", value: "hypoallergenic" },
      { label: "No", value: "not_hypoallergenic" },
    ],
  },
];

// Dog Breeds Data
interface Breed {
  name: string;
  traits: string[];
  image: string;
  description: string;
  matchCount?: number; // Optional for sorting
}

const breeds: Breed[] = [
  {
    name: "Golden Retriever",
    traits: ["playful", "active", "friendly"],
    image: "/src/assets/images/golden_retriever.jpg",
    description: "Friendly, playful, and loves to be around people.",
  },
  {
    name: "Bulldog",
    traits: ["calm", "sleepy", "affectionate"],
    image: "/src/assets/images/bulldog.jpg",
    description: "Calm, friendly, and loves lounging around.",
  },
  {
    name: "Poodle",
    traits: ["active", "intelligent", "hypoallergenic"],
    image: "/src/assets/images/poodle.jpg",
    description: "Intelligent, active, and suitable for allergy sufferers.",
  },
  // Add more breeds as needed
];

// Render Header and Footer
renderHeader();
renderFooter();

// Initial Render - Landing Page
renderLanding();

// Declare global functions to avoid TypeScript errors
declare global {
  interface Window {
    startQuiz: () => void;
    selectOption: (option: string) => void;
    resetQuiz: () => void;
  }
}

// Assign functions to the window object
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
