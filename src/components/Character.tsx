import styled from "styled-components";
import AttributesList from "./AttributesList";
import ClassInfo from "./ClassInfo";
import ClassList from "./ClassList";
import SkillsList from "./SkillsList";

const Container = styled.div`
  border: 1px solid grey;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin-bottom: 10px;
`;

function Character({ id }: { id: number }) {
  return (
    <Container>
      <Title>Character: {id}</Title>
      <FlexWrapper>
        <AttributesList id={id} />
        <ClassList id={id} />
        <ClassInfo id={id} />
        <SkillsList id={id} />
      </FlexWrapper>
    </Container>
  );
}

export default Character;

