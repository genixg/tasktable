import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


import Task from './Task';
import { VisibilityFilters, toggleStatus, editTask, deleteTask, openModal} from '../actions'
import {List} from 'immutable'

//var List = require("immutable").List;

const getVisibleTasks = (tasks, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return tasks
        case VisibilityFilters.HIDE_DONE:
            return tasks.filter(t => !t.status)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    tasks: getVisibleTasks(state.tasks, state.visibilityFilter),
    modalOpened: state.taskEditModal
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleStatus: id => dispatch(toggleStatus(id)),
    handleEdit: task => dispatch(editTask(task)),
    handleOpenModal: task => dispatch(openModal(task)),
    handleDelete: id => dispatch(deleteTask(id)),
});

const TaskTable = ({tasks, modalOpened, handleOpenModal, handleDelete, toggleStatus}) => {
    const taskElements = tasks.map(task =>
            <Task key={task.id} task={task} handleEdit={() => handleOpenModal(task)} handleDelete={() => handleDelete(task.id)} handleChangeStatus={() => toggleStatus(task.id)} />
    );
    
    return (
        <div className="wrapper">
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Наименование</th>
                    <th>Дата</th>
                    <th>Статус</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                    {taskElements}
                </tbody>
            </table>
        </div>
    )
}

TaskTable.propTypes = {
    tasks: PropTypes.objectOf(List).isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    toggleStatus: PropTypes.func.isRequired,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskTable);