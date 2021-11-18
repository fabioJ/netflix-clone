import { useEffect } from 'react';
import './App.css';
import TMDB from "./Tmdb.js"

function App() {

  useEffect(() => {
    const loadAll = async () => {
      let list = await TMDB.getHomeList();
      console.log(list);
    }

    loadAll();
  });

  return (
    <div className="App">
      <h1>Ola</h1>
    </div>
  );
}

export default App;
