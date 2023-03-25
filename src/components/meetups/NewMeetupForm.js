import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewMeetup } from 'stores/meetups.slice';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

const INITIAL_FORM_STATE = {
  title: '',
  image: '',
  address: '',
  description: '',
};

export default function NewMeetupForm() {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(INITIAL_FORM_STATE);

  function submitHandler(event) {
    event.preventDefault();

    dispatch(addNewMeetup(formValues));
  }

  const handleChange = ({ target }) => {
    setFormValues((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            id="title"
            name="title"
            value={formValues.title}
            onChange={handleChange}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            required
            id="image"
            name="image"
            value={formValues.image}
            onChange={handleChange}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            name="address"
            value={formValues.address}
            onChange={handleChange}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            name="description"
            value={formValues.description}
            onChange={handleChange}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
