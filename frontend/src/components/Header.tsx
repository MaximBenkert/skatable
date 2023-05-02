import {BottomNavigation, BottomNavigationAction, Paper, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";

export default function Header() {

    return(<div>


    <Paper sx={{position: 'fixed', top: '0.1rem'}}>

        <BottomNavigation sx={{width: '100vw', bgcolor: "#228B22"}}>


            <NavLink to="/spots">
                <BottomNavigationAction
                    label="spots"
                    value="/spots"
                    icon={<HomeIcon/>}
                />
            </NavLink>
            <NavLink to="/add">
                <BottomNavigationAction
                    label="add"
                    value="/add"
                    icon={<AddIcon/>}
                />
            </NavLink>


        </BottomNavigation>

    </Paper>
            <Typography variant="h1" component="h1" sx={{fontSize: "3rem"}}>

                <h2>Skatable</h2>
            </Typography>

        </div>

    )

}
