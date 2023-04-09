import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';



export default function Study() {
    const { study_id } = useParams()
    const [bars_16S, setbars_16S] = useState('')
    const [legend_16S, setlegend_16S] = useState('')
    // PRJNA681555_16S
    import(`../images/${study_id}_bars_16S.svg`).then((module) => {
        setbars_16S(module.default)
    }).catch(function () {

    });
    import(`../images/${study_id}_legend_16S.svg`).then((module) => {
        setlegend_16S(module.default)
    }).catch(function () {

    });
    const [bars_ITS, setbars_ITS] = useState('')
    const [legend_ITS, setlegend_ITS] = useState('')
    // PRJNA681555_bars_ITS

    import(`../images/${study_id}_bars_ITS.svg`).then((module) => {
        if (module)
            setbars_ITS(module.default)
    }).catch(function () {

    });

    import(`../images/${study_id}_legend_ITS.svg`).then((module) => {
        if (module)
            setlegend_ITS(module.default)
    }).catch(function () {

    });


    return (
        <Box >
            <h1>{study_id}</h1>
            {(() => {
                if (bars_ITS)
                    return (
                        <>
                            <h2>ITS</h2>
                            <Grid
                                container
                                spacing={2}
                                sx={{ my: 6, maxHeight: '80vh' }}
                            >
                                <Grid xs={8} item>
                                    <Box className='image_wrapper'>
                                        <img src={bars_ITS} />
                                    </Box>
                                </Grid>
                                <Grid xs={4} item>
                                    <Box className='image_wrapper'>
                                        <img src={legend_ITS} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </>

                    )
            })()}

            {(() => {
                if (bars_16S)
                    return (
                        <>
                            <h2>16S</h2>
                            <Grid
                                container
                                spacing={2}
                                sx={{ my: 6, maxHeight: '80vh' }}
                            >
                                <Grid xs={8} item>
                                    <Box className='image_wrapper'>
                                        <img src={bars_16S} />
                                    </Box>
                                </Grid>
                                <Grid xs={4} item>
                                    <Box className='image_wrapper'>
                                        <img src={legend_16S} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </>

                    )
            })()}

        </Box>
    );
}