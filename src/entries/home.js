import React from 'react';
import { hydrate } from 'react-dom';
import Home from '../pages/containers/home';
import { logger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
// import Playlist from './src/playlist/components/playlist';
//import data from '../api.json';
// console.log('Hola mundo!' )

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from '../reducers/index';
import { Map as map } from 'immutable'

/* const inicialState = {
    data: { 
        entities: data.entities,
        categories: data.result.categories,
        search: [],
     },
     modal: {
        visibility: false,
        mediaId: null,
     }
} */

//middleware
/* function logger({ getState, dispatch}){
    //metodo para despachar el siguiente middleware
    return (next) => {
        return (action)=>{
            console.log('vamos a enviar está accion', action);
            const value = next(action);
            console.log('este es mi nuevo estado', getState().toJS());
            return value
        }
    }
} */

/* const logger = ({ getState, dispatch}) => next => action =>{
    console.log('vamos a enviar está accion', action);
    const value = next(action);
    console.log('este es mi nuevo estado', getState().toJS());
    return value
} */

const store = createStore(
    reducer,
    map(),
    composeWithDevTools(
        applyMiddleware(
            logger,
            thunk
        )
    )
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

//console.log(store.getState())

const homeContainer = document.getElementById('home-container')


// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
hydrate( 
    <Provider store={store}>
        <Home />
    </Provider>,
    homeContainer);

