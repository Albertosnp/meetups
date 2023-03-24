import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setToggleFavorite } from '../stores/meetups.slice';
import { useFetch } from '../util-hooks/useFetch';
import MeetupItem from '../components/meetups/MeetupItem';
import classes from './../components/meetups/MeetupList.module.css';

export default function AllMeetupsPage() {
  const dispatch = useDispatch();
  const { meetups } = useFetch({
    url: '/data.json',
  });

  const handleFavoriteClick = useCallback((id) => {
    dispatch(setToggleFavorite(id));
  }, []);

  if (!meetups) return <p>Loading...</p>;
  return (
    <section>
      <h1>All Meetups</h1>
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
