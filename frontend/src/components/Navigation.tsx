import { NavLink } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import LanguageIcon from '@mui/icons-material/Language';
import SkateboardingOutlinedIcon from '@mui/icons-material/SkateboardingOutlined';

export default function Navigation() {
    return (
        <div>
            <Paper sx={{ position: 'fixed', bottom: '0.0rem' }}>
                <BottomNavigation sx={{ width: '100vw', bgcolor: "#000000" }}>
                    <NavLink to="/" style={{ textDecoration: 'none' }}>
                        <BottomNavigationAction
                            label="Spots"
                            value="/"
                            icon={<LanguageIcon sx={{ color: "#6699CC" }} />}
                        />
                    </NavLink>
                    <NavLink to="/add" style={{ textDecoration: 'none' }}>
                        <BottomNavigationAction
                            label="Add"
                            value="/add"
                            icon={<AddIcon sx={{ color:"#6699CC" }} />}
                        />
                    </NavLink>
                    <NavLink to="/gallery" style={{ textDecoration: 'none' }}>
                        <BottomNavigationAction
                            label="Gallery"
                            value="/gallery"
                            icon={<SkateboardingOutlinedIcon sx={{ color: "#6699CC" }} />}
                        />
                    </NavLink>
                </BottomNavigation>
            </Paper>
        </div>
    );
}

