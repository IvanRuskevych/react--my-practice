// Імпортуємо хук
import { useDispatch, useSelector } from 'react-redux';
// Імпортуємо об'єкт значень фільтра
import { statusFilters } from '../../redux/constants';

import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';
import { getStatusFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/filtersSlice';
// import { setStatusFilter } from 'redux/actions';

export const StatusFilter = () => {
  // Отримуємо значення фільтра із стану Redux
  // const filter = useSelector(state => state.filters.status);// var 01
  const filter = useSelector(getStatusFilter); // var 02

  // console.log(filter === statusFilters.all);
  // console.log(filter === statusFilters.active);
  // console.log(filter === statusFilters.completed);

  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  // Викликаємо генератор екшену та передаємо значення фільтра
  // Відправляємо результат - екшен зміни фільтра
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
