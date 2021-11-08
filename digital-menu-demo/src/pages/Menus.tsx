import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import MenusList from '../components/MenusList';

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

const Menus = () => {
    const classes = useStyles();
    return (
        <div>

            <Typography color="#ff0000">
                Hallo Helmut
            </Typography>

            <Paper variant="outlined" className={classes.paper}>
                <img alt="fork and knife icon" src={forkAndKnifeIcon} className={classes.img} />
                {/**/}
            </Paper>

            <MenusList />
        </div>

    );
};

export default Menus;