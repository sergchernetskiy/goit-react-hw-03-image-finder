import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from '../services/pixabayAPI';
import { LoaderSkeleton } from './Loader/LoaderSkeleton';
import { Button } from './Button/button';
//import Modal from './Modal/';

class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    images: [],
    error: null,
    isLoaded: false,
    isModalOpen: false,
    largeImageURL: null,
    totalPages: null,
  };

  async componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page)
      try {
        if (searchQuery === '') {
          toast.info(
            `Sorry, there are no images matching your search query ${searchQuery}. Please try again.`
          );
          return;
        }
        this.setState({ isLoaded: true, error: null });

        const searchImages = await fetchImages(searchQuery, page);
        console.log(searchImages);

        if (searchImages.length < 1) {
          toast.info(
            `Sorry, there are no images matching your search query ${searchQuery}. Please try again.`
          );
        }

        this.setState(prevState => {
          return {
            images: [...prevState.images, ...searchImages.images],
          };
        });
      } catch {
        toast.error(
          `Sorry, there are no images matching your search query ${searchQuery}. Please try again.`
        );
      } finally {
        this.setState({ isLoaded: false });
      }
  }

  handleSubmit = e => {
    e.preventDefault();
    const inputQuery = e.target.elements.query.value.trim().toLowerCase();

    if (inputQuery === '') {
      toast.info('Enter the search data');
      return;
    }

    if (inputQuery === this.state.searchQuery) {
      toast.info('You enter the same request. Try enter something else');
      return;
    }

    this.setState({ searchQuery: inputQuery, page: 1, images: [] });
  };

  handleLoadMoreImages = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { searchQuery, images, isLoaded } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {searchQuery && <ImageGallery imageItems={images} />}
        <Toaster position="bottom-right" />
        {isLoaded && <LoaderSkeleton />}
        {images.length > 1 && !isLoaded && (
          <Button onLoadMore={this.handleLoadMoreImages}>Load more</Button>
        )}
      </>
    );
  }
}

export default App;