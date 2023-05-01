import PropTypes from 'prop-types';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';

// import {format} ver 1
// import formatEventStart from 'utils/formatEventStart';
// import formatDuration from 'utils/formatDuration';

// import {format} ver 2 from 'utils'
import { formatEventStart, formatDuration } from 'utils';
import { Card, Chip, EventName, Info } from './EventCard.styled';
import { iconSize } from 'constants';

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
    <Card>
      <EventName>{name}</EventName>
      <Info>
        <FaMapMarkerAlt size={iconSize.sm} />
        {location}
      </Info>
      <Info>
        <FaUserAlt size={iconSize.sm} />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt size={iconSize.sm} />
        {formatedStart}
      </Info>
      <Info>
        <FaClock size={iconSize.sm} />
        {formatedDuration}
      </Info>
      <Chip eventType={type}>{type}</Chip>
    </Card>
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
