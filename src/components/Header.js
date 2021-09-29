import styled from 'styled-components';
const Container = styled.div`
  background: transparent;
  padding: .5em 1em;
  position: fixed;
  top: 0;
  width: 100%;  
  z-index: 99;
`;

const Logo = styled.img`
  boder-radius: .25em;
  height: 35px;
  width: 35px;
`;

const User = styled.img`
boder-radius: .25em;
height: 25px;
width: 25px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Header = () => {
  return (
      <Container className="header">
        <Top>
          <Logo src="media/netflix-big.png" />
          <User src="media/color-user.png" />
        </Top>
      </Container>

  )
}

