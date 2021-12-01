import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Box, Grid} from "@material-ui/core";
import SampleImg from "../../Assets/sampleImage.jpeg";
import ArticleCard from "./ArticleCard";

const ArticleCardList = () => {

    const [articleCards, setArticleCards] = useState([
        {id: 1, image: SampleImg, title: 'Article 1', creator: 'Creator1', type: 'article'},
        {id: 2, image: SampleImg, title: 'Article 2', creator: 'Creator2', type: 'article'},
        {id: 3, image: SampleImg, title: 'Article 3', creator: 'Creator3', type: 'article'},
    ]);

    return (
        <div className="media-card-list">
            <Grid container spacing={3}>
                {articleCards.map((articleCard) => (
                    <Grid item key={articleCard.id} xs={12} md={6} lg={4}>
                        <ArticleCard media={articleCard} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default ArticleCardList;



