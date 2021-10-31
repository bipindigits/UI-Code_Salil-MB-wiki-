import React from "react";
import { Avatar, StyleRules, Tab, Tabs, WithStyles, withStyles } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import clsx from "clsx";
import "./Home.css";
import { connect } from "react-redux";
import { AppState } from "Store";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Main from "Modules/Features/Main/Main";
import Questions from "Modules/Features/Questions/Questions";
import Users from "Modules/Features/Users/Users";
import { Tags } from "Modules/Features/Tags/Tags";
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { Ask } from "Modules/Features/Ask/Ask";
import Footer from "../Footer/Footer";
import { deepOrange } from '@material-ui/core/colors';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const drawerWidth = 240;

const styles = (theme: Theme): StyleRules =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    root1: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
  });

export interface Props extends WithStyles<typeof styles> {}
interface State {
  activeMenu: number;
  showComment: boolean;
  activeRightTab: number;
}

export class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeMenu: 1,
      showComment: false,
      activeRightTab: 0
    };
    this.menuClicked = this.menuClicked.bind(this);
    this.rightTabMenuChange = this.rightTabMenuChange.bind(this);
  }

  public menuClicked(num: number) {
    console.log("clicked=", num);
    this.setState({
      activeMenu: num,
    });
  }
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />

        {this.headerSection()}
        <div className="row w-100">
          <div className="col-md-2">{this.sideBar()}</div>
          <div className="col-md-8">{this.mainContentArea()}</div>
          <div className="col-md-2">{this.askQuestion()}</div>

        </div>
        <Footer />
      </div>
    );
  }
  public rightTabMenuChange(event: React.ChangeEvent<{}>, value: number) {
    this.setState({
      activeRightTab: value,
    });
  }

  public askQuestion() {
    const { classes } = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <button className="btn btn-primary">Ask Question</button>
      </main>
    );
  }
  public showComment() {
    this.setState({
      showComment: this.state.showComment ? false : true,
    });
  }
  public mainContentArea() {
    return (
      <div>
        {this.state.activeMenu === 1 ? <Main /> : ""}
        {this.state.activeMenu === 2 ? <Questions /> : ""}
        {this.state.activeMenu === 3 ? <Tags /> : ""}
        {this.state.activeMenu === 4 ? <Users /> : ""}
        {this.state.activeMenu === 5 ? <Ask /> : ""}
      </div>
    );
  }

  public sideBar() {
    const { classes } = this.props;
    return (
      <div>
        <Drawer
          className={clsx (classes.drawer,"heght")}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List className="click">
              <ListItem
                button
                className= {this.state.activeMenu === 1 ? "activeMenu" : ""}
                key="1"
                onClick={() => this.menuClicked(1)}
              >
                <ListItemIcon>
                  <HomeIcon className= {this.state.activeMenu === 1 ? "activeIcon" : ""} />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem 
              button 
              className= {this.state.activeMenu === 2 ? "activeMenu" : ""}
              onClick={() => this.menuClicked(2)}>
                <ListItemIcon>
                  <QuestionAnswerIcon className= {this.state.activeMenu === 2 ? "activeIcon" : ""}/>
                </ListItemIcon>
                <ListItemText primary="Questions" />
              </ListItem>

              <ListItem
                button
                className= {this.state.activeMenu === 3 ? "activeMenu" : ""}
                key="2"
                onClick={() => this.menuClicked(3)}
              >
                <ListItemIcon>
                  <LocalOfferIcon className= {this.state.activeMenu === 3 ? "activeIcon" : ""}/>
                </ListItemIcon>
                <ListItemText primary="Tags" />
              </ListItem>

              <ListItem
                button
                className= {this.state.activeMenu === 4 ? "activeMenu" : ""}
                key="5"
                onClick={() => this.menuClicked(4)}
              >
                <ListItemIcon>
                  <PeopleAltIcon className= {this.state.activeMenu === 4 ? "activeIcon" : ""}/>
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItem>

              <ListItem
                button
                className= {this.state.activeMenu === 5 ? "activeMenu" : ""}
                key="5"
                onClick={() => this.menuClicked(5)}
              >
                <ListItemIcon>
                  <BorderColorIcon className= {this.state.activeMenu === 5 ? "activeIcon" : ""}/>
                </ListItemIcon>
                <ListItemText primary="Ask Question" />
              </ListItem>
            </List>
            <Divider />
          </div>
        </Drawer>
      </div>
    );
  }

  private headerSection() {
    const { classes } = this.props;
    return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap className="nameWidth">
            MB Wiki
          </Typography>
          <Paper
            component="form"
            className={clsx(classes.root1, "searchWidth")}
          >
            <IconButton className={classes.iconButton} aria-label="menu">
              <MenuIcon />
            </IconButton>
            <InputBase
              className={classes.input}
              placeholder="Search Questions"
              inputProps={{ "aria-label": "search questions" }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton
              color="primary"
              className={classes.iconButton}
              aria-label="directions"
            >
              <DirectionsIcon />
            </IconButton>
          </Paper>
              <Avatar style={{background: "orange"}} className="ml-3"><AccountCircleIcon style={{fontSize: "40px",}}/></Avatar>
              <span className="ml-2">Bipin Dasan </span>
        </Toolbar>
      </AppBar>
    );
  }
}
const mapStateToProps = (state: AppState) => ({});

// export default connect(mapStateToProps, {})(withStyles(styles)(Home));
export default connect(mapStateToProps)(withStyles(styles)(Home));
