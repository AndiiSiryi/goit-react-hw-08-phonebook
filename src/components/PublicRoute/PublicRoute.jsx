import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectToken } from 'redux/users/users-selector';

export const PublicRoute = () => {
  const token = useSelector(selectToken);
  const location = useLocation();
  return token ? (
    <Navigate to={location.state?.from ?? '/contacts'} />
  ) : (
    <Outlet />
  );
};
