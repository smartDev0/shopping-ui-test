import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
const TopBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box display='flex' alignItems='center' flexGrow={1}>
                    <Typography variant="h5">
                      SHOPPING LIST
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar;