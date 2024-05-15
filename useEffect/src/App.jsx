import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { CharacterDetail } from "./components/CharacterDetail";
import { AddChar } from "./components/AddChar";

function App() {
  const [chars, setChars] = useState([]);

  //this is where we put the useEffect
  useEffect(() => {
    console.log("this is the mounting use Effect");
    const fetchChars = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const parsed = await response.json();
        // console.log("here is the parsed data, ", parsed);
        setChars(parsed.results);
      } catch (err) {
        console.log("there was an error", err);
      }
    };
    fetchChars();

    //this would the unmounting phase
    return () => {
      console.log("this is the unmounting of the component");
    };
  }, []);

  return (
    <>
      <Link to="/add-char">Add a Character</Link>
      <h1>Rick and Morty Characters</h1>
      <Routes>
        <Route path="/" element={<Home allChars={chars} />} />
        <Route
          path="/add-char"
          element={<AddChar chars={chars} setChars={setChars} />}
        />
        <Route path="/details/:characterId" element={<CharacterDetail />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
