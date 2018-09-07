import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setVisibilityFilter, VisibilityFilters} from '../actions'

const CheckboxHideDoneTasks = ({active, handleClick}) => (
    <label className="float-right">
        <input type="checkbox" onClick={(event) => handleClick(active)} value={active} checked={active === VisibilityFilters.HIDE_DONE}  className="checkbox" />
        Скрыть выполненные
    </label>
)

CheckboxHideDoneTasks.propTypes = {
    handleClick: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
    active: state.visibilityFilter
})
const  mapDispatchToProps = (dispatch, ownProps) => ({
    handleClick: (checkbox) => dispatch(setVisibilityFilter(checkbox))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CheckboxHideDoneTasks)
