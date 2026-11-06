const cards = [...document.querySelectorAll(".project-card")];
const filters = [...document.querySelectorAll(".filter")];
const searchInput = document.querySelector("#project-search");
const emptyState = document.querySelector("#empty-state");
const projectCount = document.querySelector("#project-count");

function updateCatalog() {
  const activeFilter = document.querySelector(".filter.is-active").dataset.filter;
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  cards.forEach((card) => {
    const matchesFilter = activeFilter === "all" || card.dataset.category === activeFilter;
    const matchesSearch = card.dataset.name.toLowerCase().includes(query);
    const isVisible = matchesFilter && matchesSearch;
    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  emptyState.hidden = visibleCount !== 0;
  projectCount.textContent = `${visibleCount} ${visibleCount === 1 ? "project" : "projects"}`;
}

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("is-active"));
    filter.classList.add("is-active");
    updateCatalog();
  });
});

searchInput.addEventListener("input", updateCatalog);
updateCatalog();
