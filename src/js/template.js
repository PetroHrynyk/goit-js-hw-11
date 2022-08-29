export default function templateInfoCard({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<a class="photo-card gallery__item" href="${largeImageURL}" >
            <img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy"/>
            <div class="info">
              <p class="info__item">
                <b>Likes </b>${likes}
              </p>
              <p class="info__item">
                <b>Views </b>${views}
              </p>
              <p class="info__item">
                <b>Comments </b>${comments}
              </p>
              <p class="info__item">
                <b>Downloads </b>${downloads}
              </p>
            </div>
          </a>`;
}
