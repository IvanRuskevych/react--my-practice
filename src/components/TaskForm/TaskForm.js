import { Button } from 'components/Button/Button';
import css from './TaskForm.module.css';
import { useDispatch } from 'react-redux';
// import { addTask } from 'redux/actions';
// import { toast } from 'react-toastify';
import { Notify } from 'notiflix';
import { addTask } from 'redux/tasksSlice';

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;

    if (!form.elements.text.value) {
      console.log('error');

      // toast('🦄 Wow so easy!', {
      //   position: 'top-right',
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: 'light',
      // });

      Notify.warning('Enter task name');
      console.log('ERROR');

      return;
    }

    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <>
        <Button type="submit">Add task</Button>
      </>
    </form>
  );
};
