import { PropTypes } from 'prop-types';
import './NoData.css';

const NoData = ({ title = 'Ничего не найдено' }) => {
  return (
    <div className="no-data">
      <h2 className="no-data__title">{title}</h2>
    </div>
  );
};

NoData.propTypes = {
  title: PropTypes.string,
};

export default NoData;