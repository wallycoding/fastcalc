import styled from "styled-components";
import colors from "../../colors";

export const Container = styled.section`
  display: flex;
  flex: 1;
  background-color: ${colors.primary};
  justify-content: center;
  align-items: center;
`;

export const GameView = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 600px;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
`;

export const CountError = styled.span`
  color: ${colors.white};
  margin: 5px 0;
  font-weight: 600;
  font-size: 1rem;
  font-family: "Roboto";
  padding: 10px;
  border: solid 2px ${colors.red};
  border-radius: 10px;
`;

export const Close = styled.button`
  display: flex;
  flex: 1;
  padding: 10px;
  background: none;
  border-radius: 10px;
  border: solid 2px ${colors.red};
  color: ${colors.white};
  font-weight: 600;
  font-size: 1rem;
  font-family: "Roboto";
  transition: 0.3s;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: ${colors.red};
  }
  margin: 10px;
`;

export const HeadingContent = styled.section`
  padding: 10px;
  border: solid 1px ${colors.green};
  width: 100%;
  text-align: center;
  border-radius: 5px;
`;

export const Timer = styled.span`
  color: ${colors.white};
  font-size: 4rem;
  font-weight: 600;
  font-family: "Roboto";
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

export const QuestionBox = styled.div`
  display: flex;
  border-bottom: solid 1px ${colors.green};
  width: 85%;
  justify-content: center;
`;

export const Question = styled.span`
  color: ${colors.white};
  font-size: 6rem;
  font-weight: 300;
  font-family: "Merriweather";
`;

export const AnswerGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const Answer = styled.button`
  display: flex;
  flex: 1;
  padding: 20px;
  background: none;
  border-radius: 10px;
  border: solid 2px ${colors.green};
  color: ${colors.white};
  font-weight: 600;
  font-size: 1rem;
  font-family: "Roboto";
  transition: 0.3s;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  :active {
    color: ${colors.black};
    background-color: ${colors.green};
  }
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  margin: 10px;
`;
