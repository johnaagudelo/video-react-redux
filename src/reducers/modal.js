import { fromJS } from 'immutable';

const inicialState = fromJS({
    visibility: false,
    mediaId: null,
})

function modal(state = inicialState, action){
    switch (action.type) {
        case 'OPEN_MODAL':
            return state
        case 'CLOSE_MODAL':
            return state
        default:
            return state;
    }
}

export default modal;