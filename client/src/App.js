import React from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Home from './components/pages/home/Home';
import Single from './components/pages/single/Single.jsx';
import Write from './components/pages/write/Write.jsx';
import Settings from './components/pages/settings/Settings.jsx'
import Login from "./components/pages/login/Login.jsx"
import Register from "./components/pages/register/Register";
import { useContext } from "react";
import { Context } from "./context/Context";


function App()
{
    const { user } = useContext(Context);
    return(
        <Router>
         <TopBar/>
          <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/register">{user ? <Home/>:<Register/>}</Route>
          <Route path="/login">{user ? <Home/>:<Login/>}</Route>
          <Route path="/settings">{user ? <Settings/>:<Register/>}</Route>
          <Route path="/write">{user ? <Write/>:<Register/>}</Route>
          <Route path="/post/:postId"><Single/></Route>
          </Switch>
        </Router>
    );
}
export default App;