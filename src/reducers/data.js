import schema from '../schemas/index.js'
import { fromJS } from 'immutable'
import { SEARCH_ENTITIES } from '../action-types/index'

const inicialState = fromJS({
    entities: schema.entities,
    categories: schema.result.categories,
    search: '',
})

function data(state = inicialState, action){
    switch (action.type) {
        case SEARCH_ENTITIES:
            //action.payload.query
            /* let results = [];
            if(action.payload.query){
                const list = state.data.categories[2].playlist;
                results = list.filter((item)=>{
                    return item.author.toLowerCase().includes(action.payload.query.toLowerCase());
                })
            }
            return { 
                ...state,
                search: results
            } */
            return state.set('search', action.payload.query)
        default:
            return state;
    }
}

export default data;