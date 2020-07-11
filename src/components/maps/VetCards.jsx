import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import vetData from "../../resources/vet_data";
import {render} from "react-dom";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import {Container} from "@material-ui/core";
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        // height: 140,
    },
});

const useNewStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

function getVetData() {
    const vets = vetData
    return (vets.map((vet, index) => {
        let vet_info = [vet.name,
            vet.formatted_address,
            vet.rating]
        let vetInfo = {
            "name": vet.name,
            "add": vet.formatted_address,
            "rate": vet.rating
        }
        // console.log(vetInfo)
        return vetInfo

    }));
}


function MediaCard(name, info, rate) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Replace with google images or our images"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Rating: {rate}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary" href="/vet">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}


export default function cardList() {
    let vet_array = getVetData();
    console.log(vet_array)
    return (
        <Container fixed>
            <div id="card_list">
                <GridList cols={1} rows={3}>
                    {vet_array.map((tile) => (
                        <GridListTile key={tile.name} cols={1}>
                            {console.log("name: ", tile.name)}
                            {MediaCard(tile.name, tile.address, tile.rate)}
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </Container>
    );

}

// export default function SingleLineGridList() {
//   const classes = useStyles();
//
//     let vet_array = getVetData();
//   return (
//     <div className={classes.root}>
//       <GridList className={classes.gridList} cols={2}>
//         {vet_array.map((tile) => (
//           <GridListTile key={tile.name}>
//             <GridListTileBar
//               title={tile.name}
//               classes={{
//                 root: classes.titleBar,
//                 title: classes.title,
//               }}
//               actionIcon={
//                 <IconButton aria-label={`star ${tile.title}`}>
//                   <StarBorderIcon className={classes.title} />
//                 </IconButton>
//               }
//             />
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//   );
// }