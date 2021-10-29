import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SampleImg from './sampleImage.jpeg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={SampleImg}
          title="Sample Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Sample Article 1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            By Sample Writer
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
