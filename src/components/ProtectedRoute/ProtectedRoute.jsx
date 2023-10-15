import { Navigate } from "react-router-dom";
import { PropTypes } from 'prop-types';

const ProtectedRouteElement = ({
  element: Component,
  isLogged,
  ...props
}) => {
  return isLogged ? <Component {...props} /> : <Navigate to="/signin" replace />
}

ProtectedRouteElement.propTypes = {
  element: PropTypes.func,
  isLogged: PropTypes.bool,
};

export default ProtectedRouteElement;