import React from 'react';
import Login from './Login';
import Home from './Home';
import Logout from './Logout';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Registration from './Registration';
import Header from './Header';

function App() {
    return (
        <div>
        <Header/>
            <Router>
                <Switch>
                    <Route exact path={"/"} component={Login}/>
                    <Route path={"/registration"} component={Registration}/>
                    <Route path={"/home"} component={Home}/>
                    <Route path={"/logout"} component={Logout}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;