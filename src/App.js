import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";
import {Home} from "./components/Home";
import {About } from "./components/About";
import { Colors } from "./components/Colors";
import { NotFound } from "./components/NotFound";


function App() {
  const colorCodes = ["444", "FF5733", "498", "676"];
  return (
        <Router>
          <div className="App">
              <nav>
                <ul className="nav-links">
                  <li>
                    <NavLink to="/" exact activeStyle={{ fontWeight: "bold", color: "red" }}>Home</NavLink>
                  </li>
                  <li>
                   <NavLink to="/about" activeStyle={{ fontWeight: "bold", color: "red" }}>About</NavLink>
                  </li>
                  <li>
                   <NavLink to="/colors" activeStyle={{ fontWeight: "bold", color: "red" }}>Colors</NavLink>
                  </li>
                {colorCodes.map((code, index) => <NavLink key={index} to= {`/colors/${code}`} >Colors</NavLink>)}
                <NavLink to="/colors" >Colors</NavLink>
                </ul>            
              </nav>
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/colors/:colorCode" component={Colors}></Route>
                <Route path="*" component={NotFound}></Route>

              </Switch>
          </div>
        </Router>
  );
}

export default App;
