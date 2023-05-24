import {NavLink} from "react-router-dom";
import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import LanguageIcon from '@mui/icons-material/Language';
import SkateboardingOutlinedIcon from '@mui/icons-material/SkateboardingOutlined';

export default function Navigation() {


    return (
        <div>
            <Paper sx={{position: 'fixed', bottom: '0.0rem'}}>
                <BottomNavigation sx={{width: '100vw', bgcolor: "#6699CC"}}>
                    <NavLink to="/">
                        <BottomNavigationAction
                            label="spots"
                            value="/"
                            icon={<LanguageIcon/>}
                        />
                    </NavLink>
                    <NavLink to="/add">
                        <BottomNavigationAction
                            label="add"
                            value="/add"
                            icon={<AddIcon/>}
                        />
                    </NavLink>
                    <NavLink to="/gallery">
                        <BottomNavigationAction
                            label="gallery"
                            value="/gallery"
                            icon={<SkateboardingOutlinedIcon/>}
                        />
                    </NavLink>
                </BottomNavigation>
            </Paper>
        </div>
    )
}