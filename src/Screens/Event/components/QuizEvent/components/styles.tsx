import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  margin: 0;
  margin-top: -25px;
  padding-bottom: 20px;
  min-height: unset;

  button {
    background: transparent;
  }
  img {
    display: block;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-bottom: 0;
  }
`;

export const Inner = styled.div`
  position: relative;
  width: 92%;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 60px;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    margin: 60px auto;
    width: 90%;
    input {
      width: 100%;
    }
  }
`;
export const CancelInner = styled.div`
  position: relative;
  width: 92%;
  margin: 0 auto;
  padding-top: 70px;
  padding-bottom: 30px;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-top: 0;
    margin: 60px auto 0;
    width: 90%;
    input {
      width: 100%;
    }
    padding-bottom: 20px;
  }
`;
export const CancelTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 55px;
  font-size: 72px;
  line-height: 1.4em;
  font-family: ${({ theme: { accentFont } }) => accentFont};
  img {
    width: 85%;
    max-width: 550px;
    margin: 0 auto;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    margin-bottom: 30px;
  }
`;
export const CancelDescription = styled.div`
  margin-bottom: 55px;
  font-size: 30px;
  color: #777;
  line-height: 1.2em;
  text-align: center;

  img {
    width: 80%;
    max-width: 735px;
    margin: 0 auto;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    margin-bottom: 30px;
    font-size: 12px;
    line-height: 1.4em;
    img {
      width: 100%;
    }
  }
`;

export const RequestHeader = styled.div`
  img {
    width: 100%;
  }
`;
export const RequestIcon = styled.i<{ top?: string }>`
  position: absolute;
  display: block;
  left: 50%;
  transform: translateX(-50%);
  top: -35px;
  img {
    width: 60%;
    margin: 0 auto;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    top: -62px;
    img {
      width: 48%;
      margin: 0 auto;
    }
  }
`;

export const CancelRequestIcon = styled.i<{ top?: string }>`
  position: absolute;
  display: block;
  left: 50%;
  transform: translateX(-50%);
  top: -35px;
  img {
    width: 60%;
    margin: 0 auto;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    top: -80px;
    img {
      width: 48%;
      margin: 0 auto;
    }
  }
`;

export const Form = styled.form`
  position: relative;
  width: 92%;
  margin: 0 auto;
  padding-top: 20px;
  h4 {
    font-family: ${({ theme: { accentFont } }) => accentFont};
    width: 40%;
    max-width: 210px;
    font-size: 24px;
  }

  input {
    box-sizing: border-box;
    margin-bottom: 5px;

    &::placeholder {
      /* color: ${({ theme: { gray } }) => gray}; */
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
    padding-top: 0;
    margin: 40px auto;
    width: 90%;
    input {
      width: 100%;
    }
    h4 {
      font-family: ${({ theme: { accentFont } }) => accentFont};
      width: 100%;
      max-width: 210px;
      font-size: 26px;
    }
  }
`;

export const NoteWrap = styled.div`
  margin: 35px auto 45px;
  img {
    width: 95%;
    max-width: 820px;
    margin: 0 auto;
  }
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    margin: 35px auto;
    img {
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

export const RequestButton = styled.input`
  color: #fff;
  background-color: ${({ theme: { headerDefault } }) => headerDefault};
  border: none;
  max-width: 438px;
  height: 50px;
  font-size: 24px !important;
  padding: 10px !important;

  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    height: 50px;
    font-size: 24px !important;
    padding: 10px !important;
  }
`;
