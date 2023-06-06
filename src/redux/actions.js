import { nanoid } from 'nanoid';
import { ACTIONS_TYPE } from './constants';

export const addTasks = text => {
  return {
    type: ACTIONS_TYPE.addTasks,
    payload: {
      id: nanoid(5),
      completed: false,
      text,
    },
  };
};

export const deleteTasks = taskId => {
  return {
    type: ACTIONS_TYPE.deleteTasks,
    payload: taskId,
  };
};

export const toggleCompleted = taskId => {
  return {
    type: ACTIONS_TYPE.toggleCompleted,
    payload: taskId,
  };
};

export const setStatusFilter = value => {
  return {
    type: ACTIONS_TYPE.setStatusFilter,
    payload: value,
  };
};
