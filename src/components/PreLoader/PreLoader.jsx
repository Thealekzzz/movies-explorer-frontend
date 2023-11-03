import { PropTypes } from 'prop-types';
import './PreLoader.css';

const PreLoader = ({ isSmall, color, wrapperStyle }) => {
  return (
    <div style={wrapperStyle}>
      <span
        className={`loader__circle ${isSmall ? 'loader__circle_small' : ''}`}
        style={{
          borderColor: color || 'white',
          borderBottomColor: 'transparent',
        }}
      ></span>
    </div>
  );
};

PreLoader.propTypes = {
  isSmall: PropTypes.bool,
  color: PropTypes.string,
  wrapperStyle: PropTypes.Object,
};

export default PreLoader;