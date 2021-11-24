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

import { useEffect, Fragment, useState } from "react";
import { fetchMenusData } from '../store/menuActions';



//const MenusList: React.FC<{ menus: [{ id: number, title: string }] }> = (props) => {
const MenusList = () => {

    const [isInitial, setIsInitial] = useState(true);

    const menus = useSelector((state: RootState) => state);

    //somehow menus.menu has no value! Updating didn't succeed
    console.log("Complete State:", menus)
    //console.log("Menu State:", menus.menu[0].title);
    //Should be menus.map instead of DUMMY_DATA.map

    //Try to get Menu from API request
    const dispatch = useDispatch();
    //const showCart = useSelector((state) => state.ui.cartIsVisible);
    //const notification = useSelector((state) => state.ui.notification);

    useEffect(() => {
        dispatch(fetchMenusData());
        console.log("Sucessfully fetched data!");
        setIsInitial(false);
    }, [dispatch, menus]);

    const show = false;



    /*
    return (
        <Fragment>
            <p>{menus.menu[0].title}</p>
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
        </Fragment>

    );
    */

    if (!isInitial){
        console.log("After fetching data from API", menus);
    }
    return (
        <div>
            {isInitial && <h1>Hallo</h1>}
        </div>


    )
}
//{!isInitial && <p>{menus.menu[0].title}</p>}
export default MenusList;