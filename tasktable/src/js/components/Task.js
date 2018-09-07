import React from 'react';
import PropTypes from 'prop-types';
import Extensions from './../extensions';

const Task = ({task, handleEdit, handleDelete, handleChangeStatus}) => (
            <tr>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{Extensions.DatetoStringRussian(new Date(task.date))}</td>
                <td><input type="checkbox" className="form-control" onClick={e => handleChangeStatus(e, task)} defaultChecked={task.status}/></td>
                <td>
                    <button className="btn btn-default" onClick={e => handleEdit(e, task)}>Редактировать</button>
                    <button className="btn btn-default" onClick={e => handleDelete(e, task)}>Удалить</button>
                </td>           
            </tr>
        )

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        status: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    }).isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleChangeStatus: PropTypes.func.isRequired
}

export default Task; 