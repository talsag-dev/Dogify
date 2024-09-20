// src/components/Landing.ts

export function renderLanding() {
  const main = document.getElementById("main")!;
  main.innerHTML = `
    <div class="h-full bg-blue-50 flex flex-col justify-center items-center px-4 ">
      <h1 class="text-5xl font-bold text-gray-800 mb-4 text-center">Welcome to Dogify</h1>
      <p class="text-lg text-gray-600 text-center max-w-lg mb-8">
        Find the dog breed that suits your lifestyle. Answer a few questions, and we'll suggest the perfect dog for you!
      </p>
      <button 
        class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-lg" 
        onclick="startQuiz()">
        Get Started
      </button>
    </div>
  `;
}
