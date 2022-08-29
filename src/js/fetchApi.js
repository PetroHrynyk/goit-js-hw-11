import axios from 'axios';

export default async function fetchSearchQuery(query, currentPage) {
  const API_KEY = `29542230-6fb76d8021b96e9e1ee6ed22a`;
  const perPage = 40;
  return await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${currentPage}`
  );
}
