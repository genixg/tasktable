import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css'

import TaskTable from './components/TaskTable';
import TaskEditModal from './components/TaskEditModal';
import CheckboxHideDoneTasks from './components/CheckboxHideDoneTasks';

const App = () => (
    <div className="container">
        <CheckboxHideDoneTasks />
        <TaskTable />
        <TaskEditModal />                
    </div>
);
export default connect()(App); 