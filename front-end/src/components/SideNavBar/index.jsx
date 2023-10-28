import React, { useState, useContext } from "react";
import { AppContext } from "../AppContext.js";
import { Link, Outlet, useLocation } from "react-router-dom";

import { ROLE } from "../../constants";

import { makeStyles } from "@mui/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SettingsIcon from "@mui/icons-material/Settings";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import { Grid } from "@material-ui/core";
import "../../components/css/style.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  navBar: {
    width: "200px",
    backgroundColor: "#f2f2f2",
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: "40px",
  },
  childContent: {
    paddingLeft: "300px",
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "#827170",
    textDecoration: "none",
  },

  activeLink: {
    color: "#030303", // Change the color for the active tab as desired
    textDecoration: "none",
  },
}));

const SideNavBar = () => {
  const classes = useStyles();
  const location = useLocation(); // If using React Router, this helps in determining the current path

  const { role } = useContext(AppContext);

  return (
    <>
      <div className={classes.navBar}>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          position="static"
          open={true}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div>
            {role === ROLE.ADMIN && (
              <>
                <List>
                  <Link
                    to="/home"
                    className={`${classes.link} ${
                      location.pathname === "/home" ? classes.activeLink : ""
                    }`}
                  >
                    <ListItem>
                      <ListItemIcon>
                        <ImportContactsIcon />
                      </ListItemIcon>
                      <ListItemText primary="Home" />
                    </ListItem>
                  </Link>
                  <Link
                    to="/lms/Courses"
                    className={`${classes.link} ${
                      location.pathname === "/lms/Courses"
                        ? classes.activeLink
                        : ""
                    }`}
                  >
                    <ListItem>
                      <ListItemIcon>
                        <ImportContactsIcon />
                      </ListItemIcon>
                      <ListItemText primary="Courses" />
                    </ListItem>
                  </Link>
                </List>
                <Divider />
                <List>
                  <Link
                    to="/lms/Farmers"
                    className={`${classes.link} ${
                      location.pathname === "/lms/farmers"
                        ? classes.activeLink
                        : ""
                    }`}
                  >
                    <ListItem>
                      <ListItemIcon>
                        <AccountBoxIcon />
                      </ListItemIcon>
                      <ListItemText primary="Farmers" />
                    </ListItem>
                  </Link>
                </List>
              </>
            )}
            <List>
              <Link
                to="/"
                className={`${classes.link} ${
                  location.pathname === "/" ? classes.activeLink : ""
                }`}
              >
                <ListItem>
                  <ListItemIcon>
                    <MeetingRoomIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItem>
              </Link>
            </List>
          </div>
        </Drawer>
      </div>
      <Grid className={classes.childContent}>
        <div className="container-fluid px-5 d-none d-lg-block">
          <div className="row gx-5 py-3 align-items-center">
            <div className="col-lg-3">
              <div className="d-flex align-items-center justify-content-start">
                <i className="bi bi-phone-vibrate fs-1 text-primary me-2"></i>
                <h2 className="mb-0">+012 345 6789</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center justify-content-center">
                <a href="index.html" className="navbar-brand ms-lg-5">
                  <h1 className="m-0 display-4 text-primary">
                    <span className="text-secondary">Modern</span>Farm
                  </h1>
                </a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="d-flex align-items-center justify-content-end">
                <a
                  className="btn btn-primary btn-square rounded-circle me-2"
                  href="#"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-primary btn-square rounded-circle me-2"
                  href="#"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-primary btn-square rounded-circle me-2"
                  href="#"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  className="btn btn-primary btn-square rounded-circle"
                  href="#"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </Grid>
    </>
  );
};

export default SideNavBar;
