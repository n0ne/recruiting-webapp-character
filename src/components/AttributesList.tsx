import styled from "styled-components";
import Attribute from "./Attribute";
import { ATTRIBUTE_LIST } from "../consts";

const Container = styled.div`
  border: 1px solid grey;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  width: 100%;
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

function AttributesList({ id }: { id: number }) {
  return (
    <Container>
      <Title>Attributes</Title>
      {ATTRIBUTE_LIST.map((attribute) => (
        <Attribute key={attribute} id={id} name={attribute} />
      ))}
    </Container>
  );
}

export default AttributesList;

