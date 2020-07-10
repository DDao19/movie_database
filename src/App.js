import React, { useState } from 'react';
import axios from 'axios'

import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'


const App = () => {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  const APIURL = "http://www.omdbapi.com/?apikey=1f82700e"

  const search = (e) => {
    if (e.key === "Enter") {
      axios.get(APIURL + "&s=" + state.s)
      .then(({ data }) => {
        let results = data.Search
    
        setState(prevState => {
          return { ...prevState, results: results }
        })
      })
    }
  }

  const handleInput = (e) => {
    let s = e.target.value
    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openPopup = id => {
    console.log(id);
    axios.get(APIURL + "&i=" + id).then(({ data }) => {
      let result = data
      console.log(result)

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="App">
      <video playsInline autoPlay='autoplay' muted={true} loop={true} id="bg-video">
        <source src="https://aegwebprod.blob.core.windows.net/content/video/multiverse/multiverse.mp4" type="video/mp4" />
      </video>

      <header>
        <h1>Movie Search</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search}/>
        <Results results={state.results} openPopup={openPopup} />

        {
          (typeof state.selected.Title != "undefined") 
          ? <Popup selected={state.selected} closePopup={closePopup} /> 
          : false
        }
      </main>
    </div>
  );
}

export default App;
