import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { saveCharacters } from "../store/actions";


function SaveCharacters() {

  const dispatch: AppDispatch = useDispatch();

  const save = () => {
    dispatch(saveCharacters())
  }

  return (
    <div>
      <button onClick={save}>Save Characters</button>
    </div>
  );
}

export default SaveCharacters;