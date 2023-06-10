// ==================After=====================

import { createReducer } from '@reduxjs/toolkit';
import {
  addTask,
  deleteTask,
  setStatusFilter,
  toggleCompleted,
} from './actions';

const { statusFilters } = require('./constants');

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

const filtersInitialState = {
  status: statusFilters.all,
};

//======================After --> After 1=============================

export const tasksReducer = createReducer(tasksInitialState, {
  [addTask]: (state, action) => {
    return [...state, action.payload];
  },

  [deleteTask]: (state, { payload }) => {
    console.log(payload);
    return state.filter(task => task.id !== payload);
  },

  [toggleCompleted]: (state, { payload }) => {
    return state.map(task => {
      if (task.id !== payload) {
        return task;
      }
      return {
        ...task,
        completed: !task.completed,
      };
    });
  },
});

export const filtersReducer = createReducer(filtersInitialState, {
  [setStatusFilter]: (state, { payload }) => {
    return { ...state, status: payload };
  },
});

// // =============== After 1--> Before 1================

// export const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case addTask.type:
//       return [...state, action.payload];

//     case deleteTask.type:
//       return state.filter(task => task.id !== action.payload);

//     case toggleCompleted.type:
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return {
//           ...task,
//           completed: !task.completed,
//         };
//       });

//     default:
//       return state;
//   }
// };

// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case setStatusFilter.type:
//       return {
//         ...state,
//         status: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// // =============== Befor 1================
// import { combineReducers } from 'redux';

// const { statusFilters, ACTIONS_TYPE } = require('./constants');

// const tasksInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

// const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case ACTIONS_TYPE.addTask:
//       return [...state, action.payload];

//     case ACTIONS_TYPE.deleteTask:
//       return state.filter(task => task.id !== action.payload);

//     case ACTIONS_TYPE.toggleCompleted:
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return {
//           ...task,
//           completed: !task.completed,
//         };
//       });

//     default:
//       return state;
//   }
// };

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case ACTIONS_TYPE.setStatusFilter:
//       return {
//         ...state,
//         status: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export const reducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });
