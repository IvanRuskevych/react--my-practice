import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { Helmet } from 'react-helmet';
import { TasksBar } from 'components/TasksBar/TasksBar';

export const TasksPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>My tasks</title>
      </Helmet>
      <TasksBar />
      <TaskForm />
      <div>{isLoading && !error && 'Request in progress...'}</div>
      {/* {isLoading && !error && <b>Request in progress... </b>} */}
      <TaskList />
    </>
  );
};
