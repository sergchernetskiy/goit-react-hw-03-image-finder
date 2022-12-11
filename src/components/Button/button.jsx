import PropTypes from 'prop-types';
import { BtnStyled } from './StyledButton';

export const Button = ({ onLoadMore }) => {
  return (
    <BtnStyled type="button" onClick={onLoadMore}>
      Load More
    </BtnStyled>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
