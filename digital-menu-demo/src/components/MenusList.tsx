import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

import DUMMY_DATA from '../data/foodData';


//const MenusList: React.FC<{ menus: [{ id: number, title: string }] }> = (props) => {
const MenusList = () => {
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="secondary mailbox folders">
                <List>
                    {DUMMY_DATA.map((item) => {
                        return (
                            <ListItem key={item.id} disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={item.title} />
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