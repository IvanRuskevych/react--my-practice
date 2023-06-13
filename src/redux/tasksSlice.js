import { createSlice } from '@reduxjs/toolkit';
import { addTask, deleteTask, fetchTasks, toggleCompleted } from './operations';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchTasks.pending](state) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addTask.pending](state) {
      // state.isLoading = true;
      return {
        ...state,
        isLoading: true,
      };
    },
    [addTask.fulfilled](state, { payload }) {
      // console.log('addTask.fulfilled-->payload', payload);

      // state.items.push(payload);
      // state.isLoading = false;
      // state.error = null;
      return {
        ...state,
        items: [...state.items, payload],
        isLoading: false,
        error: null,
      };
    },
    [addTask.rejected](state, { payload }) {
      // state.isLoading = false;
      // state.error = payload;
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    },

    [deleteTask.pending](state) {
      state.isLoading = true;
    },
    [deleteTask.fulfilled](state, { payload }) {
      // console.log('deleteTask.fulfilled-->payload', payload);

      // state.isLoading = false;
      // state.error = null;
      // const index = state.items.findIndex(task => task.id === payload.id);
      // state.items.slice(index, 1);

      return {
        ...state,
        isLoading: false,
        error: null,
        items: state.items.filter(task => task.id !== payload.id),
      };
    },
    [deleteTask.rejected](state, { payload }) {
      // state.isLoading = false;
      // state.error = payload;
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    },

    [toggleCompleted.pending](state) {
      state.isLoading = true;
    },

    [toggleCompleted.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(task => task.id === payload.id);
      state.items.splice(index, 1, payload);

      // return {
      //   ...state,
      //   isLoading: false,
      //   error: null,
      //   items: state.items.map(task => {
      //     if (task.id !== payload.id) {
      //       return task;
      //     }
      //     return { ...task, completed: !task.completed };
      //   }),
      // };
    },

    [toggleCompleted.rejected](state, { payload }) {
      // state.isLoading = false;
      // state.error = payload;
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
