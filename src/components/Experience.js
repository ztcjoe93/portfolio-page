
import React, {useState} from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';

function Experience(classes, data){
    function fetchData(data){
        if(data){
            var listPtr = 0;
            try {
                return data.map((datum) => {
                    var fadeInTimer = 200;
                    return <Fade in={true} key={datum['id']}>
                        <Grid item>
                        <img src={process.env.PUBLIC_URL + '/assets/' + datum["Image"]} />
                        <Typography variant="h5">{datum["Company"]}</Typography>
                        <Typography variant="body2">{datum["Role"]}</Typography>
                        <Typography variant="body2">{datum["StartDate"]} ~ {datum["EndDate"]}</Typography>
                        <ul>
                        {datum["Tasks"].map((task) => { 
                            listPtr++;
                            fadeInTimer += 50;
                            return <li key={listPtr}>
                                <Slide in={true} direction='left' timeout={fadeInTimer}>
                                <Typography variant="body2">{task}</Typography>
                                </Slide>
                            </li>;
                        })}
                        </ul>
                    </Grid></Fade>;
                });
            } catch(e){
                return <Grid container item spacing={3} direction="column" 
                            justify="center" alignItems="center" style={{flexGrow: 1}}>
                            <CircularProgress />
                        </Grid>;
            }
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
    );
}

export default Experience;
