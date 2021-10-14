import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.style";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant={"body2"} sx={{mt: 2}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            reprehenderit vel neque alias delectus maxime corrupti culpa
            molestiae, eligendi, doloribus a. Voluptatum
          </Typography>
        </Box>
        <Box>
          <FooterTitle>Baixo nossos Aplicativos</FooterTitle>
          <AppList>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src="img/logos/app-store.png" alt={"AppStore"} />
              </a>
            </li>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src="img/logos/google-play.png" alt={"PlayStore"} />
              </a>
            </li>
          </AppList>
        </Box>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
