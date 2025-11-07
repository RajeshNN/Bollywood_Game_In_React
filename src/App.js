import { useEffect, useState } from 'react';
import './App.css';
import BollyGame from './BollyGame';


function App() {
  const [movie, setMovie] = useState("ghoe gnir");
  useEffect(() => {
    // fetch("http://127.0.0.1:8000/get_movie/")
    fetch('/movies.json')
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
      let x = Math.floor(Math.random() * (Object.keys(data.movie_names).length - 1));
      setMovie(data.movie_names[x]);
    })
    .catch((error) => {
      console.log(error.message);
    });
  }, []);
  //console.log(movie);

  return (
    <div className="App">
      <BollyGame title = {movie}/>
    </div>
  );
}

export default App;
