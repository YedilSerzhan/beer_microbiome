import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import CountUp from 'react-countup';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '16px',
        padding: '16px',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 32,
    },
    count: {
        fontSize: 32,
        fontWeight: 'bold',

    },
    label: {
        fontSize: 20,

    },
});

const AnimatedCountCard = ({ label, count }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.count} variant="h5" component="h2">
                    <CountUp end={count} duration={2} />
                </Typography>
                <Typography className={classes.label} variant="body2" component="p">
                    {label}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default AnimatedCountCard;
