function getRandomImageUrl() {
  return `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`;
}

function loadImages() {
  const row1 = document.getElementById('row1');
  const row2 = document.getElementById('row2');
  row1.innerHTML = "";
  row2.innerHTML = "";

  // Add 5 images to row 1
  for (let i = 0; i < 4; i++) {
    const img = document.createElement('img');
    img.src = getRandomImageUrl();
    row1.appendChild(img);
  }

  // Add 2 images to row 2
  for (let i = 0; i < 2; i++) {
    const img = document.createElement('img');
    img.src = getRandomImageUrl();
    row2.appendChild(img);
  }
}

window.onload = loadImages;
