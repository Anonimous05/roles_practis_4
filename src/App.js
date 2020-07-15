import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Header from "./Component/Hedaer/Header";
import './App.css';
import Main from "./Container/Main/Main";
import AddPost from "./Container/AddPost/AddPost";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/addNewPost" component={AddPost}/>
      </Switch>
    </div>
  );
}

export default App;
