/**
 * Created by Teerapat on 11/21/2016.
 */
import React, { Component } from 'react';
import NavBar from './component/navbar'
import { RouteTransition } from 'react-router-transition';


export default class App extends Component {
	render() {
		return (
			<div>
				<RouteTransition
					pathname={this.props.location.pathname}
					atEnter={{ opacity: 0}}
					atLeave={{ opacity: 0 }}
					atActive={{ opacity: 1}}
				>
				<NavBar />
				{this.props.children}
				</RouteTransition>
			</div>
		);
	}
}
