import { useDispatch, useSelector } from "react-redux";
import { isBarbarian, isBard, isWizard } from "../store/selectors";
import { AppDispatch } from "../store/store";
import { showInfo } from "../store/slice";

function Class({ id, name }: { id: number, name: string }) {

  const dispatch: AppDispatch = useDispatch();

  const characterType = {
    'Barbarian': isBarbarian,
    'Bard': isBard,
    'Wizard': isWizard,
  }

  const isType = useSelector(characterType[name](id));

  const showClassInfo = () => {
    dispatch(showInfo({ id, name }))
  }

  return (
    <div style={{ color: isType ? "red" : "white", cursor: "pointer" }} onClick={showClassInfo}>
      {name}
    </div>
  );
}

export default Class;