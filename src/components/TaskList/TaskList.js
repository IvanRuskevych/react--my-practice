import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import { selectorTasks, selectorStatusFilter } from 'redux/selectors';
import { statusFilters } from 'redux/constants';
import css from './TaskList.module.css';

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
  const tasks = useSelector(selectorTasks);
  const statusFilter = useSelector(selectorStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  // console.log(visibleTasks);
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
