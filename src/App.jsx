import React, { Component } from 'react';
import MusicTable from "./components/MusicTable";
import Axios from 'axios';

import './App.css';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
}

async componentDidMount() {
    await axios.get('http://www.devcodecampmusiclibrary.com/')
}