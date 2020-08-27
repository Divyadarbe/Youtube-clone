import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommededVideos from './RecommededVideos';
import SearchPage from './SearchPage'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <div className='app__page'>
              <Sidebar/>
              <RecommededVideos />
            </div>
          </Route>
          <Route path='/search/:searchTerm'>

            <div className='app__page'>
              <Sidebar/>
              <SearchPage />
            </div>
          </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
