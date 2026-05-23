
import SearchResults from "./SearchResults";
import {useState} from 'react'

function App() {
  const [searchInput, setSearchInput] = useState("");
  const tracks = [
    {
      id: 1,
      name: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours"
    },
    {
      id: 2,
      name: "Shape of You",
      artist: "Ed Sheeran",
      album: "Divide"
    },
    {
      id: 3,
      name: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia"
    }
 ];

  return (
    <>
    <SearchResults tracks = {tracks} searchInput={searchInput} />
    <button>Save to Spotify</button>
    <input type="text"
     value={searchInput}
     onChange={(e) => setSearchInput(e.target.value)}
     ></input>
    <button>Search</button>

    </>
  )
}

export default App
