import { memo } from 'react';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem({
  id,
  image,
  title,
  address,
  description,
  handleFavoriteClick,
}) {
  const handleClick = () => {
    handleFavoriteClick && handleFavoriteClick(id);
  };

  return (
    <li className={classes.item} data-test="meet-up-item">
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={handleClick} data-cy="add-favourite">
            Add to favorites
          </button>
        </div>
      </Card>
    </li>
  );
}

export default memo(MeetupItem);
