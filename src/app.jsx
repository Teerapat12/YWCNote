import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.scss';
import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import Match from './component/Match';
import NoMatch from './component/NoMatch';
import DefaultTemplate from './DefaultTemplate';

export default class App extends React.Component {
	render() {
		return (

			<Router history={browserHistory}>
				<Route path="/" component={DefaultTemplate}>
					<Route path="match" component={Match}/>
					<Route path="nomatch" component={NoMatch}>
						<Route path="/user/:userId" component={NoMatch}/>

					</Route>
					<Route path="*" component={NoMatch}/>
				</Route>
			</Router>

		)
	}
}
