import { combineReducers } from 'redux';
import tasks from './tasks';
import visibilityFilter from './visibilityFilter';
import taskEditModal from './taskEditModal';

export default combineReducers({
    tasks,
    visibilityFilter,
    taskEditModal
})