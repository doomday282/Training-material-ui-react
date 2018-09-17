import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from './Card'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function CenteredGrid(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid 
                container
                direction="row"
                justify="space-around"
                alignItems="flex-end"
                style={{marginTop: '3rem'}}               
            >

                <Grid item xs={3}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Card />
                </Grid>
                <Grid item xs={3}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Card />
                </Grid>
                <Grid item xs={3}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Card />
                </Grid>
                <Grid item xs={3}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Card />
                </Grid>
            </Grid>
        </div>
    );
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
