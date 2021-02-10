
import React, {useState} from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import LaunchIcon from '@material-ui/icons/Launch';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';

function Projects(classes, data){
    function fetchData(data){
        if(data){
            var fadeInTimer = 200;
            return data.map((datum) => {
                fadeInTimer += 250;
                return <Fade in={true} timeout={fadeInTimer} key={datum['id']}>
                <Grid container item>
                    <Grid container item direction="row" alignItems="center">
                        <Typography variant="h6">{datum["Name"]}</Typography>
                        <IconButton aria-label="launch"
                            onClick={() => window.open(datum["Link"], "_blank")}>
                            <LaunchIcon />
                        </IconButton>
                    </Grid>
                    <Typography variant="body2">{datum["Description"]}</Typography>
                </Grid>
                </Fade>;
            });
        } else {
            return <Grid container item spacing={3} direction="column" 
                        justify="center" alignItems="center" style={{flexGrow: 1}}>
                        <CircularProgress />
                    </Grid>;
        }
    }

    return (
        <Grid container item spacing={3} direction="column" style={{flexGrow: 1, paddingTop: "20px"}}>
            {fetchData(data)}
        </Grid>
    )
}

export default Projects;
