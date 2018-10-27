/*
 * action types
 */

export const SELECT_ITEM = 'SELECT_ITEM'
export const SET_ITEMS = 'SET_ITEMS'

export const SET_TITLE = 'SET_TITLE'

export const SHOW_AGENDA = 'SHOW_AGENDA'
export const HIDE_AGENDA = 'HIDE_AGENDA'
export const ADD_QUICK_MESSAGE = 'ADD_QUICK_MESSAGE'
export const REMOVE_QUICK_MESSAGE = 'REMOVE_QUICK_MESSAGE'

export const SET_QUICK_NEWS = 'SET_QUICK_NEWS'
export const NEXT_QUICK_NEWS = 'NEXT_QUICK_NEWS'


/*
 * action creators
 */

export function selectItem(itemIndex) {
    return { type: SELECT_ITEM, itemIndex }
}

export function setItems(items) {
    return { type: SET_ITEMS, items }
}

export function showAgenda() {
    return { type: SHOW_AGENDA }
}

export function hideAgenda() {
    return { type: HIDE_AGENDA }
}

export function addQuickMessage(id, message) {
    return { type: ADD_QUICK_MESSAGE, id, message }
}

export function removeQuickMessage(id) {
    return { type: REMOVE_QUICK_MESSAGE, id }
}

export function setTitle(title) {
    return { type: SET_TITLE, title }
}

export function setQuickNews(news) {
    return { type: SET_QUICK_NEWS, news }
}

export function nextQuickNews() {
    return { type: NEXT_QUICK_NEWS }
}




