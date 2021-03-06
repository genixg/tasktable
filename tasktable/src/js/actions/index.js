let nextTaskId = 0; // for undublicating ID on adding new
export const deleteTask = id => ({
    type: "DELETE_TASK",
    id
});
export const  editTask = task => ({
    type: "EDIT_TASK",
    task
});
export const  toggleStatus = id => ({
    type: "TOGGLE_STATUS",
    id
});
export const  addTask = task => ({ // for next features
    type: "ADD_TASK",
    id: nextTaskId++,
    task
});
export const setVisibilityFilter = checked => ({
    type: 'SET_VISIBILITY_FILTER',
    checked
})
export const  openModal = (task) => ({
    type: "MODAL_SHOW",
    task
});
export const  hideModal = () => ({
    type: "MODAL_HIDE"
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    HIDE_DONE: 'HIDE_DONE'
}