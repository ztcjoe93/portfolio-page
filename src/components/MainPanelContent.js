import React, {useState} from 'react';

import NavigationPane from './NavigationPane';
import Profile from './Profile';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';

import Firebase from 'firebase';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import useWindowsDimensions from './useWindowsDimensions';

function updateData(title, classes, data){
    switch(title){
        case "Profile":
            return Profile(classes);
        case "Experience":
            return Experience(classes, data);
        case "Projects":
            return Projects(classes, data);
        case "Education":
            return Education(classes, data);
    }
}


function MainPanelContent(classes){
    const [title, setTitle] = useState("Profile");
    const [data, setData] = useState(null);

    const {height, width} = useWindowsDimensions();

    async function getUserData(selection){
        if(selection !== "Profile"){
            let ref = Firebase.database().ref('/'+selection);

            ref.on('value', snapshot => {
                let state = [];
                const data = snapshot.val();
                data.forEach((e) => {
                    state.push(e);
                });
                setData(state);
            });
        } else {
            setData(null);
        }
    }

    const updateTitle = (title) => {
        getUserData(title);
        setTitle(title);
    }

    // initializing other sub-components
    const navPanel = NavigationPane(updateTitle, classes, width);

    return (
        (width >= 1020) ?
            <Paper className={classes.paper}>
                <Grid container justify="space-around" className={classes.subComponent}>
                    { navPanel }
                    <Divider orientation="vertical" flexItem />
                    <Grid container item xs={9} className={classes.subComponent}
                        direction="column" alignItems="center" spacing={3}>
                        <Grid container item>
                            <Typography variant="h4" style={{paddingTop: "30px"}}>{title}</Typography> 
                        </Grid>
                        {updateData(title, classes, data)}
                    </Grid>
                </Grid>
            </Paper>
            : 
            <Grid container item justify="center" alignItems="center" direction="column">
                {navPanel}
                <Typography variant="h4" style={{paddingTop: "30px"}}>{title}</Typography> 
                {updateData(title, classes, data)}
            </Grid>
    );
}

export default MainPanelContent;
