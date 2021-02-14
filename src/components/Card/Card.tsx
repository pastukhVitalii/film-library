import React from 'react';
import {Card, CardContent, CardHeader, CardMedia, createStyles, Grid, Theme, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {FilmType} from "../../api/api";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '100%',
      marginTop: '30px',
    },
    media: {
      width: '100%',
      height: '281px',
      margin: '0 auto',
    },
  }),
);

export type PropsType = {
  film: FilmType
}

export const MyCard = React.memo(function (props: PropsType) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item xs={7} md={6} sm={6} lg={6} xl={6}>
          {props.film.backdrop_path ? <CardMedia
            className={classes.media}
            image={`https://image.tmdb.org/t/p/w500${props.film.backdrop_path}`}
            title={props.film.title}
          /> : <div style={{height: '281px', textAlign: 'center'}}>{props.film.title} <br/>without image </div>}
        </Grid>
        <Grid item xs={5} md={6} sm={6} lg={6} xl={6}>
          <CardHeader
            title={props.film.title}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.film.release_date}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.film.genre_ids}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
});

