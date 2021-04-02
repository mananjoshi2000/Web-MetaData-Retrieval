import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LinkIcon from '@material-ui/icons/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import axios from "axios";

import MetaData from './MetaData'

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function Form(props) {

    const classes = useStyles();

    var [url,setUrl] = React.useState("");
    const [flag,setFlag] = React.useState(false);
    const [data,setData] = React.useState({});

    const APICall = async () =>{

        console.log('In function')
        setUrl(url);

        await axios.get('/scrapper',{
            params: {
            link: url
        }})
        .then((res)=>{
            console.log('Res: ',res.data)
            setData(JSON.parse(res.data[0]))
        })
        .catch(err => console.log('ERR :',err))

        setFlag(true)
    }

    React.useEffect(()=>{

    },[flag])

    return (
        <div>
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LinkIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Enter URL
                </Typography>
                <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="link"
                    name="link"
                    autoComplete="link"
                    autoFocus
                    onChange={(event)=>{
                        url = event.target.value;
                    }}
                    // value={url}
                />
            
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={
                        APICall}
                >
                    Get MetaData
                </Button>
                </form>
            </div>
            </Container>

            {flag && <MetaData data={data} flag={flag}/>}

        </div>
    );
}

export default Form;