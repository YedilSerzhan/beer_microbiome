import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';

function SearchBar({ handleKeywordChange, handleSearchByChange, searchBy, keyword, searchOnlick }) {
    return (
        <Grid
            container
            spacing={2}
        >
            {/* <Grid md={3} xs={12} item>
                <FormControl fullWidth>
                    <InputLabel id="demo-select-small">Search By</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={searchBy}
                        placeholder="searchBy"
                        label="Search by"
                        onChange={handleSearchByChange}
                        required
                    >
                        <MenuItem value="beer">
                            Beer
                        </MenuItem>
                        <MenuItem value={'study'}>Study</MenuItem>
                        <MenuItem value={'taxa'}>Taxonomy</MenuItem>
                        <MenuItem value={'accession'}>Accession number</MenuItem>
                    </Select>
                </FormControl>
            </Grid> */}
            <Grid md={8} xs={12} item>
                <TextField
                    required
                    id="outlined-required"
                    placeholder="Keyword"
                    fullWidth
                    value={keyword}
                    onChange={handleKeywordChange}
                />
            </Grid>
            <Grid md={4} xs={12} item>
                <Button
                    fullWidth
                    variant="contained"
                    xs={12} md={2}
                    sx={{ height: "3.4rem", bgcolor: "#333333", color: "F7F7F7" }}
                    onClick={searchOnlick}
                >
                    Search Now
                </Button>
            </Grid>
        </Grid>
    );
}

export default SearchBar;