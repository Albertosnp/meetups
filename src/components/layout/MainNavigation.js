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
            <a href="#" onClick={() => setPage(ALL_MEETUP_PAGE)}>
              All Meetups
            </a>
          </li>

          <li>
            <a href="#" onClick={() => setPage(NEW_MEETUP_PAGE)}>
              Add New Meetup
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setPage(FAVORITES_PAGE)}>
              My Favorites
              <span className={classes.badge}>{0}</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
