import { useDispatch, useSelector } from "react-redux";
import { showClassInfo } from "../store/selectors";
import { CLASS_LIST } from "../consts";
import { AppDispatch } from "../store/store";
import { hideInfo } from "../store/slice";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid grey;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  width: 350px;
  position: relative;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 8px;
  top: 5px;
  cursor: pointer;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 2px 5px;
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 10px;
`;

const Attribute = styled.div`
  margin-top: 5px;
`;

function ClassInfo({ id }: { id: number }) {
  const dispatch: AppDispatch = useDispatch();
  const classInfo = useSelector(showClassInfo(id));

  if (!classInfo) return null;

  const hideClassInfo = () => {
    dispatch(hideInfo({ id }));
  };

  const info = Object.entries(CLASS_LIST[classInfo]);

  return (
    <Container>
      <CloseButton onClick={hideClassInfo}>x</CloseButton>
      <Title>
        Class Info: <br />
        {classInfo}
      </Title>
      {info.map(([key, value]: [string, string]) => (
        <Attribute key={key}>
          {key}: {value}
        </Attribute>
      ))}
    </Container>
  );
}

export default ClassInfo;
