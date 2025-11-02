import './style.css';
import './styles/main.scss';
import { Header } from "./components/Header.js";
import { ImageGrid } from "./components/imagegrid.js";
import { searchPhotos } from "./api/unsplash.js";
import { Footer } from './components/Footer.js';

const app = document.querySelector("#app");

const gallery = ImageGrid([]);

async function handleSearch(query) {
  try {
    const results = await searchPhotos(query);
    gallery.update(results);
  } catch (error) {
    console.error("Error al buscar imágenes:", error);
  }
}


async function loadInitialPhotos() {
  try {
    const queries = ("clothes", "food", "guitars");
    let allResults = [];

    for (const q of queries) {
      const results = await searchPhotos(q, 1, 10);
      allResults = allResults.concat(results);
    }

    allResults = allResults.sort(() => Math.random() - 0.5);
    gallery.update(allResults);

  } catch (error) {
    console.error("No ha habido suerte!");
  }
}

const header = Header(handleSearch, loadInitialPhotos);

app.appendChild(header);
app.appendChild(gallery.element);
app.appendChild(Footer());

loadInitialPhotos();


