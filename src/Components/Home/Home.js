import React from 'react';
// import SampleImg from '../../Assets/sampleImage.jpeg';
// import { useState } from 'react';
import ArticleCardList from "./CardList/ArticleCardList";
import VideoCardList from "./CardList/VideoCardList";
import PodcastCardList from "./CardList/PodcastCardList";
import Title from "../Title";
import Navigation from "./Navigation/Navigation"
import SectionTitle from "../SectionTitle";
import AuthButtons from "../AuthButtons";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Grid from '@mui/material/Grid'
import AvatarButton from '../AvatarButton';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#ffa432",
//     },
//     secondary: {
//       main: "#ffba32",
//     },
//   },
// });

const Home =()=> {

  return (

      <div className="home">
        <Grid container spacing={3}>
            <Grid item xs={3}>
            <AvatarButton/>
            </Grid>
            <Grid item xs={4}>
              <Title/>
            </Grid>
            <Grid item className="centered"xs={3}>
              <AuthButtons/>
            </Grid>
          </Grid>

        <Navigation/>
        <SectionTitle content="Articles"/>
          <ArticleCardList/>
          <SectionTitle content="Videos"/>
          <VideoCardList/>
          <SectionTitle content="Podcasts"/>
          <PodcastCardList/>
      </div>
  );
}

export default Home;
