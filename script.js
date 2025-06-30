let currentIndex = 0;
let images = [];

function openLightbox(imgElement) {
  images = Array.from(document.querySelectorAll('.gallery img')).filter(i => i.style.display !== 'none');
  currentIndex = images.indexOf(imgElement);
  document.getElementById("lightbox-img").src = imgElement.src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function nextImage(e) {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function prevImage(e) {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function filterImages(category) {
  const allImages = document.querySelectorAll('.gallery img');
  allImages.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = '';
    } else {
      img.style.display = 'none';
    }
  });
}
