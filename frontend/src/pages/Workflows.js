import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import StickyHeadTable from '../components/MyTable'
import beer_svg from '../images/undraw_beer_xg5f.svg'
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import shotgun_workflow_img from "../images/shotgun_workflow.png"

function Workflows() {
    return (
        <>
            <Grid
                container
                spacing={2}
                alignItems="center"
                justify="center"
                sx={{ mt: 6 }}>
                <Grid xs={12} md={2} item sx={{ my: 6 }}>
                    <h1>Shotgun workflow</h1>

                </Grid>
                <Grid xs={12} md={10} item sx={{ my: 6 }}>
                    <img
                        src={shotgun_workflow_img}
                        style={{
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    />
                </Grid>

            </Grid>
        </>
    )
}

export default Workflows;