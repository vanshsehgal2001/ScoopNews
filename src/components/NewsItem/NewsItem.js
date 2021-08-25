import React,{useState,useEffect,createRef} from 'react'
import {Card, CardActionArea,CardActions,CardContent,CardMedia,Typography,Button} from '@material-ui/core'
import useStyles from './styles.js'
import classNames from 'classnames'


const NewsItem = ({newsItem,activeArticle,i}) => {

    const {description,publishedAt,source,title,url,urlToImage}=newsItem
    const classes=useStyles()

    return (
        <Card  className={classNames(classes.card,activeArticle === i ? classes.activeCard:null) }>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage || 'https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg'} />
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">
                        {(new Date(publishedAt)).toDateString()}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">
                        {source.name}
                    </Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant="h5"> {title} </Typography>
                <CardContent>
                    <Typography variant="body2" component="h2" color="textSecondary"> {description} </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">
                    More
                </Button>
                <Typography variant="h5" color="textSecondary"> {i+1} </Typography>
            </CardActions>
        </Card>
    )
}

export default NewsItem
