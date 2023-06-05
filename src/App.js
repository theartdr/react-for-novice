import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;
const Emoji = styled.span`
  font-size: 36px;
`

const Box = styled.div`
  display: flex;
  height: 200px;
  width: 200px;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  background-color: ${(props)=>props.bgColor};
  ${Emoji}:hover {
    font-size: 100px;
  }
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: skyblue;
`;

function App() {
  return (
    <Wrapper as ="header">
      <Title>Hello</Title>
      <Box bgColor="teal">
        <Emoji>🤯</Emoji>
      </Box>
      <Circle bgColor="tomato" />
      <Input />
    </Wrapper>
  );
}

export default App;