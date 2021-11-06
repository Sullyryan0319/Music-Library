import React, { Component } from 'react';
import MusicTable from "./components/MusicTable";
import axios from 'axios';
import SearchBar from './components/SearchBar';

import './App.css';


class App extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        
    
        
        this.state = {
            music: [],
            ui: ''
            
        };
    }
    
    handleChange(e) {
        this.setState({ui: e.target.value});
    }

    async componentDidMount() {
        await axios.get("http://www.devcodecampmusiclibrary.com/api/music")
        .then((res) => {
            console.log(res)
            const music = res.data;
            this.setState({music});
        });
    }

        componentDidUpdate() {}

render() {
    return(
        <div>
            <SearchBar ui={this.state.ui} handleChange={this.handleChange}/>
            <MusicTable music={this.state.music} ui={this.state.ui} />
        </div>
        
    )
}

}

export default App; 