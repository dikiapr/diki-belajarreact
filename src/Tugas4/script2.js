fetch("https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=56f0e8dece7d434184b9489408306644")
  .then((response) => response.json())
  .then((response) => {
    const berita = response.articles;
    updateUI(berita);
  });

const masukanKata = document.querySelector(".masukanKata");
masukanKata.addEventListener("keyup", async function () {
  const berita = await getBerita(masukanKata.value);
  updateUI(berita);
});

function getBerita(kata) {
  return fetch("https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=56f0e8dece7d434184b9489408306644&q=" + kata)
    .then((response) => response.json())
    .then((response) => response.articles);
}

function updateUI(berita) {
  let cards = "";
  berita.forEach((b) => (cards += cards2(b)));
  const beritaContainer = document.querySelector(".berita-container");
  beritaContainer.innerHTML = cards;
}

function cards2(b) {
  return `<div class="col-md-4 my-3">
            <div class="card">
              <img src="${b.urlToImage}" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${b.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${b.author} - ${b.publishedAt}</h6>
                <p class="card-text">${b.description}</p>
                <a href="${b.url}" class="btn btn-primary">Read more...</a>
              </div>
            </div>
          </div>`;
}
