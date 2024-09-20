// src/components/Results.ts

interface Breed {
  name: string;
  traits: string[];
  image: string;
  description: string;
  matchCount?: number;
}

export function renderResults(matchedBreeds: Breed[]) {
  const main = document.getElementById("main")!;

  if (matchedBreeds.length === 0) {
    main.innerHTML = `
      <div class="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
        <h2 class="text-4xl font-bold text-gray-800 mb-6">No Matches Found</h2>
        <p class="text-lg text-gray-600 mb-6 text-center">
          Sorry, we couldn't find any dog breeds that match your preferences. Please try again with different answers.
        </p>
        <button 
          class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full" 
          onclick="resetQuiz()">
          Try Again
        </button>
      </div>
    `;
    return;
  }

  const breedCards = matchedBreeds
    .map(
      (breed) => `
    <div class="bg-white shadow-md p-6 rounded-lg">
      <img src="${breed.image}" alt="${breed.name}" class="w-full h-48 object-cover rounded-lg mb-4">
      <h3 class="text-2xl font-bold text-gray-800 mb-2">${breed.name}</h3>
      <p class="text-gray-600 mb-4">${breed.description}</p>
      <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">Learn More</button>
    </div>
  `
    )
    .join("");

  main.innerHTML = `
    <div class="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <h2 class="text-4xl font-bold text-gray-800 mb-6">Your Best Matches</h2>
      
      <!-- Dog Breed Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        ${breedCards}
      </div>
      
      <button 
        class="mt-8 bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full" 
        onclick="resetQuiz()">
        Start Over
      </button>
    </div>
  `;
}
