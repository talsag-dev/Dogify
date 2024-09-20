// src/components/Questionnaire.ts

export function renderQuestionnaire(
  currentQuestion: number,
  questionText: string,
  options: { label: string; value: string }[]
) {
  const main = document.getElementById("main")!;
  main.innerHTML = `
    <div class="h-full bg-blue-50 flex flex-col items-center py-10 px-4">
      <h2 class="text-3xl font-semibold text-gray-800 mb-4">Question ${
        currentQuestion + 1
      } of 5</h2>
      <p class="text-lg text-gray-600 mb-6 text-center max-w-md">${questionText}</p>
      
      <!-- Option Buttons -->
      <div class="flex flex-col space-y-4 w-full max-w-md">
        ${options
          .map(
            (option) => `
          <button 
            class="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full text-lg w-full" 
            onclick="selectOption('${option.value}')">
            ${option.label}
          </button>
        `
          )
          .join("")}
      </div>
      
      <!-- Progress Bar -->
      <div class="w-full max-w-md mt-8">
        <div class="bg-gray-300 rounded-full h-4">
          <div class="bg-blue-500 h-4 rounded-full" style="width: ${
            ((currentQuestion + 1) / 5) * 100
          }%;"></div>
        </div>
      </div>
    </div>
  `;
}
