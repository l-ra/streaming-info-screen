import { combineReducers } from 'redux'

import {
    SET_ITEMS,
    SET_TITLE,
    SELECT_ITEM,
    SHOW_AGENDA,
    HIDE_AGENDA,
    SET_QUICK_NEWS,
    NEXT_QUICK_NEWS
} from './actions'


function agenda(state = {title: "no title", currentItem: -1, items:[], showAgenda: true }, action){
    switch (action.type) {
        case SET_ITEMS:
            return Object.assign(
                {},
                state,
                {
                    currentItem:-1,
                    items: action.items,
                }
            )
        case SELECT_ITEM:
            if ( action.itemIndex < state.items.length ){
                return Object.assign({},state, { currentItem: action.itemIndex } )
            } else {
                return state;
            }
        case SHOW_AGENDA:
            return Object.assign({},state,{ showAgenda: true });
        case HIDE_AGENDA: 
            return Object.assign({},state,{ showAgenda: false });
        case SET_TITLE:
            return Object.assign({},state,{ title: action.title });
        default: 
            return state
    }
}

function quickNews(state={news:[],index:-1}, action){
    switch (action.type) {
        case SET_QUICK_NEWS:
            let newIndex=state.index
            if (newIndex>=action.news.length){
                newIndex=0;
            }
            if (state.index<0){
                newIndex=0
            }
            return Object.assign(
                {},
                state,
                {
                    index:newIndex,
                    news: action.news,
                }
            )
        case NEXT_QUICK_NEWS:
            let nextIndex = ( state.index + 1 ) % state.news.length
            return Object.assign({},state, { index: nextIndex } )
        default: return state;
    }    
}

const appReducers = combineReducers({agenda,quickNews});

export default appReducers


