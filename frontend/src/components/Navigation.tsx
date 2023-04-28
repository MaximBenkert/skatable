import {Link, NavLink} from "react-router-dom";

export default function Header(){
    return (
        <div>
            <NavLink to="/spots/add">Add Spot</NavLink>
        </div>
    )
}