import React, {useState} from 'react';

import Button from '@material-ui/core/Button';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import MainPanelContent from './components/MainPanelContent';
import firebase from './config';

import useWindowsDimensions from './components/useWindowsDimensions';

import './App.css';


let theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Manrope',
        ].join(','),
        button: {
            fontWeight: 'fontWeightBold',
        }
    }
});

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    large: {
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
    paper: {
        height: "75vh",
        minWidth: "65vw",
        maxWidth: "65vw"
    },
    subComponent: {
        height: "100%",
    },
    profileSubComponent: {
        height: "50%",
    },
}));

function App(){
    const classes = useStyles();
    const mainPanelContent = MainPanelContent(classes);
    const {height, width} = useWindowsDimensions();

    // rendering
    return (
        <ThemeProvider theme={theme}>
            <div id="MainApp">
            {width >= 1020      ?
                    <Grid container className={classes.root} justify="center" alignItems="center">
                        {mainPanelContent}
                    </Grid>
                                :
                    <Grid container className={classes.root} justify="center">
                        {mainPanelContent}
                    </Grid>}
            </div>
        </ThemeProvider>
    );
}

export default App;
