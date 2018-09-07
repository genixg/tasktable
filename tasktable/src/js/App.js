import React, {Component} from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css'

import TaskTable from './components/TaskTable';
import TaskEditModal from './components/TaskEditModal';
import CheckboxHideDoneTasks from './components/CheckboxHideDoneTasks';


class App extends Component {
    state = {
        hideDoneTasks: false,
        openModal: false,
        editingTask: {},
    }

    render() {
        return (
            <div className="container">
                    <CheckboxHideDoneTasks />
                    <TaskTable />
                    <TaskEditModal open={this.state.openModal} onClose={this.onCloseModal} task={this.state.editingTask}/>
                
            </div>
        )
    }

    changeHideDoneTasks = () => { 
        this.setState({
            hideDoneTasks: !this.state.hideDoneTasks,
        });
    }
    
    doOpenModal = (e, curTask) => {
        this.setState({ 
            openModal: true,
            editingTask: curTask,
        });
    };
    
    onCloseModal = () => {
        this.setState({ openModal: false });
    };
    deleteTask = () => {
        alert("deleteTask");
    };
    handleChangeStatus = () => {
        alert("handleChangeStatus");
    }
}
   
export default connect()(App); 