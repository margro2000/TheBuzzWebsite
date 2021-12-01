import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import IconButton from "@mui/material/IconButton";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const VideoCard = ({media}) => {
    const classes = useStyles();
    return (
        <div className="video-card">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={media.image}
                        title="Sample Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {media.title}
                            <PlayCircleOutlineIcon/>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {media.creator}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton size="small">
                        <FavoriteBorderIcon fontSize="small"/>
                    </IconButton>
                    <IconButton size="small">
                        <ChatBubbleOutlineIcon fontSize="small"/>
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
}

export default VideoCard