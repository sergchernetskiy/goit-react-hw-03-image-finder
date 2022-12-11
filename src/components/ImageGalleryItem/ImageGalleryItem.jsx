import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './StyledImageGalleryItem';

export const ImageGalleryItem = ({
  image: { id, webformatURL, largeImageURL, tags },
}) => {
  return (
    <GalleryItem>
      <GalleryImage src={webformatURL} alt={tags} largeurl={largeImageURL} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  onModal: PropTypes.func.isRequired,
  onHandleModal: PropTypes.func.isRequired,
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};
