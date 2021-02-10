import React, {useState} from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';


function Education(classes, data){
    function fetchData(data){
        if(data){
            try {
                return data.map((datum) =>{
                    return <Grid item key={datum['id']}>
                        <img src={process.env.PUBLIC_URL + '/assets/' + datum["Image"]} />
                        <Typography variant="h5">{datum["School"]}</Typography>
                        <Typography variant="body1">{datum["Course"]}</Typography>
                        <Typography variant="body2">{datum["StartDate"]} ~ {datum["EndDate"]}</Typography>
                    </Grid>;
                });
            } catch (e) {
                return <Grid container item spacing={3} direction="column" style={{flexGrow: 1}}>
                    <CircularProgress />
                </Grid>;
            }
        } else {
            return <Grid container item spacing={3} direction="column" style={{flexGrow: 1}}>
                <CircularProgress />
            </Grid>
        }
    }

    return (
        <Grid container item spacing={5} direction="column" alignItems="center" style={{flexGrow: 1, paddingTop: "20px"}}>
            {fetchData(data)}
        </Grid>
    );
}

export default Education;
