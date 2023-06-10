// ============ After var 2====================

import { configureStore } from '@reduxjs/toolkit';
// import { tasksReducer, filtersReducer } from './reducer';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

// ============ After var 1====================
// const { configureStore } = require('@reduxjs/toolkit');
// const { tasksReducer, filtersReducer } = require('./reducer');

// export const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//     filter: filtersReducer,
//   },
// });

// // ============== Befor ==================
// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';

// const enhancer = devToolsEnhancer();

// export const store = createStore(reducer, enhancer);
