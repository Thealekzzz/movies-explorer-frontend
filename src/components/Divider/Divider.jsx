import { PropTypes } from 'prop-types';
import './Divider.css';

const Divider = ({ type, height }) => {
  return (
    <div
      className={`divider ${type === 'horizontal' ? 'divider__horizontal' : ''}`}
      style={{
        height: type === 'vertical' ? `${height || 40}px` : '1px',
      }}
    ></div>
  );
};

Divider.propTypes = {
  type: PropTypes.oneOf(["vertical", "horizontal"]),
  height: PropTypes.number,
};

export default Divider;