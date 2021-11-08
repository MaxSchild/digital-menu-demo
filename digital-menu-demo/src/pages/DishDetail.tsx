import { Paper, Typography, Chip, Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';

import forkAndKnifeIcon from "./fork-and-knife.svg";

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
    return (
        <div>
            <h1>DishDetail</h1>
            <div style={{display: "flex"}}>
                <Typography>
                    Some descriptive Text
                </Typography>
                <Chip label="2,50€"/>

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