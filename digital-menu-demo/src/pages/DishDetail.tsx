import { Paper, Typography, Chip, Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';

import forkAndKnifeIcon from "./fork-and-knife.svg";
import { RootState } from '../store/store'
import { useSelector, useDispatch } from 'react-redux';

import { useParams } from 'react-router';




const useStyles = makeStyles({
    paper: {
        textAlign: "center",
        overflow: 'hidden'
    },
    img: {
        //marginLeft: "auto",
        //marginRight: "auto",
        maxWidth: "200px",
        height: "auto"
    }
});

const DishDetail = () => {
    const classes = useStyles();
    let urlParams = useParams();
    const menuId = Number(urlParams.menuid);
    const dishId = Number(urlParams.dishid);
    console.log("menuId:", menuId);
    console.log("dishId:", dishId);
    const menus = useSelector((state: RootState) => state);
    const dish = menus.menu[menuId].dishes[dishId];
    return (
        <div>
            <h1>{dish.title}</h1>
            <div style={{ display: "flex" }}>
                <Typography>
                    {dish.description}
                </Typography>
                <Chip label={dish.price + "€"} />

            </div>
            <Paper variant="outlined" className={classes.paper}>
                <img alt="fork and knife icon" src={forkAndKnifeIcon} className={classes.img} />
                {/**/}
            </Paper>
            <Button variant="contained" fullWidth startIcon={<AddIcon />}> Gericht hinzufügen</Button>
        </div>

    );
};

export default DishDetail;