// import './css/styles.css';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import fetchSearchQuery from './js/fetchApi';
import templateInfoCard from './js/template';

// Notify.init({
//   width: '400px',
//   position: 'right-bottom',
// });

// images.addEventListener('click', onViewLargeImg);

// let gallery = new SimpleLightbox('.gallery a', {
//   captionType: 'attr',
//   captionsData: 'alt',
//   captionDelay: 250,
//   doubleTapZoom: 1.5,
//   fadeSpeed: 500,
// });

const refs = {
  form: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.load-more'),
};
let query = null;
