import { combineReducers } from 'redux';

const { statusFilters, ACTIONS_TYPE } = require('./constants');

// // --->>> const reducer --var 1--basic
// const initialState = {
//   tasks: [
//     { id: 0, text: 'Learn HTML and CSS', completed: true },
//     { id: 1, text: 'Get good at JavaScript', completed: true },
//     { id: 2, text: 'Master React', completed: false },
//     { id: 3, text: 'Discover Redux', completed: false },
//     { id: 4, text: 'Build amazing apps', completed: false },
//   ],
//   filters: {
//     status: statusFilters.all,
//   },
// };

// export const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ACTIONS_TYPE.addTasks:
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload],
//       };

//     case ACTIONS_TYPE.deleteTasks:
//       return {
//         ...state,
//         tasks: state.tasks.filter(task => task.id !== action.payload),
//       };

//     case ACTIONS_TYPE.toggleCompleted:
//       return {
//         ...state,
//         tasks: state.tasks.map(task => {
//           if (task.id === action.payload) {
//             return {
//               ...task,
//               completed: !task.completed,
//             };
//           }
//           return task;
//         }),
//       };

//     case ACTIONS_TYPE.setStatusFilter:
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           status: action.payload,
//         },
//       };

//     default:
//       return state;
//   }
// };
// // ---<<< const reducer --var 1--basic

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPE.addTasks:
      return [...state, action.payload];

    case ACTIONS_TYPE.deleteTasks:
      return state.filter(task => task.id !== action.payload);

    case ACTIONS_TYPE.toggleCompleted:
      return state.map(task => {
        if (task.id !== action.payload) {
          return task;
        }
        return {
          ...task,
          completed: !task.completed,
        };
      });

    default:
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPE.setStatusFilter:
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

// // --->>> reducer basic var
// export const reducer = (state = {}, action) => {
//   return {
//     tasks: tasksReducer(state.tasks, action),
//     filters: filtersReducer(state.filters, action),
//   };
// };
// // ---<<< reducer basic var

export const reducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
