import './App.css';
import Header from '../src/components/header/header.component';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import HomePage from '../src/pages/homepage/home-page.component';
import PostDetail from './pages/post-detail-page/post-detail.component';

const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/posts" component={PostDetail} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
