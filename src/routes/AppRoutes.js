import Layout from 'components/layout/Layout';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useFetch } from 'util-hooks/useFetch';
import {
  FAVORITES_PAGE,
  NEW_MEETUP_PAGE,
  ALL_MEETUP_PAGE,
} from '../utils/constants';

const AllMeetupsPage = lazy(() => import('../pages/AllMeetupsPage'));
const FavoritesPage = lazy(() => import('../pages/Favorites'));
const NewMeetupsPage = lazy(() => import('../pages/NewMeetup'));

export const AppRoutes = () => {
  useFetch({ url: '/data.json' });

  return (
    <Suspense fallback={<></>}>
      <BrowserRouter>
        <Routes>
          <Route path={ALL_MEETUP_PAGE} element={<Layout />}>
            <Route path={ALL_MEETUP_PAGE} element={<AllMeetupsPage />} />
            <Route path={FAVORITES_PAGE} element={<FavoritesPage />} />
            <Route path={NEW_MEETUP_PAGE} element={<NewMeetupsPage />} />
            <Route path="*" element={<AllMeetupsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
