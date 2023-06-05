// Імпортуємо хук
import { useSelector } from 'react-redux';
// Імпортуємо об'єкт значень фільтра
import { statusFilters } from '../../redux/constants';

import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';
import { getStatusFilter } from 'redux/selectors';

export const StatusFilter = () => {
  // Отримуємо значення фільтра із стану Redux
  // const filter = useSelector(state => state.filters.status);// var 01
  const filter = useSelector(getStatusFilter); // var 02

  // console.log(filter === statusFilters.all);
  // console.log(filter === statusFilters.active);
  // console.log(filter === statusFilters.completed);

  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};
