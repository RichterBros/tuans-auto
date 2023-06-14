import React from "react";
import { styled } from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  z-index: 200;
  /* background-color: black; */
  position: fixed;
`;

const Container = styled.div`
  width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  border-bottom: 1px solid darkgrey;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
`;

const Logo = styled.div`
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 70px;
  -webkit-text-stroke: 2px #aeaeae;
  font-size: 50px;
  font-weight: 1000;
  font-variation-settings: "wdth" 1000, "wght" 1000, "opsz" 48;
  font-style: italic;
  font-family: "Roboto ", sans-serif;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 10px;
  list-style: none;
  font-size: 24px;
`;
const ListItem = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #434343;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Bold = styled.span`
  font-size: 35px;
  font-weight: 600;
`;
const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo>TUANS AUTOMOTIVE LLC.</Logo>
        </Links>
        <Links>
          <List>
            <ListItem>
              <span className="material-icons">location_on</span>1405 NE
              Killingworth
            </ListItem>
            <ListItem>Portland, OR 97211</ListItem>
          </List>

          <List>
            <ListItem>
              <span className="material-icons">call</span>
              <Bold>503-288-3972</Bold>
            </ListItem>
            <ListItem>
              <span className="material-icons">schedule</span> M-F 8:30am-5:30pm
            </ListItem>
          </List>
        </Links>
        {/* <Icons>
          <Icon src="./img/search.png" />
          <Button>Hire Now</Button>
        </Icons> */}
      </Container>
    </Section>
  );
};

export default Navbar;
