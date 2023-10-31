import { PropTypes } from 'prop-types';
import './PreLoader.css';

const PreLoader = ({ isSmall, color }) => {
  return (
    <span 
      className={`loader__circle ${isSmall ? 'loader__circle_small' : ''}`}
      style={{
        borderColor: color || 'white',
        borderBottomColor: 'transparent',
      }}
    ></span>
  );
};

PreLoader.propTypes = {
  isSmall: PropTypes.bool,
  color: PropTypes.string,
};

export default PreLoader;