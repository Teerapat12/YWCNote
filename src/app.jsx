import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.scss';
import React from 'react';
import { Router, Route, Link, browserHistory,hashHistory,IndexRoute,IndexRedirect } from 'react-router'
import Match from './component/Match';
import NoMatch from './component/NoMatch';
import Landing from './component/landing/Landing';
import DefaultTemplate from './DefaultTemplate';
import NotePage from './component/note/NotePage.js';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';




var store = createStore(reducers)

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={hashHistory}>
					<Route path="/" component={DefaultTemplate}>
						{/*<IndexRedirect to="/note" />*/}
						<Route path="note/:id" component={NotePage}/>
						<Route path="note" component={NotePage}/>
						<Route path="nomatch" component={NoMatch}/>
						{/*<Route path="/user/:userId" component={NoMatch}/>*/}
						<Route path="*" component={NoMatch}/>
					</Route>
				</Router>
			</Provider>

		)
	}
}
