import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import makeTemplate from './js/templatesCard';
import makeFetch from './js/fetchApi';
import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  loadMore: document.querySelector('.button--load-more'),
};

let query = null;

let totalPages = null;
let currentPage = null;
let lightbox;

const loadMoreOn = () => refs.loadMore.classList.add('visible');

const loadMoreOff = () => refs.loadMore.classList.remove('visible');
loadMoreOff();

const handleSubmit = e => {
  e.preventDefault();
  refs.gallery.innerHTML = ``;
  query = e.target.search.value;
  currentPage = 1;
  makeFetch(query, currentPage)
    .then(response => {
      const {
        data: { hits, totalHits },
      } = response;
      totalPages = Math.ceil(totalHits / hits.length);
      if (hits.length === 0) {
        Notiflix.Notify.failure(
          `Sorry, there are no images matching your search query. Please try again.`
        );
        return;
      } else if (hits.length < 40) {
        Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
        Notiflix.Notify.info(
          "We're sorry, but you've reached the end of search results."
        );
        renderList(hits);
        loadMoreOff();
      } else {
        Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
        renderList(hits);
        loadMoreOn();
        lightbox = new SimpleLightbox('.gallery a', {
          captionDelay: 250,
          loop: true,
          doubleTapZoom: 1.3,
        });
      }
    })
    .catch(error => console.log(error));
};

function renderList(hits) {
  const templates = hits.map(hit => makeTemplate(hit)).join('');
  refs.gallery.insertAdjacentHTML(`beforeend`, templates);
}

function handleMoreSubmit() {
  currentPage += 1;
  makeFetch(query, currentPage)
    .then(response => {
      const {
        data: { hits },
      } = response;
      if (hits.length < 40 && currentPage === totalPages) {
        Notiflix.Notify.info(
          "We're sorry, but you've reached the end of search results."
        );
        loadMoreOff();
      }
      renderList(hits);
      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
    });
  // }
}

refs.form.addEventListener('submit', handleSubmit);
refs.loadMore.addEventListener('click', handleMoreSubmit);
