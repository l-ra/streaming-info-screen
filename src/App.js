
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import StreamAgendaContainer from './StreamAgendaContainer'
import { setItems, setTitle, setQuickNews, nextQuickNews } from './actions'
import { createStore } from 'redux'
import appReducers from './reducers'
import FooterContainer from './FooterContainer';

const store = createStore(appReducers)

const agendaUrl = "https://pacov.city/zastupitelstvo/zasedani-2018-10/cors.php/agenda.json"
const newsUrl = "https://pacov.city/zastupitelstvo/zasedani-2018-10/cors.php/news.json"


// const fetchHeaders = new Headers()
// fetchHeaders.append("Cache-control","no-cache")
// fetchHeaders.append("pragma","no-cache")

// const fetchInit = {
//   method: "GET",
//   headers: fetchHeaders
// }


setInterval(()=>{
  fetch(newsUrl )
    .then((resp) => resp.json())
    .then((json)=>{
      store.dispatch(setQuickNews(json))
    })
    .catch((reason)=>{
      console.error(`fetch news ${newsUrl}`,reason)
    })
}, 7000)

fetch(agendaUrl)
  .then((resp) => resp.json())
  .then((json)=>{
    store.dispatch(setItems(json.agenda))
    store.dispatch(setTitle(json.title))
  })
  .catch((reason)=>{
    console.error(`fetch ${agendaUrl}`,reason)  
  })




const agendaDefaults = {
  title: "Zasedání zastupitelstva města Pacov 31.10.2018",
  agenda: [
    "Set agendaUrl to get fresh agenda",
    "Nastavte URL do agendaUrl",
    "Nastavte URL do agendaUrl",
    "Nastavte URL do agendaUrl",
    "Nastavte URL do agendaUrl",
    "Nastavte URL do agendaUrl",
    "Nastavte URL do agendaUrl",
    "Nastavte URL do agendaUrl",
    "Nastavte URL do agendaUrl",
    "Nastavte URL do agendaUrl"
  ]
}

const defaultNews = ["set newsUrl to get news","žádné zprávy, dobré zprávy", "když naprší, tak i uschne", "až opadá listí z dubu"]

setInterval(()=>{store.dispatch(nextQuickNews());}, 7000)

store.dispatch(setItems(agendaDefaults.agenda))
store.dispatch(setTitle(agendaDefaults.title))
store.dispatch(setQuickNews(defaultNews))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
            <StreamAgendaContainer />
            <FooterContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
