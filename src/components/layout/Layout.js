import { Outlet } from 'react-router-dom';
import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{<Outlet />}</main>
    </>
  );
}
