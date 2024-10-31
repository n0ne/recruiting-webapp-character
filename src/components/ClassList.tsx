import { CLASS_LIST } from "../consts";
import Class from "./Class";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid grey;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  width: 150px;
`;

const Title = styled.h3`
  margin: 0 0 10px 0;
`;

function ClassList({ id }: { id: number }) {
  const classes = Object.keys(CLASS_LIST);

  return (
    <Container>
      <Title>Classes</Title>
      {classes.map((cl) => (
        <Class key={cl} id={id} name={cl} />
      ))}
    </Container>
  );
}

export default ClassList;
