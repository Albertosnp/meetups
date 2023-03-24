import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllMeetups, setAllMeetups } from '../stores/meetups.slice';

export const useFetch = (options) => {
  const dispatch = useDispatch();
  const meetups = useSelector(selectAllMeetups);

  useEffect(() => {
    fetch(options.url)
      .then((response) => response.json())
      .then((json) => {
        dispatch(setAllMeetups(json));
      });
  }, [options.url]);

  return {
    meetups,
  };
};
