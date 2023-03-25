import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites, setToggleFavorite } from '../stores/meetups.slice';
import MeetupItem from '../components/meetups/MeetupItem';
import classes from './../components/meetups/MeetupList.module.css';

export default function FavoritesPage() {
  const dispatch = useDispatch();
  const meetups = useSelector(selectFavorites);

  const handleFavoriteClick = useCallback((id) => {
    dispatch(setToggleFavorite(id));
  }, []);

  return (
    <section>
      <h1>Favorites Page</h1>
      <ul className={classes.list}>
        {meetups?.map((item) => (
          <MeetupItem
            key={`${item.key}-${item.title}`}
            handleFavoriteClick={handleFavoriteClick}
            {...item}
          />
        ))}
      </ul>
    </section>
  );
}
