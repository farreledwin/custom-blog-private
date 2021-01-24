import './App.css';
import Header from '../src/components/header/header.component';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import HomePage from '../src/pages/home-page.component';

const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
