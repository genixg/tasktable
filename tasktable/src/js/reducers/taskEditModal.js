var editModalState = {
  visible: false,
  task: {}
}

const taskEditModal = (state = editModalState, action) => {
  switch (action.type) {
    case 'MODAL_SHOW':
        return Object.assign({}, state, {
          visible: true,
          task: action.task,
        });
    case 'MODAL_HIDE':
        return Object.assign({}, state, {
          visible: false,
        });
    default:
      return state
  }
}

export default taskEditModal;