import { getSkillList } from "../consts";
import Skill from "./Skill";
import TotalSkills from "./TotalSkills";
import styled from "styled-components";

const SkillsContainer = styled.div`
  border: 1px solid grey;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  width: 100%;
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

function SkillsList({ id }: { id: number }) {
  const skills = getSkillList();

  return (
    <SkillsContainer>
      <Title>Skills</Title>
      <TotalSkills id={id} />
      {skills.map((skill) => (
        <Skill key={skill} id={id} name={skill} />
      ))}
    </SkillsContainer>
  );
}

export default SkillsList;
