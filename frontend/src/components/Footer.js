import React from 'react';
import Stack from '@mui/material/Stack';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (

        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{}}
            className="footer"
        >
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={5}
                sx={{ mb: 2 }}
            >
                <TwitterIcon /> <GitHubIcon /> <LinkedInIcon />
            </Stack>
            <Typography variant="body1">
                © 2023 Yedil Serzhan. All rights reserved.
            </Typography>
        </Stack>

    );
}