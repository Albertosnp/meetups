import { Link } from 'react-router-dom';

import { useHeaderScroll } from '../../util-hooks/useHeaderScroll';
import {
  ALL_MEETUP_PAGE,
  FAVORITES_PAGE,
  NEW_MEETUP_PAGE,
} from './../../utils/constants';

import classes from './MainNavigation.module.css';

export default function MainNavigation({ setPage }) {
  const { scrollDirection } = useHeaderScroll();
  const extraClass = scrollDirection === 'down' ? classes.sticky : '';

  return (
    <header
      className={`${classes.header} ${extraClass}`}
      data-test="navigation-header"
    >
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={ALL_MEETUP_PAGE}>All Meetups</Link>
          </li>
          <li>
            <Link to={NEW_MEETUP_PAGE}>Add New Meetup</Link>
          </li>
          <li>
            <Link to={FAVORITES_PAGE}>
              My Favorites
              <span className={classes.badge}>{0}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
