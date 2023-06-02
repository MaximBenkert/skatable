import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';


export default function Header() {

    return(
        <div>
            <AppBar position="static" sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: "center", bgcolor: "#000000", height: "10vh" }}>
                <Toolbar>
                    <Typography variant="h3" fontWeight="bold" fontFamily="Impact" color="#6699CC">Skatable</Typography>
                </Toolbar>
            </AppBar>


        </div>

    )

}
