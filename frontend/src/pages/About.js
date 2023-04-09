import React from 'react';
import Typography from '@material-ui/core/Typography';

function About() {
    return (
        <>
            <h1>About</h1>
            <p>Beer Microbiome Database aims to provide a comprehensive database of the microbiome of various beer samples. The complex microbial communities involved in the fermentation process of different types of beers contribute to their unique qualities and flavors, and our database aims to explore and understand these microbial communities better.</p>
            <p>We collected shotgun and metabarcoding sequencing data from the <a href='https://www.ebi.ac.uk/ena/browser/home'>European Nucleotide Archive (ENA)</a>, and two open-source Galaxy workflows have been developed for processing this data. With the results of the database, we hope to answer several questions, such as the dominant microbial populations present in beer, their variations based on different types of beers, and the diveristy of beer microbiome within and across different beers.</p>
            <p>Overall, we believe that this project has the potential to significantly advance our understanding of the role of microbial communities in beer fermentation, and provide valuable insights for researchers, brewers, and consumers alike. We hope you find our website informative and useful, and we welcome any feedback or suggestions you may have.</p>
            <h1>Data Access</h1>
            <p>All samples on Beer microbiome database are from <a href='https://www.ebi.ac.uk/ena/browser/home'>European Nucleotide Archive (ENA)</a>.</p>
            <p>All samples are processed and the results are produced using <a href="https://usegalaxy.eu/">Galaxy</a>.</p>
        </>
    );
}

export default About;
