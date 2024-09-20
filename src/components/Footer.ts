export function renderFooter() {
  const footer = document.getElementById("footer")!;
  footer.innerHTML = `
      <div class="bg-gray-800 text-white text-center">
        <p>© 2024 Dogify</p>
      </div>
    `;
}
