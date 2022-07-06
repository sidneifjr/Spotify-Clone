import {
  Route,
  Routes
} from "react-router-dom";

import axios from "axios";

import Home from "./Pages/Home";

import { Header } from "./components/Header"
import { SideMenu } from "./components/SideMenu";
import { Player } from "./components/Player";

import './components/reset.css';
import { Login } from "./Login";

const URL = "https://api.spotify.com";
const secret = "4b164e082f5d4e95880f6d40b253b8c6";
const artistURL = URL + secret + "/artists/1Xyo4u8uXC1ZmMpatF05PJ?si=c1979d40e0984b41";

console.log(URL, artistURL);

axios.get(artistURL)
  .then(response => {
    console.log(response);
  })

  .catch(error => {
    console.log(error);
  })

  .then(() => {
    console.log("Everything worked!...hopefully");
  })

const App = () => {
  return (
    <>
      <Login></Login>

      <SideMenu />

      <Header />

      <Player />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" />
        <Route path="/collection/playlists" />
        <Route path="/collection/tracks" />
      </Routes>
    </>
  )
}

export default App;
