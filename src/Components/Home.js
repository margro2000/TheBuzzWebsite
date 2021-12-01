import React from 'react';
import SampleImg from '../Assets/sampleImage.jpeg';
import { useState } from 'react';
import ArticleCardList from "./CardList/ArticleCardList";
import VideoCardList from "./CardList/VideoCardList";
import PodcastCardList from "./CardList/PodcastCardList";
import Title from "./Title";
import Navigation from "./Navigation"
import SectionTitle from "./SectionTitle";
import AuthButtons from "./AuthButtons";



const Home =()=> {

  return (
      <div className="home">
        <Title/>
          <AuthButtons/>
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
