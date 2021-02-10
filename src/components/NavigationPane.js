import React, {useState} from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// <Button onClick={() => updateTitleFn(val)}>



// NavigationPane takes in a fn to update the title
function NavigationPane(updateTitleFn, classes, width){
    const [selection, setSelection] = useState(null);

    return (
        (width < 1020) ?
            <Grid container justify="center">
                {["Profile", "Experience", "Projects", "Education"].map((val) => (
                    <Grid key={val} item>
                        <Button onClick={() => updateTitleFn(val)}>
                            {val}
                        </Button>
                    </Grid>
                ))}
            </Grid>
            :
        <Grid container item xs={2} direction="column" 
            spacing={1} justify="center"
            className={classes.subComponent}>
            {["Profile", "Experience", "Projects", "Education"].map((val) => (
                <Grid key={val} item>
                    <Button onClick={() => updateTitleFn(val)}>
                        {val}
                    </Button>
                </Grid>
            ))}
        </Grid>
    );
}

export default NavigationPane;
