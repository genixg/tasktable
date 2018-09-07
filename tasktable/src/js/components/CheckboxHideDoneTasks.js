import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setVisibilityFilter} from '../actions'

const CheckboxHideDoneTasks = ({active, handleClick}) => (
    <label className="float-right">
        <input type="checkbox" onClick={(event) => handleClick(event.target.checked)} defaultValue={active}  className="checkbox" />
        Скрыть выполненные
    </label>
)

CheckboxHideDoneTasks.propTypes = {
    handleClick: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})
const  mapDispatchToProps = (dispatch, ownProps) => ({
    handleClick: (checkbox) => dispatch(setVisibilityFilter(checkbox))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CheckboxHideDoneTasks)
