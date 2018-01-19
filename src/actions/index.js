import {
    SEARCH_ENTITIES,
    CLOSE_MODAL,
    OPEN_MODAL,
    SEARCH_ASYNC_ENTITIES,
    IS_LOADING
 } from '../action-types/index' 

export function openModal(mediaId) {
    return {
        type: OPEN_MODAL,
        payload: {
            mediaId
        }
    }
}
export function closeModal() {
    return {
        type: CLOSE_MODAL,
    }
}

export function searchEntities(query) {
    return {
        type: SEARCH_ENTITIES,
        payload: {
            query,
        }
    }
}

export function isLoading(value){
    return {
        type: IS_LOADING,
        payload: {
            value
        }
    }
}

export function searchAsyncEntities(query) {
    return (dispatch) => {
        //Aqui hacemos el llamado HTTP request
        //fetch()
        //simulamos un llamado HTTP request con setTimeout
        dispatch(isLoading(true))
        setTimeout(()=>{
            dispatch(isLoading(false))
            dispatch(searchEntities(query))
        }, 5000)
    } 
}
