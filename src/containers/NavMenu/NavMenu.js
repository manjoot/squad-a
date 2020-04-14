import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import WorkoutIcon from '@material-ui/icons/FitnessCenter';
import RecipeIcon from '@material-ui/icons/LocalDining';
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    width: '275px',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: 'rgba(20, 20, 20, 0.5)',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
      color: 'black',
    },
  },
}))(MenuItem);

const StyledButton = withStyles({
    root: {
      color: 'black',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(IconButton);

export default function NavMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <StyledButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <MenuIcon fontSize="inherit" />
      </StyledButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </StyledMenuItem>

        <StyledMenuItem>
        <ListItemIcon>
            <InfoIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="About" />
        </StyledMenuItem>

        <Divider />

    
        <StyledMenuItem>
          <ListItemIcon>
            <WorkoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Workout" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <RecipeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Recipe" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
