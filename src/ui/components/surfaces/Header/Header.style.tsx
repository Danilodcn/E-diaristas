import { styled } from "@mui/material/styles";
import { AppBar } from "@mui/material";

export const HeaderAppBar = styled(AppBar)`

    position: sticky;
    background-color: ${({theme}) => theme.palette.background.paper};
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);
    
    ${({theme}) => theme.breakpoints.down("md")}{
        .MuiToolbar-root{
            display: flex;
            justify-content: center;
            
        }
    }
    
    
    ${({theme}) => theme.breakpoints.up("md")}{
        .MuiToolbar-root{
            height: ${(props) => props.theme.spacing(13)};
            
        }
    }
    
    `

export const HeaderLogo = styled('img')`

    height: ${(props) => props.theme.spacing(6)};

    ${({theme}) => theme.breakpoints.down("md")}{
        height: ${(props) => props.theme.spacing(4.5)};
    }

`