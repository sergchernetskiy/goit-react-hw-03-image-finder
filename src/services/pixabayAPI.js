import axios from 'axios';

const API_KEY = '30566775-fc3edcf21448041b2c5bbe7c5';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const PER_PAGE = 12;

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  const { hits, totalHits } = response.data;
  const images = nomalizeImages(hits);
  const totalPages = Math.ceil(totalHits / PER_PAGE);

  return { images, totalPages };
};

export const nomalizeImages = images => {
  return images.map(({ id, webformatURL, largeImageURL, tags }) => ({
    id,
    webformatURL,
    largeImageURL,
    tags,
  }));
};
