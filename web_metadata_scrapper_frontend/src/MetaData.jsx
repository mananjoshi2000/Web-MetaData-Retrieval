import React from 'react';
import {Container,Box,List,ListItem,Typography,CardMedia,Card} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
}));

function MetaData(props) {

    console.log('PRRPR :',props.flag,props.data)

    const classes = useStyles();

    return (
            <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                    <ListItem alignItems="flex-start" >
                        <Card>
                        <Typography
                            component="span"
                            variant="body2"
                            color="primary"
                        >
                            URL : &nbsp;
                        </Typography>

                        <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                        >
                            {props.data.og.url}
                        </Typography>
                        </Card>
                    </ListItem>

                    <ListItem alignItems="flex-start">
                        <Card>
                        <Typography
                            component="span"
                            variant="body2"
                            color="primary"
                        >
                            Title : &nbsp;
                        </Typography>

                        <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                        >
                            {props.data.og.title}
                        </Typography>
                        </Card>
                    </ListItem>

                    <ListItem alignItems="flex-start">
                        <Card>
                        <Typography
                            component="span"
                            variant="body2"
                            color="primary"
                        >
                            Description : &nbsp;
                        </Typography>

                        <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                        >
                            {props.data.og.description}
                        </Typography>
                        </Card>
                    </ListItem>

                    <ListItem alignItems="flex-start">
                        <Card>
                        <Typography
                            component="span"
                            variant="body2"
                            align="center"
                            color="primary"
                        >
                            Image : &nbsp;
                        </Typography>

                        <Typography
                            component="span"
                            variant="body2"
                            align="center"
                            color="textPrimary"
                        >
                            <CardMedia
                                className={classes.media}
                                image={props.data.og.image}
                                title="Paella dish"
                            />
                        </Typography>
                        </Card>
                    </ListItem>

            </div>
            </Container>
    );
}

export default MetaData;