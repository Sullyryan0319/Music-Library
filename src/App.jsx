import React, { Component } from 'react';
import MusicTable from "./components/MusicTable";
import axios from 'axios';

import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            music: [],

        };
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
            <MusicTable music={this.state.music} />
        </div>
    )
}

}

export default App; 