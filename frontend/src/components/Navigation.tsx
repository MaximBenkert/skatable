import {NavLink} from "react-router-dom";
import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';

export default function Navigation() {


    return (
        <div>


            <Paper sx={{position: 'fixed', bottom: '0.1rem'}}>
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


        </div>
    )
}