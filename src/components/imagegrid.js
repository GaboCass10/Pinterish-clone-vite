export function ImageGrid(initialPhotos = []) {
    const element = document.createElement("div");
    element.classList.add("image_grid");
  
    function render(photos) {
      element.innerHTML = "";
  
      if (!photos || photos.length === 0) {
        element.innerHTML = "<p>Sorry, no hubo suerte 😕</p>";
        return;
      }
  
      photos.forEach((photo) => {
        const card = document.createElement("div");
        card.classList.add("photo_card");
  
        const img = document.createElement("img");
        img.src = photo.urls.small;
        img.alt = photo.alt_description || "Imagen de Unsplash";
  
        const info = document.createElement("div");
        info.classList.add("photo_info");
        info.innerHTML = `
          <p><strong>${photo.user.name}</strong></p>
          <p>❤️ ${photo.likes}</p>
        `;
  
        card.appendChild(img);
        card.appendChild(info);
        element.appendChild(card);
      });
    }
  
    render(initialPhotos);
  
    return {
      element,
      update: render, 
    };
  }
  