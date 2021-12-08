import styled from "styled-components";

export const Container = styled.main`
  button {
    background: transparent;
  }
`;

export const Form = styled.form`
  width: 60%;
  max-width: 750px;
  margin: 120px auto;

  h4 {
    font-family: ${({ theme: { accentFont } }) => accentFont};
  }

  input {
    box-sizing: border-box;
    margin-bottom: 5px;
    s &::placeholder {
      color: ${({ theme: { gray } }) => gray};
    }
  }

  span {
    display: block;
    margin: 10px auto;
  }

  p {
    color: #f00;
  }

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    margin: 60px auto;
    width: 90%;
    input {
      width: 100%;
    }
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    display: block;
    cursor: pointer;
    width: 48%;
    padding: 20px;
    font-family: ${({ theme: { accentFont } }) => accentFont};
    font-size: 1.6em;
    border-radius: 15px;
  }
`;

export const SuccessButton = styled.input`
  color: ${({ theme: { headerDefault } }) => headerDefault};
  border: 2px solid ${({ theme: { headerDefault } }) => headerDefault};
  background-color: ${({ theme: { tableHeader } }) => tableHeader};
`;

export const DeleteButton = styled.input`
  color: ${({ theme: { headerActive } }) => headerActive};
  border: 2px solid ${({ theme: { headerActive } }) => headerActive};
  background-color: rgba(255, 50, 50, 0.2);
`;
