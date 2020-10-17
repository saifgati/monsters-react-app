import React, {Component} from 'react';
import './App.css';

// eslint-disable-next-line no-unused-vars
import {CardList} from "./components/card-list/card-list.component";
import { SearchBox} from "./components/search-box/search-box.component";

class App extends Component{
    // eslint-disable-next-line react/require-render-return
    constructor() {
        super();
        this.state = {
            monsters : [ ],
            searchField: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}))
    }

    render() {
        const { monsters, searchField }=this.state;
        const  filterMonsters = monsters.filter(monster =>
          monster.name.toLowerCase().includes(searchField.toLowerCase()))
            return (
                <div className="App">

                    <SearchBox
                        placeholder='search monsters'
                        handleChange = {e => this.setState({searchField: e.target.value},)}
                    />
                    <br/>
                    <CardList monsters={filterMonsters} />
                </div>
            );

    }

}

export default App;
