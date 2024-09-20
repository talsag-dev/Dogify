export function renderHeader() {
  const header = document.getElementById("header")!;
  header.innerHTML = `
    <nav class="bg-gray-800 text-white">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-2xl font-bold">Dogify</div>
        <ul class="hidden md:flex space-x-8">
          <li><a href="#home" class="hover:text-gray-400">Home</a></li>
          <li><a href="#about" class="hover:text-gray-400">About</a></li>
          <li><a href="#contact" class="hover:text-gray-400">Contact</a></li>
        </ul>
        <div class="md:hidden">
          <button id="menu-toggle" class="text-2xl focus:outline-none">&#9776;</button>
        </div>
      </div>
    </nav>
    <div id="mobile-menu" class="hidden md:hidden flex-col items-center bg-gray-800 text-white space-y-4 py-4">
      <a href="#home" class="block text-xl hover:text-gray-400">Home</a>
      <a href="#about" class="block text-xl hover:text-gray-400">About</a>
      <a href="#contact" class="block text-xl hover:text-gray-400">Contact</a>
    </div>
  `;

  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menu-toggle")!;
  const mobileMenu = document.getElementById("mobile-menu")!;

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  });
}
