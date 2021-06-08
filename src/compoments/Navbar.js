import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import react from "react";


function Navbar () {

    return(
        <AppBar position="static">
            <Toolbar>
                <IconButton>
                    <MenuIcon />
                </IconButton> 
                <Typography variant="h6">Live score</Typography>
            </Toolbar>
        </AppBar>

    );


}

export default Navbar;