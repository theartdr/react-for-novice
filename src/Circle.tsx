import styled from "styled-components";

const Container = styled.div<CircleProps>`
height: 200px;
width: 200px;
background-color: ${(props) => props.bgColor};
border-radius: 100px;
border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle ({ bgColor, borderColor, text="default text" }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
};

export default Circle;