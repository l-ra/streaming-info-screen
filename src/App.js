
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import StreamAgendaContainer from './StreamAgendaContainer'
import { setItems, setTitle, setQuickNews, nextQuickNews } from './actions'
import { createStore } from 'redux'
import appReducers from './reducers'
import FooterContainer from './FooterContainer';

const store = createStore(appReducers)

const listOfAgenda = [
  "Složení slibu členů zastupitelstva města",
  "Schválení počtu místostarostů města",
  "Určení funkcí, pro které budou členové zastupitelstva města uvolněni",
  "Stanovení výše odměn neuvolněným členům zastupitelstva na následující volební období",
  "Schválení způsobu volby starosty města, místostarosty města a členů rady města",
  "Volba starosty města",
  "Volba místostarosty města",
  "Volba členů rady města",
  "Zřízení výborů zastupitelstva města",
  "Diskuze",
]

setInterval(()=>{store.dispatch(nextQuickNews());}, 7000)

store.dispatch(setItems(listOfAgenda))
store.dispatch(setTitle("Zasedání zastupitelstva města Pacov 31.10.2018"))
store.dispatch(setQuickNews(["no news1", "no news2", "no news3"]))

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
