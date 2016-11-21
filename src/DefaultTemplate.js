/**
 * Created by Teerapat on 11/21/2016.
 */
import React, { Component } from 'react';
import NavBar from './component/navbar'

export default class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				{this.props.children}
			</div>
		);
	}
}
