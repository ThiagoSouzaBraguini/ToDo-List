import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  outline: none;
  
}
`;

export const Container = styled.div`
  width: 100%;
  min-height: 900px;
  background: #19376d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 25px;

  .title {
    font-weight: 600;
    font-size: 68px;
    line-height: 72px;
    margin-top: 25px;
    color: #ffffff;
    font-family: "Dancing Script", cursive;
  }
`;

export const Input = styled.input`
  padding: 8px 24px;
  width: 500px;
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: none;

  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 25px;
  color: #19376d;

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 25px;
    color: #19376d;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  flex-direction: ${(props) => props.justify || "center"};
  flex-direction: ${(props) => props.align || "center"};
  gap: ${(props) => props.gap || "15px"};
`;

export const Spacer = styled.div`
  width: 100%;
  margin: ${(props) => props.margin || "20px"};
`;

export const Button = styled.button`
  width: 110px;
  height: 50px;
  background: #ffffff;
  border-radius: 10px;
  border: none;

  font-style: normal;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #19376d;
  line-height: 24px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;

export const Item = styled.li`
  padding: 13px 10px 13px 24px;
  width: 625px;
  min-height: 50px;
  background: ${(props) => (props.checked ? "#77C94F" : "#ffffff")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  p {
    font-weight: 600;
    font-size: 35px;
    line-height: 24px;
    font-family: "Dancing Script", cursive;
    text-decoration-line: ${(props) => (props.checked ? "line-through" : "")};
    color: ${(props) => (props.checked ? "#ffffff" : "#19376d")};

    width: 80%;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
  }

  i {
    font-size: 32px;
    color: ${(props) => (props.checked ? "#ffffff" : "#19376d")};
  }
`;
