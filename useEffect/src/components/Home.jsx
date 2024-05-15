import { Link } from "react-router-dom";

export const Home = ({ allChars }) => {
  console.log("in the Home component", allChars);
  return (
    <div>
      {allChars.map((oneChar) => {
        return (
          <Link key={oneChar.id} to={`/details/${oneChar.id}`}>
            <div style={{ border: "1px solid white", margin: "20px" }}>
              <img src={oneChar.image} alt={oneChar.name} />
              <h4>Name: {oneChar.name}</h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
