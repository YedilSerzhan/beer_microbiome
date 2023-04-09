import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function MyPaper() {
    return (
        <Paper variant="outlined" sx={{ bgcolor: "#F7F7F7", p: 3, border: 2, borderColor: "#E0E0E0" }}>
            <Typography variant="h5" sx={{ mb: 1 }} >
                Beer
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
                50 beers from 39 countries
            </Typography>
        </Paper>
    );
}