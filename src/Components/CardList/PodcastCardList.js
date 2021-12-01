import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Box, Grid} from "@material-ui/core";
import SampleImg from "../../Assets/sampleImage.jpeg";
import PodcastCard from "./PodcastCard";

const PodcastCardList = () => {

    const [podcastCards, setPodcastCards] = useState([
        {id: 1, image: SampleImg, title: 'Podcast 1', creator: 'Creator1', type: 'podcast'},
        {id: 2, image: SampleImg, title: 'Podcast 2', creator: 'Creator2', type: 'podcast'},
        {id: 3, image: SampleImg, title: 'Podcast 3', creator: 'Creator3', type: 'podcast'},
    ]);

    return (
        <div className="media-card-list">
            <Grid container spacing={3}>
                {podcastCards.map((podcastCard) => (
                    <Grid item key={podcastCard.id} xs={12} md={6} lg={4}>
                        <PodcastCard media={podcastCard} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default PodcastCardList;