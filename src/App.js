import React from 'react';
import './App.css';
import Homepage from './Container/Homepage/Homepage'
import Signup from './Container/Signup/signup'
import { BrowserRouter,Switch, Route, Link } from "react-router-dom";
export default()=>{
  return (
    <>
          <BrowserRouter>
                <Switch>
                  <Route path={"/"} exact component={Homepage}/>
                  <Route path={"/signup"} exact component={Signup}/>
                </Switch>
          </BrowserRouter>

    </>
  );
}

