import { PropTypes } from 'prop-types';

const NoData = ({ title = 'Ничего не найдено' }) => {
  return (
    <div className="no-data">
      <h2 className="no-data-title">{title}</h2>
    </div>
  );
};

NoData.propTypes = {
  title: PropTypes.string,
};

export default NoData;