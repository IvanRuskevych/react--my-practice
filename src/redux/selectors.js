export const selectorTasks = state => state.tasks.items;
export const selectorIsLoading = state => state.tasks.isLoading;
export const selectorError = state => state.tasks.error;

export const selectorStatusFilter = state => state.filters.status;
