import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  link: {
    textDecoration: "none",
    color: "grey"
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <ListItem>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <Link to="/breadcrumbs" className={classes.link}>
          Bread Crumbs
        </Link>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <Link to="/dialog" className={classes.link}>
          Dialog
        </Link>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <Link to="/expansion-panel" className={classes.link}>
          Expansion Panel
        </Link>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <Link to="/image-card" className={classes.link}>
          Image Card
        </Link>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <Link to="/paginated-table" className={classes.link}>
          Paginated Table
        </Link>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <Link to="/slider" className={classes.link}>
          Slider
        </Link>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <Link to="/stepper" className={classes.link}>
          Steppers
        </Link>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <Link to="/tabs" className={classes.link}>
          Tabs
        </Link>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <Link to="/login" className={classes.link}>
          Login
        </Link>
      </ListItem>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>Open Left</Button>
      <Button onClick={toggleDrawer("right", true)}>Open Right</Button>
      <Button onClick={toggleDrawer("top", true)}>Open Top</Button>
      <Button onClick={toggleDrawer("bottom", true)}>Open Bottom</Button>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
      <Drawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer("top", false)}
      >
        {sideList("top")}
      </Drawer>
      <Drawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer("bottom", false)}
      >
        {sideList("bottom")}
      </Drawer>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </div>
  );
}
