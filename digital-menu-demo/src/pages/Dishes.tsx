import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import DishesItem from '../components/DishesItem';

import DUMMY_DATA from "../data/foodData";

const Dishes = () => {
    console.log(DUMMY_DATA[1]);
    return (
        <Paper>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {DUMMY_DATA[0].dishes.map((item) => {
                    return (
                        <DishesItem item={item}/>
                    );
                })}

            </List>
        </Paper>
    );
};

export default Dishes;