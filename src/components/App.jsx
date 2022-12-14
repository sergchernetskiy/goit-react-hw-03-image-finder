import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { Searchbar } from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
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
    const { searchQuery, page, totalPages, error } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      if (searchQuery === '') {
        toast.error(
          `Sorry, there are no images matching your search query ${searchQuery}. Please try again.`
        );
        return;
      }
      this.setState({ isLoaded: true, error: null });
      try {
        const searchImages = await fetchImages(searchQuery, page, totalPages);

        if (searchImages.totalPages < 1) {
          toast.error(
            `Sorry, there are no images matching your search query ${searchQuery}. Please try again.`
          );
          return;
        }

        this.setState(prevState => {
          return {
            images: [...prevState.images, ...searchImages.images],
          };
        });
        this.setState({ totalPages: searchImages.totalPages });
      } catch {
        this.setState({ error: error.message });
        toast.error(
          `Sorry, there are no images matching your search query ${searchQuery}. Please try again.`
        );
      } finally {
        this.setState({ isLoaded: false });
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const inputQuery = e.target.elements.query.value.trim().toLowerCase();

    if (inputQuery === '') {
      toast.error('Enter the search data');
      return;
    }

    this.setState({ searchQuery: inputQuery, page: 1, images: [] });
  };

  handleLoadMoreImages = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleModal = url => {
    this.setState({ largeImageURL: url });
  };

  render() {
    const {
      searchQuery,
      images,
      isLoaded,
      page,
      totalPages,
      largeImageURL,
      isModalOpen,
    } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <Toaster position="bottom-right" />
        {searchQuery && (
          <ImageGallery
            imageItems={images}
            onModal={this.openModal}
            onHandleModal={this.handleModal}
          />
        )}

        {isLoaded && <LoaderSkeleton />}
        {totalPages > 1 && totalPages > page && (
          <Button onLoadMore={this.handleLoadMoreImages}>Load more</Button>
        )}
        {isModalOpen && (
          <Modal onCloseModal={this.closeModal}>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
