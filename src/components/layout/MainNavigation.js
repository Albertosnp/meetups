import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectFavorites } from '../../stores/meetups.slice';

import { useHeaderScroll } from '../../util-hooks/useHeaderScroll';
import {
  ALL_MEETUP_PAGE,
  FAVORITES_PAGE,
  NEW_MEETUP_PAGE,
} from './../../utils/constants';

import classes from './MainNavigation.module.css';

export default function MainNavigation() {
  const favorites = useSelector(selectFavorites);
  const { scrollDirection } = useHeaderScroll();

  const extraClass = scrollDirection === 'down' ? classes.sticky : '';

  return (
    <header className={`${classes.header} ${extraClass}`}>
      <div className={classes.logo} data-test="navigation-header">
        React Meetups
      </div>
      <nav>
        <ul>
          <li>
            <Link to={ALL_MEETUP_PAGE}>All Meetups</Link>
          </li>
          <li>
            <Link to={NEW_MEETUP_PAGE} data-cy="new-meetup-link">
              Add New Meetup
            </Link>
          </li>
          <li>
            <Link to={FAVORITES_PAGE} data-cy="favourite-link">
              My Favorites
              <span data-cy="number-favourites" className={classes.badge}>
                {favorites?.length ?? 0}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
