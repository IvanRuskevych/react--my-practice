import { useSelector } from 'react-redux';
import {
  // selectTasks,
  selectTasksCounter,
} from 'redux/selectors';
import css from './TaskCounter.module.css';

export const TaskCounter = () => {
  // ========= After ================
  const count = useSelector(selectTasksCounter);

  // // ============ Before removed const count --> selectors ========
  // const tasks = useSelector(selectTasks);

  // const count = tasks.reduce(
  //   (acc, task) => {
  //     if (task.completed) {
  //       acc.completed += 1;
  //     } else {
  //       acc.active += 1;
  //     }
  //     return acc;
  //   },
  //   { active: 0, completed: 0 }
  // );

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
