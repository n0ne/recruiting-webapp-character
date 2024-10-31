
import { useSelector } from "react-redux";
import Character from "./Character";
import { selectAllCharacterIds } from "../store/selectors";


function Characters() {

  const characterIds: string[] = useSelector(selectAllCharacterIds);

  return (
    <div>
      {characterIds.map((id) => (
        <Character key={id} id={parseInt(id)} />
      ))}
    </div>
  );
}

export default Characters;
