import React from 'react';
import {Container,Box,List,ListItem,Typography,CardMedia,Card,Link} from '@material-ui/core'
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
        width: 450+'px',
        paddingTop: '56.25%',
      },
    card:{
        margin:5+'%'
      }
}));

function MetaData(props) {

    console.log('PRRPR :',props.flag,props.data)

    const classes = useStyles();

    return (
            <Container component="main" maxWidth="sm">
                <div className={classes.paper}>
                    <ListItem alignItems="flex-start" >
                        <Box>
                        <Typography
                            component="span"
                            variant="h6"
                            color="primary"
                        >
                            URL : &nbsp;
                        </Typography>

                        <Typography
                            component="span"
                            variant="h6"
                            color="textPrimary"
                        >
                            {props.data.url}
                        </Typography>
                        </Box>
                    </ListItem>

                    <ListItem alignItems="flex-start">
                        <Box>
                        <Typography
                            component="span"
                            variant="h6"
                            color="primary"
                        >
                            Title : &nbsp;
                        </Typography>

                        <Typography
                            component="span"
                            variant="h6"
                            color="textPrimary"
                        >
                            {props.data.title}
                        </Typography>
                        </Box>
                    </ListItem>

                    <ListItem alignItems="flex-start">
                        <Box>
                        <Typography
                            component="span"
                            variant="h6"
                            color="primary"
                        >
                            Description : &nbsp;
                        </Typography>

                        <Typography
                            component="span"
                            variant="h6"
                            color="textPrimary"
                        >
                            {props.data.description}
                        </Typography>
                        </Box>
                    </ListItem>

                    <ListItem alignItems="flex-start">
                        <Box>
                        <Typography
                            component="span"
                            variant="h6"
                            align="center"
                            color="primary"
                        >
                            Image : &nbsp;
                        </Typography>

                        <Typography
                            component="span"
                            variant="h6"
                            align="center"
                            color="textPrimary"
                        >
                        <Link href={props.data.image} color='secondary' target='_blank'>
                            Image Link
                        </Link>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                component="div"
                                image={props.data.image}
                                title="Paella dish"
                            />
                        </Card>
                        </Typography>
                        </Box>
                    </ListItem>
                </div>
            </Container>
    );
}

export default MetaData;