import styled from "styled-components";

export const Container = styled.main`
  padding-bottom: 100px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-bottom: 30px;
  }
`;
