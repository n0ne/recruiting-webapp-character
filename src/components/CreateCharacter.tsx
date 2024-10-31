import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { createCharacter } from "../store/slice";


function CreateCharacter() {

  const dispatch: AppDispatch = useDispatch();

  const create = () => {
    dispatch(createCharacter())
  }

  return (
    <div>
      <button onClick={create}>Create Character</button>
    </div>
  );
}

export default CreateCharacter;