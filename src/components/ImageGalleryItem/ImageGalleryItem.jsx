import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './StyledImageGalleryItem';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  return (
    <GalleryItem>
      <GalleryImage src={webformatURL} alt={tags} largeurl={largeImageURL} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};
