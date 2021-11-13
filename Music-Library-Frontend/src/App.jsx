import React, { Component } from "react";
import MusicTable from "./components/MusicTable";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import "./App.css";
import AddMusicForm from "./components/AddMusic";

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      music: [],
      ui: "",
      addedSong: {},
    };
  }

  handleChange(e) {
    this.setState({ ui: e.target.value });
  }

  componentDidMount(){this.getAllSongs()}

  async getAllSongs() {
    await axios
      .get("http://localhost:8080/api/songs")
      .then((res) => {
        console.log(res);
        const music = res.data;
        this.setState({ music });
      });
  }

  async postNewSong() {
    await axios
      .post("http://localhost:8080/api/songs")
      .then((res) => {
        console.log(res);
        const song = res.data;
        this.setState({ addedSong: song });
      });
  }



  

  componentDidUpdate(prevState) {
    if(this.state.addedSong !== prevState.addedSong){
      this.getAllSongs();
    }
  }

  render() {
    return (
      <div>
        <nav class="nav">
          <a class="nav-link" href="#">HOME</a>
          <a class="nav-link" href="#">NEWS</a>
          <a class="nav-link" href="#">BROWSE</a>
          <a class="nav-link" href="#">CONTACT</a>
        </nav>
        <div className="search-layout">
          <SearchBar ui={this.state.ui} handleChange={this.handleChange} />
        </div>
        <div className="table-format grid">
          <MusicTable music={this.state.music} ui={this.state.ui} />
        </div>
        <div>
          <AddMusicForm postNewSong = {this.postNewSong}/>
        </div>
      </div>
    );
  }
}

export default App;
