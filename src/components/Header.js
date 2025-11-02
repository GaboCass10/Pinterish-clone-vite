import { SearchBar } from "./Searchbar";

export function Header(onSearch, onLogoClick) {
    const header = document.createElement("header");
    header.classList.add("the_header");

    const logo = document.createElement("h1");
    logo.classList.add("logo");
    logo.setAttribute("aria-label", "Pinterish Home");
    logo.innerHTML = `
        <span class="logo-full">Pinterish</span>
        <span class=logo-short aria-hidden="true">P</span>
    `;

    const leftIcons = document.createElement("div");
    leftIcons.classList.add("header_icons");

    const notifications = document.createElement("button");
    notifications.classList.add("icon_btn");
    notifications.title = "Notificaciones";
    notifications.innerHTML = "🔔";

    const comments = document.createElement("button");
    comments.classList.add("icon_btn");
    comments.title = "Comentarios";
    comments.innerHTML = "💬";

    const loginButton = document.createElement("button");
    loginButton.classList.add("login_btn");
    loginButton.textContent = "Login";


    logo.addEventListener("click", onLogoClick);

    const searchBar = SearchBar(onSearch);

    leftIcons.appendChild(notifications);
    leftIcons.appendChild(comments);

    header.appendChild(logo);
    header.appendChild(searchBar);
    header.appendChild(leftIcons);
    header.appendChild(loginButton);

    return header; 
}