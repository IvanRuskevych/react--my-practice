// import { createAction, nanoid } from '@reduxjs/toolkit';
// import { ACTIONS_TYPE } from './constants';

// // =================== After =====================
// export const addTask = createAction(ACTIONS_TYPE.addTask, text => {
//   return {
//     payload: {
//       text,
//       id: nanoid(),
//       completed: false,
//     },
//   };
// });

// export const deleteTask = createAction(ACTIONS_TYPE.deleteTask);
// export const toggleCompleted = createAction(ACTIONS_TYPE.toggleCompleted);
// export const setStatusFilter = createAction(ACTIONS_TYPE.setStatusFilter);

// // =============== Before =====================

// import { nanoid } from 'nanoid';
// import { ACTIONS_TYPE } from './constants';

// export const addTask = text => {
//   return {
//     type: ACTIONS_TYPE.addTask,
//     payload: {
//       id: nanoid(5),
//       completed: false,
//       text,
//     },
//   };
// };

// export const deleteTask = taskId => {
//   return {
//     type: ACTIONS_TYPE.deleteTask,
//     payload: taskId,
//   };
// };

// export const toggleCompleted = taskId => {
//   return {
//     type: ACTIONS_TYPE.toggleCompleted,
//     payload: taskId,
//   };
// };

// export const setStatusFilter = value => {
//   return {
//     type: ACTIONS_TYPE.setStatusFilter,
//     payload: value,
//   };
// };
