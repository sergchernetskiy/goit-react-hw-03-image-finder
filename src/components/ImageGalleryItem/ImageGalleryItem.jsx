import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './StyledImageGalleryItem';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onModal,
  onHandleModal,
}) => {
  const handleClick = () => {
    onModal();
    onHandleModal(largeImageURL);
  };
  return (
    <GalleryItem onClick={handleClick}>
      <GalleryImage src={webformatURL} alt={tags} largeurl={largeImageURL} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  onModal: PropTypes.func.isRequired,
  onHandleModal: PropTypes.func.isRequired,
  image: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};
