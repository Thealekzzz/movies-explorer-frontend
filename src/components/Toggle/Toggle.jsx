import { PropTypes } from 'prop-types';
import './Toggle.css';

const Toggle = ({ onChange, active }) => {
  return (
    <div className={`toggle ${active ? 'toggle_active' : ''}`} onClick={onChange}>
      <div className="toggle__point"></div>
    </div>
  );
};

Toggle.propTypes = {
  onChange: PropTypes.func,
  active: PropTypes.bool,
};

export default Toggle;