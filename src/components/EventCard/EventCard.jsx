import PropTypes from 'prop-types';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';

import css from './EventCard.module.css';
// import {format} ver 1
// import formatEventStart from 'utils/formatEventStart';
// import formatDuration from 'utils/formatDuration';

// import {format} ver 2 from 'utils'
import { formatEventStart, formatDuration } from 'utils';

export default function EventCard({
  name,
  location,
  speaker,
  type,
  start,
  end,
}) {
  const formatedStart = formatEventStart(start);
  const formatedDuration = formatDuration(start, end);

  //   console.log(css);
  //   console.log(css[type]);

  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} size={16} />
        {location}
      </p>
      <p className={css.info}>
        <FaUserAlt className={css.icon} size={16} />
        {speaker}
      </p>
      <p className={css.info}>
        <FaCalendarAlt className={css.icon} size={16} />
        {formatedStart}
      </p>
      <p className={css.info}>
        <FaClock className={css.icon} size={16} />
        {formatedDuration}
      </p>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </div>
  );
}

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
