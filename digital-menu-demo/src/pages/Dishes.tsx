import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import DishesItem from '../components/DishesItem';


import { RootState } from '../store/store'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Dishes = () => {
    let urlParams = useParams();
    const menuId = Number(urlParams.menuid)
    const menu = useSelector((state: RootState) => state?.menu[menuId]);
    return (
        <Paper>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {menu.dishes?.map((item) => {
                    return (
                        <Link to={"/dish-detail/" + menuId + "/" + item.id}>
                            <DishesItem item={item} />
                        </Link>

                    );
                })}

            </List>
        </Paper>
    );
};

export default Dishes;