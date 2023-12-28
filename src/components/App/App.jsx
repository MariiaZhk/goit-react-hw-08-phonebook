import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/Home';
import { Contacts } from 'pages/Contacts';
import { SignIn } from 'pages/SignIn';
import { Register } from 'pages/Register';
import { Layout } from 'components/Layout/Layout';
import NotFound from 'pages/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from '../../redux/auth/authOperations';
import { PrivateRoute } from 'routesConfig/PrivateRoute';
import { PublicRoute } from 'routesConfig/PublicRoute';
import { selectIsRefresh } from '../../redux/auth/authSelectors';
import { Loader } from 'components/Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  const isRefresh = useSelector(selectIsRefresh);

  return isRefresh ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <SignIn />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
