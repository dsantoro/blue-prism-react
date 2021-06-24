import React, { useState, useContext } from "react";
import Switch from "react-switch";
import styled from "styled-components";
import { AppStateContext } from "../../context/App";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

import { Container } from "../Container";
import { HeaderArea, InfoArea } from "./styles";
import BPLogo from "../../assets/logo-blue.svg";

const IconContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 22px;
  width: 26px;
  color: white;
`;

const Sun = () => {
  return (
    <IconContainer>
      <FaSun />
    </IconContainer>
  );
};

const Moon = () => {
  return (
    <IconContainer>
      <FaMoon />
    </IconContainer>
  );
};

const Header = () => {
  const [checked, setChecked] = useState(false);
  const [theme, setTheme] = useState("dark");
  const { changeAppState } = useContext(AppStateContext);

  return (
    <HeaderArea>
      <Container>
        <InfoArea>
          <img src={BPLogo} alt="Blue Prism" />
          <Switch
            width={46}
            height={22}
            onChange={() => {
              setChecked(!checked);
              setTheme(theme === "light" ? "dark" : "light");
              changeAppState({ theme });
            }}
            checked={checked}
            checkedIcon={<Sun />}
            uncheckedIcon={<Moon />}
          />
        </InfoArea>
      </Container>
    </HeaderArea>
  );
};

export default Header;
