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
        await axios.get("http://www.devcodecampmusiclibrary.com/")
        .then((res) => {
            console.log(res)
            const music = res.data;
            this.setState({music});
        });
    }

componentDidUpdate() {}

}

export default App;