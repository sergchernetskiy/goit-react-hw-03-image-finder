import axios from 'axios';

const API_KEY = '30566775-fc3edcf21448041b2c5bbe7c5';

axios.defaults.baseURL = 'https://pixabay.com/api/';

/* export const fetchImages = async (query, page) => {
  const response = await axios.get({
    options: {
      q: `${query}`,
      page: `${page}`,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });

  return response.data;
}; */

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data;
};
