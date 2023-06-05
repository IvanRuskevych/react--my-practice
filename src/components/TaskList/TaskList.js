import { Task } from 'components/Task/Task';
import css from './TaskList.module.css';
import { useSelector } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { getStatusFilter, getTasks } from 'redux/selectors';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  // Отримуємо масив завдань із стану Redux
  // const tasks = useSelector(state => state.tasks); // var 01
  // console.log(tasks);
  const tasks = useSelector(getTasks); // var 02
  console.log(getTasks);
  console.log(tasks);

  // Отримуємо значення фільтра із стану Redux
  // const statusFilter = useSelector(state => state.filters.status); // var 01
  // console.log(statusFilter);
  const statusFilter = useSelector(getStatusFilter); // var 02

  // Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
