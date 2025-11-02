const BASE_URL = "https://api.unsplash.com";
const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

if (!accessKey) {
  console.warn("⚠️ Falta la variable VITE_UNSPLASH_ACCESS_KEY en el archivo .env");
}

export async function searchPhotos(query, page = 1, perPage = 20) {
  const url = `${BASE_URL}/search/photos?query=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Error en la API de Unsplash: ${res.status} ${errorText}`);
  }

  const data = await res.json();
  return data.results; 
}
