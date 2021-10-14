import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";

export const FooterStyled = styled("footer")`
  color: ${({ theme }) => theme.palette.primary.contrastText};
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: ${({ theme }) => theme.spacing(3.5)} 0;
  margin-top: auto;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  
  ${({theme}) => theme.breakpoints.down("md")}{
      gap: ${({theme}) => theme.spacing(5)};
  }
`;

export const FooterTitle = styled((props) => (
  <Typography component={"h2"} variant={"body1"} {...props} />
))`
  font-weight: bold;
`;

export const AppList = styled("ul")`
  display: flex;
  list-style-type: none;
  padding: 0;
  gap: ${({ theme }) => theme.spacing(3)};

  img {
    width: 122px;
  }
`;
