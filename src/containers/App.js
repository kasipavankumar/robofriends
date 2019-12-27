import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Footer from '../components/Footer';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const { robots, searchField } = this.state;
        const filterRobots = robots.filter(robot => {
            return(robot.name.toLowerCase().includes(searchField.toLowerCase()));
        });

        if(!robots.length) {
            return(
                <h1 className="tc load">Loading...</h1>
            );
        } else {
            return(
                <div className="tc">
                    <h1 className='main-title'>Robofriends</h1>
                    <SearchBox searchChange = { this.onSearchChange }/>
                    <ErrorBoundry>
                        <CardList robots = { filterRobots }/>
                    </ErrorBoundry>
                    <Footer />
                </div>
            );
        }
    }
}

export default App;