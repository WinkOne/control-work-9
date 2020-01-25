import React from 'react';

import './App.css';
import {Route, Switch} from "react-router";
import Layout from "./components/Layout/Layout";
import Main from "./containers/Main/Main";
import New from "./containers/New/New";
import Edit from "./containers/Contact/Edit";

function App() {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/new-" component={New}/>
                    <Route path="/edit/:id" component={Edit}/>
                    <Route render={() => <h1>Not found</h1>}/>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
