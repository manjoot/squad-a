import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import picture1 from '../../assets/images/picture1forgallery.jpg';
import picture2 from '../../assets/images/picture2forgallery.jpg';
import picture3 from '../../assets/images/picture3forgallery.jpg';
import picture4 from '../../assets/images/picture4forgallery.jpg';
import picture5 from '../../assets/images/picture5forgallery.jpg';
import picture6 from '../../assets/images/picture6forgallery.jpg';
import picture7 from '../../assets/images/picture7forgallery.jpg';
import picture8 from '../../assets/images/picture8forgallery.jpg';
import picture9 from '../../assets/images/picture9forgallery.jpg';
import picture10 from '../../assets/images/picture10forgallery.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
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



 
const tileData = [
   {
    img: picture1,
    title: 'Gallery Picture 1',
    author: 'Fit',
   },
   {
    img: picture2,
    title: 'Gallery Picture 2',
    author: 'Food', 
    },
    {
    img: picture3,
    title: 'Gallery Picture 3',
    author: 'Fit',  
    },
    {
    img: picture4,
    title: 'Gallery Picture 4',
    author: 'Food'  
    },
    {
    img: picture5,
    title: 'Gallery Picture 5',
    author: 'Fit',  
    },
    {
    img: picture6,
    title: 'Gallery Picture 6',
    author: 'Food',  
    },
    {
    img: picture7,
    title: 'Gallery Picture 7',
    author: 'Fit',  
    },
    {
    img: picture8,
    title: 'Gallery Picture 8',
    author: 'Food', 
    },
    {
    img: picture9,
    title: 'Gallery Picture 9',
    author: 'Fit',  
    },
    {
    img: picture10,
    title: 'Gallery Picture 10',
    author: 'Food',  
    },
    
  ];

export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
