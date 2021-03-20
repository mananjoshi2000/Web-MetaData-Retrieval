import React from 'react';
import {Container,List,ListItem,Typography,Divider,ListItemText} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
    },
    inline: {
    display: 'inline',
    },
}));

function MetaData(props) {
console.log('PRRPR :',props.data.og)

    const classes = useStyles();
   
    return (
        <div>
            {/* <Container>
                <List className={classes.root}>
                
                    <ListItem alignItems="flex-start">
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                URL
                            </Typography>

                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {props.data.og.url}
                            </Typography>
                    </ListItem>
                    <Divider variant="inset" component="li" />

                    <ListItem alignItems="flex-start">
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            Title
                        </Typography>

                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            {props.data.og.title}
                        </Typography>
                    </ListItem>
                    <Divider variant="inset" component="li" />

                    <ListItem alignItems="flex-start">
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            Description
                        </Typography>

                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            {props.data.og.description}
                        </Typography>
                    </ListItem>
                    <Divider variant="inset" component="li" />

                    <ListItem alignItems="flex-start">
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            Image
                        </Typography>

                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            {props.data.og.image}
                        </Typography>
                    </ListItem>
                    <Divider variant="inset" component="li" />

                </List>
            </Container> */}
        </div>
    );
}

export default MetaData;