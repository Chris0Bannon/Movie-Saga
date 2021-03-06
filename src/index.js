import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';


// Create the rootSaga generator function
function* rootSaga() {
yield takeEvery('GET_MOVIES', getMovies)
yield takeEvery('FETCH_DETAILS', getDetails)
yield takeEvery('FETCH_GENRES', getGenres)
yield takeEvery('EDIT_MOVIES', editMovies)
}

function*editMovies (action) {
    try{
        yield axios.put(`/movies/edit/${action.payload.id}`, { title: action.payload.title, description: action.payload.description})
        yield put({
            type: 'GET_MOVIES'
        })
    }catch(error) {
        console.log('error in edit movies', error);
    }
}

function* getGenres (action) {
    try{ 
        let result = yield axios.get(`/movies/genres/${action.payload}`)
        yield put({
            type:'SET_GENRES',
            payload: result.data
        })
    }catch(error) {
        console.log('error in fetch genres', error);
        
    }
}

function * getDetails (action){
try{
   let result = yield axios.get(`/movies/${action.payload}`)
    yield put ({
        type: 'SET_DETAILS',
        payload: result.data
    })
}catch(error){
    console.log('error in getDetails', error);
    }
}

function*getMovies(action) {
try {
    let response = yield axios.get('/movies')
    yield put ({
        type: 'SET_MOVIES',
        payload: response.data
    })
    } catch (error){
    console.log('error in getMovies', error);
    }
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const details = (state = {
    id: 0,
    title: '',
    poster: '',
    description: '',
}, action) => {
    switch(action.type){
        case 'SET_DETAILS':
            return state = action.payload
        default: 
        return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        details,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
