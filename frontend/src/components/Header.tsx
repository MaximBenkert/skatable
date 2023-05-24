import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';


export default function Header() {

    return(
        <div>


            <AppBar position="static" sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', bgcolor: "#000000" }}>
                <Toolbar>
                    <Typography variant="h3" fontWeight="bold" fontFamily="Arial" color="#6699CC">Skatable</Typography>
                </Toolbar>
            </AppBar>


        </div>

    )

}
