import Contacts from 'pages/ContactsPage';
import LogInPage from 'pages/LogInPage';
import SignUpPage from 'pages/SingUpPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUserThunk } from 'redux/users/users-thunk';
import Navigation from './Navigation/Navigation';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import AppFooter from './AppFooter/AppFooter';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
      <AppFooter />
    </>
  );
};

export default App;
