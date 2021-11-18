import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

import { RootState } from '../store/store'
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from "react-router-dom";



//const MenusList: React.FC<{ menus: [{ id: number, title: string }] }> = (props) => {
const MenusList = () => {
    const menus = useSelector((state: RootState) => state);
    console.log("Menu State:", menus.menu[0].title);
    //Should be menus.map instead of DUMMY_DATA.map

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="secondary mailbox folders">
                <List>
                    {menus.menu.map((item) => {
                        return (
                            <ListItem key={item.id} disablePadding>
                                <ListItemButton>
                                    <Link to={"/dishes/" + item.id} style={{ textDecoration: 'none' }}>
                                        <ListItemText primary={item.title} />
                                    </Link>
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </nav>
        </Box>
    );
}

export default MenusList;