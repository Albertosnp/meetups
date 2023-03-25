import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAllMeetups } from '../stores/meetups.slice';

export const useFetch = (options) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(options.url)
      .then((response) => response.json())
      .then((json) => {
        dispatch(setAllMeetups(json));
      });
  }, [options.url, dispatch]);
};
