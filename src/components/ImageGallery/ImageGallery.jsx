import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import { GalleryList } from './StyledImageGallery';

export const ImageGallery = ({ imageItems, ...otherProps }) => {
  return (
    <GalleryList>
      {imageItems.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          {...otherProps}
        />
      ))}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  imageItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
  onModal: PropTypes.func.isRequired,
};
