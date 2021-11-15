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
      editedSong: {},
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

  // async getSongById() {
  //   await axios
  //     .get("http://localhost:8080/api/songs/:id")
  //     .then((res) => {
  //       console.log(res);
  //       const selectedSong = res.data;
  //       this.setState({ selectedSong });
  //     });
  // }

  postNewSong =async (song) =>  {
     await axios
      .post("http://localhost:8080/api/songs", song)
      .then((res) => {
        console.log(res);
        const song = res.data;
        this.setState({ addedSong: song });
      });
      this.getAllSongs();
  }

  // editSong =async (updatedSong) =>  {
  //    await axios
  //     .put("http://localhost:8080/api/songs/:id", updatedSong)
  //     .then((res) => {
  //       console.log(res);
  //       const updatedSong = res.data;
  //       this.setState({ editedSong: updatedSong });
  //     });
  //     this.getAllSongs();
  // }

  // deleteSong =async () =>  {
  //    await axios
  //     .delete("http://localhost:8080/api/songs/:id", updatedList)
  //     .then((res) => {
  //       console.log(res);
  //       const updatedList = res.data;
  //       this.setState({ newList: updatedList });
  //     });
  //     this.getAllSongs(); 
  // }





  componentDidUpdate(prevState) {
    if(this.state.addedSong !== prevState.addedSong || this.state.editedSong !== prevState.editedSong){
      this.getAllSongs();
    }
  }

  render() {
    return (
      <div>
        <nav class="nav">
          <a class="nav-link" href="#">HOME</a>
          <a class="nav-link" href="#">NEWS</a>
          <a class="nav-link" href="https://www.google.com/">BROWSE</a>
          <a class="nav-link" href="#">CONTACT</a>
        </nav>
        <div className="search-layout">
          <SearchBar ui={this.state.ui} handleChange={this.handleChange} />
        </div>
        <div>
          <div className="form-style">
            <AddMusicForm postNewSong = {this.postNewSong}/>
          </div>
          <div className="table-format grid">
          <MusicTable music={this.state.music} ui={this.state.ui} />
          </div>
        </div>
       
      </div>
    );
  }
}

export default App;
