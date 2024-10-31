import { useSelector } from "react-redux";
import { selectCharacterAttribute } from "../store/selectors";
import styled from "styled-components";

const SkillsContainer = styled.div`
  margin-bottom: 10px;
`;

function TotalSkills({ id }: { id: number }) {
  const attribute = useSelector(selectCharacterAttribute(id, 'Intelligence'));
  const modifierValue = Math.floor((attribute - 10) / 2);
  const maxSkillsPoints = 10 + (4 * modifierValue);

  return (
    <SkillsContainer>
      Total skill points available: {maxSkillsPoints}
    </SkillsContainer>
  );
}

export default TotalSkills;
