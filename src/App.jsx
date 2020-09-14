import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Home from './pages/home/Home';
import Tutorials from './pages/tutorials/Tutorials';
import './App.scss';

const App = () => {

	return ( 
	<div className="App">
		<Router>
			<Switch>
				<Route path="/tutorials">
					<Tutorials />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	</div>
	)
}

export default App;
