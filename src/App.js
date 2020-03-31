import React from 'react';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Authorization from './components/Authorization';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home.js'
import Information from './pages/Information.js'
import {AlertState} from './context/alert/alertState'
import {FirebaseState} from './context/alert/firebase/FirebaseState.js'

function App() {
  return (
    <FirebaseState>
    <AlertState>
    <BrowserRouter>
        <Navbar/>
    <div className="container pt-4">
    <Alert/>
    <Switch>
     <Route path='/' exact component={Home}/>
     <Route path='/about' component={Information}/>
     <Route path='/authorization' component={Authorization}/>
      </Switch>
    </div>
    </BrowserRouter>
    </AlertState>
    </FirebaseState>
  );
}

export default App;
