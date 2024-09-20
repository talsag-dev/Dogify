declare global {
  interface Window {
    startQuiz: () => void;
    selectOption: (option: string) => void;
    resetQuiz: () => void;
  }
}

export {};
