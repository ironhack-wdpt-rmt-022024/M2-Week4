import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CharacterDetail = () => {
  const [singleChar, setSingleChar] = useState({});
  const { characterId } = useParams();

  //this is a useEffect that watches the characterId and if changes, then we ask the API for the updated information
  useEffect(() => {
    console.log("this is the updating useEffect");
    const getSingleChar = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${characterId}`
        );
        const parsed = await response.json();
        console.log("parsed in the single page", parsed);
        setSingleChar(parsed);
      } catch (err) {
        console.log("there was an error with single char", err);
      }
    };

    getSingleChar();
  }, [characterId]);
  return (
    <div>
      <img src={singleChar.image} alt={singleChar.name} />
      <h2>Name: {singleChar.name}</h2>
    </div>
  );
};
