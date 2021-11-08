import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';

const useStyles = makeStyles({
    listItemText: {
        textAlign: "center"
    }
});

//const propsType = {id: any, }


type propsType = {
    id: number, title: string, price: number,
    description: string, imageLink: string
};


//Kann ich hier nicht propsType uebergeben?
const DishesItem: React.FC<{
    item: {
        id: number, title: string, price: number,
        description: string, imageLink: string
    }

}> = (props) => {

    const classes = useStyles();

    return (

        <div>
            {/*
            key={value}
        secondaryAction={
            <IconButton edge="end" aria-label="comments">
                <CommentIcon />
            </IconButton>
        }}
    */}
            <ListItem disablePadding key={props.item.id}>
                {/*
            role={undefined} onClick={handleToggle(value)}
            */}
                <ListItemButton dense>
                    <ListItemIcon>
                        <AddIcon />
                    </ListItemIcon>
                    {/*id={labelId} */}
                    <ListItemText className={classes.listItemText} primary={props.item.title}
                        secondary={props.item.description} />
                    <ListItemText className={classes.listItemText} primary={props.item.price} />
                </ListItemButton>
            </ListItem >
        </div >

    );
};

export default DishesItem;