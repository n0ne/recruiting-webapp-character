import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { SKILL_LIST } from "../consts";
import { selectCharacterAttribute, selectCharacterSkill } from "../store/selectors";
import { decrementSkillValue, incrementSkillValue } from "../store/slice";
import styled from "styled-components";

const SkillContainer = styled.div`
  display: flex;
`;

const SkillName = styled.div`
  flex: 6;
  text-align: end;
  padding-right: 3px;
`;

const SkillControls = styled.div`
  flex: 1;
  display: flex;
  gap: 5px;

  justify-content: center;

  button {
    cursor: pointer;
  }
`;

const SkillModifier = styled.div`
  flex: 6;
  text-align: start;
  padding-left: 3px;
`;

function Skill({ id, name }: { id: number, name: string }) {
  const dispatch: AppDispatch = useDispatch();

  const modifierName = SKILL_LIST.find(skill => skill.name === name)?.attributeModifier;
  const attribute = useSelector(selectCharacterAttribute(id, modifierName));
  const modifierValue = Math.floor((attribute - 10) / 2);

  const skillValue = useSelector(selectCharacterSkill(id, name));
  const total = skillValue + modifierValue;

  const incrementAttribute = () => {
    dispatch(incrementSkillValue({ id, name }));
  };

  const decrementAttribute = () => {
    dispatch(decrementSkillValue({ id, name }));
  };

  return (
    <SkillContainer>
      <SkillName>
        {name} - point: {skillValue}
      </SkillName>
      <SkillControls>
        <button onClick={incrementAttribute}>+</button>
        <button onClick={decrementAttribute}>-</button>
      </SkillControls>
      <SkillModifier>
        {`modifier (${modifierName}): ${modifierValue} total: ${total}`}
      </SkillModifier>
    </SkillContainer>
  );
}

export default Skill;
