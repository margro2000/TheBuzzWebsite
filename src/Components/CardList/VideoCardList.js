import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Box, Grid} from "@material-ui/core";
import SampleImg from "../../Assets/sampleImage.jpeg";
import VideoCard from "./VideoCard";


const VideoCardList = () => {

    const [videoCards, setVideoCards] = useState([
        {id: 1, image: SampleImg, title: 'Video 1', creator: 'Creator1', type: 'video'},
        {id: 2, image: SampleImg, title: 'Video 2', creator: 'Creator2', type: 'video'},
        {id: 3, image: SampleImg, title: 'Video 3', creator: 'Creator3', type: 'video'},
    ]);

    return (
        <div className="media-card-list">
            <Grid container spacing={3}>
                {videoCards.map((videoCard) => (
                    <Grid item key={videoCard.id} xs={12} md={6} lg={4}>
                        <VideoCard media={videoCard} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default VideoCardList;