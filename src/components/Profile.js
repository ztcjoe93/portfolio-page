import React, {useState} from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import Avatar from '@material-ui/core/Avatar';
import pic from '../assets/profile.jpeg';
import Divider from '@material-ui/core/Divider';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';


function Profile(classes){
    return (
        <Grid container item direction="column" style={{flexGrow: 1}}>
            <Grid container item direction="row" className={classes.profileSubComponent}>
                <Fade in={true} key={"profile_bod"} timeout={500}>
                <Grid container item xs={6} direction="column" justify="center">
                    <Typography paragraph variant="body2">
                        Part-time undergraduate at the University of Wollongong, currently pursuing a Computer Science degree majoring in Big Data.
                    </Typography>
                    <Typography variant="body2">
                        Embraces the FOSS concept. Loves and is passionate at learning new things. Believes in utilizing technology to make a difference.
                    </Typography>
                </Grid>
                </Fade>
                <Grid container item xs={6} direction="column" justify="center" alignItems="center">
                    <Avatar src={pic} className={classes.large} />
                    <Typography>Chua Zheng Tat</Typography>
                    <Grid item>
                        <IconButton aria-label="github" onClick={() => window.open("https://github.com/ztcjoe93", "_blank")}>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton aria-label="linkedin" onClick={() => window.open("https://www.linkedin.com/in/zhengtat", "_blank")}>
                            <LinkedInIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Divider />
            <Grid container item direction="column" spacing={3}
                className={classes.profileSubComponent}>
                <Grid item >
                    <Typography variant="h5" gutterBottom>Technical Skills</Typography>
                </Grid>
                <Grid container item justify="space-around" spacing={3}>
                    <Grid container direction="column" item xs={6}>
                        <Fade in={true} timeout={1000}>
                        <Typography paragraph variant="h6">
                            Languages:
                        </Typography>
                        </Fade>
                        <Fade in={true} timeout={1500}>
                        <Typography variant="body2">
                            Python (fluent), Java(proficient), Dart (prior experience),
                            Javascript (prior experience), PHP (prior experience), C++ (prior experience),
                            SQL (proficient), NoSQL (prior experience), Linux (proficient)
                        </Typography>
                        </Fade>
                    </Grid>
                    <Grid container direction="column" item xs={6}>
                        <Fade in={true} timeout={1000}>
                        <Typography paragraph variant="h6">
                            Frameworks & Software:
                        </Typography>
                        </Fade>
                        <Fade in={true} timeout={1500}>
                        <Typography variant="body2">
                            Flask, Selenium, Qt, scikit-learn, Tensorflow, JavaFx, Flutter,
                            React, NodeJS, Yii, Codeception, MySQL, OracleDB, SQLite, MongoDB, Vim
                        </Typography>
                        </Fade>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Profile;
