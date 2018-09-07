import tasksDefault from './../tasks-data';

var List = require("immutable").List;

var reducer = function(state = new List(tasksDefault), action) {
    switch (action.type) {
        case "SET_STATE":
            return state.merge(action.state);
        case "DELETE_TASK":
            return state.filterNot(
                    (item) => item === action.task
                );
        case "EDIT_TASK":
            return state.map(task =>
                (task.id === action.task.id)
                    ? action.task
                    : task            
            );
        case "TOGGLE_STATUS":
            return state.map(task => 
                (task.id === action.id)
                    ? {...task, status: !task.status}
                    : task);
        case "ADD_TASK":
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    status: false,
                    date: action.date
                }
            ];
        default:
            return state;
    }
}

export default reducer;