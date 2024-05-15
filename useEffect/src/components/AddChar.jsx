import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddChar = ({ chars, setChars }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  //use navigate is a hook that navigates us after we add our new character
  const nav = useNavigate();

  //this is the function that is called on submit of the form
  const handleAddChar = (event) => {
    event.preventDefault();
    const ourNewCharacter = {
      name,
      image,
      id: chars.length + 1,
    };
    console.log("character added", ourNewCharacter);
    //this is where I actually add the character to the array
    setChars([ourNewCharacter, ...chars]);
    nav("/");
  };
  return (
    <form onSubmit={handleAddChar}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </label>
      <label>
        Image:
        <input
          type="text"
          value={image}
          onChange={(event) => {
            setImage(event.target.value);
          }}
        />
      </label>
      <button>Create</button>
    </form>
  );
};
