import styled from "styled-components";

const Container = styled.main`
  padding-bottom: 100px;
  @media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.laptop} {
    padding-bottom: 30px;
  }
`;

const PhotoEvent = () => {
  return <Container>PhotoEvent</Container>;
};

export default PhotoEvent;
