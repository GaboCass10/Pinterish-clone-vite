export function SearchBar(onSearch) {
    const container = document.createElement("div");
        container.classList.add("search_bar");

    const input = document.createElement("input");
    input.type = "text";

    input.placeholder = "Busca lo que quieras!";

    const button = document.createElement("button");
    button.textContent = "Buscar";

    button.addEventListener("click", () => {
        const query = input.value.trim();
        if (query) {
            onSearch(query);
            input.value = "";
        }
    });

    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            button.click();
        }
    });

    container.appendChild(input);
    container.appendChild(button); 

    return container;
    
}