import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import StickyHeadTable from '../components/MyTable'
import beer_svg from '../images/undraw_beer_xg5f.svg'
import SearchBar from '../components/SearchBar';
import AnimatedCountCard from '../components/CountCard';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

function Home() {
    const [samples, setSamples] = useState([])
    const [allSamples, setAllSamples] = useState([])
    const [searchBy, setsearchBy] = React.useState('Beer');
    const [keyword, setKeyword] = React.useState('');

    useEffect(() => {
        const fetchSamples = async () => {
            try {
                if (!allSamples.length) {
                    const res = await fetch('http://localhost:4001/api/samples')
                    const data = await res.json()
                    setSamples(data)
                    setAllSamples(data)
                } else {
                    setSamples(allSamples)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchSamples()
    }, [allSamples])

    const handleSearchByChange = (event) => {
        setsearchBy(event.target.value);
    };
    const handleKeywordChange = (event) => {
        setKeyword(event.target.value);
    };

    function filterData() {
        var filteredData = allSamples;
        if (keyword !== "") {
            filteredData = allSamples.filter(sample => {
                return Object.values(sample).some(value => {
                    if (typeof value === 'string') {
                        return value.toLowerCase().includes(keyword.toLowerCase());
                    } else if (Array.isArray(value)) {
                        return value.some(item => typeof item === 'string' && item.toLowerCase().includes(keyword.toLowerCase()));
                    }
                    return false;
                });
            });
        }
        setSamples(filteredData);
    }

    return (
        <Box sx={{ mt: 6 }}>
            <Box sx={{ my: 6 }}>
                <Container maxWidth="lg">
                    <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justify="center"
                        style={{}}>
                        <Grid xs={12} md={7} item>
                            <Typography variant="h1" sx={{ mb: 1 }}>
                                <span style={{ fontWeight: "bold" }}>Beer</span>
                            </Typography>
                            <Typography variant="h1" sx={{ mb: 1 }}>
                                <span style={{ fontWeight: "bold" }}>Micro</span>biome
                            </Typography>
                            <Typography variant="h1" sx={{ mb: 1 }}>
                                <span style={{ fontWeight: "bold" }}>D</span>ata<span style={{ fontWeight: "bold" }}>b</span>ase
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 1 }}>
                                Your go-to platform for exploring the diverse microbial communities in beer fermentation.
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 1 }}>
                                Connect researchers, brewers, and enthusiasts, promoting information sharing and advancing the beer microbiome field.
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 1 }}>
                                Dive into the world of beer microbiomes and uncover the secrets behind your favorite brews.
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 1 }}>
                                Cheers!
                            </Typography>
                        </Grid>
                        <Grid xs={12} md={5} item>
                            <Box
                                component="img"
                                sx={{
                                    maxHeight: '100%',
                                    maxWidth: '100%',
                                }}
                                alt="The house from the offer."
                                src={beer_svg}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} justify="center">
                        <Grid item xs={12} sm={6} md={4}>
                            <AnimatedCountCard label="Samples" count={301} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <AnimatedCountCard label="Beers" count={56} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <AnimatedCountCard label="Beer breweries" count={47} />
                        </Grid>
                    </Grid>
                    <Grid xs={12} md={5} item sx={{ my: 6 }}>
                        <SearchBar handleSearchByChange={handleSearchByChange} handleKeywordChange={handleKeywordChange} searchBy={searchBy} keyword={keyword} searchOnlick={filterData} />
                    </Grid>
                </Container>
            </Box>
            <Container sx={{ mb: 10 }}>
                <StickyHeadTable data={samples} />
            </Container>
        </Box>
    );
}

export default Home;
