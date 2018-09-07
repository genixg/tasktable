import React from 'react';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { editTask, hideModal } from '../actions'

const TaskEditModal = ({open, visible, onClose, onSave, task}) => (
    <Modal open={visible} onClose={onClose} center>
        <form onSubmit={(e) => {
            e.preventDefault();
            task.title = document.getElementById("taskEdit_Title").value;
            task.date = document.getElementById("taskEdit_Date").value;
            editTask(task);
            onClose();
        }}>
            <h6>Редактирование задачи</h6>
            <div className="form-group">
                <label htmlFor="taskEdit_Title">Название</label>
                <input type="text" className="form-control" id="taskEdit_Title" name="taskEdit_Title" placeholder="Название" defaultValue={task.title}/>
            </div>
            <div className="form-group">
                <label htmlFor="taskEdit_Date">Дата</label>
                <input type="date" className="form-control" id="taskEdit_Date" placeholder="Дата" defaultValue={task.date}/>
            </div>
            <button type="submit" className="btn btn-default">Сохранить</button>
        </form>            
    </Modal>
)

TaskEditModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func,
    task: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    visible: state.taskEditModal.visible,
    task: state.taskEditModal.task,
});

const mapDispatchToProps = dispatch => ({
    handleEdit: task => dispatch(editTask(task)),
    onClose: id => dispatch(hideModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskEditModal)