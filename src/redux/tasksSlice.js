const { createSlice, nanoid } = require('@reduxjs/toolkit');
const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, { payload }) {
        return [...state, payload];
      },

      prepare(text) {
        return {
          payload: { text, id: nanoid(4), completed: false },
        };
      },
    },

    deleteTask(state, { payload }) {
      return state.filter(task => task.id !== payload);
    },

    toggleCompleted(state, { payload }) {
      return state.map(task => {
        if (task.id !== payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
