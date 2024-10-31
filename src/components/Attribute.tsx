import { useDispatch, useSelector } from "react-redux";
import { selectCharacterAttribute } from "../store/selectors";
import { AppDispatch } from "../store/store";
import { incrementAttributeValue, decrementAttributeValue } from '../store/slice';
import styled from "styled-components";


const Container = styled.div`
  display: flex;
`;

const TextSection = styled.div`
  flex: 6;
  text-align: end;
  padding-right: 3px;
`;

const ButtonSection = styled.div`
  flex: 4;
  text-align: start;
  padding-left: 3px;
`;

function Attribute({ id, name }: { id: number; name: string }) {
  const dispatch: AppDispatch = useDispatch();
  const attribute = useSelector(selectCharacterAttribute(id, name));

  const incrementAttribute = () => {
    dispatch(incrementAttributeValue({ id, name }));
  };
  const decrementAttribute = () => {
    dispatch(decrementAttributeValue({ id, name }));
  };

  return (
    <Container>
      <TextSection>
        {name}: {attribute} (Modifier: {Math.floor((attribute - 10) / 2)})
      </TextSection>
      <ButtonSection>
        <button onClick={incrementAttribute}>+</button>
        <button onClick={decrementAttribute}>-</button>
      </ButtonSection>
    </Container>
  );
}
export default Attribute;