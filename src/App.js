import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchField: '',
		};
	}
	onSearch = (event) => {
		this.setState({ searchField: event.target.value });
	};
	render() {
		const filteredRobots = this.state.robots.filter((robots) => {
			return robots.name
				.toLowerCase()
				.includes(this.state.searchField.toLowerCase());
		});
		return (
			<div className='tc'>
				<h1 className='f1'>HireBot</h1>
				<SearchBox searchChange={this.onSearch} />
				<CardList robots={filteredRobots} />
			</div>
		);
	}
}

export default App;
