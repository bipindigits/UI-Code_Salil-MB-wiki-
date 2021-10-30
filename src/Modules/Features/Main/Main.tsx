import React from "react";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  FormControlLabel,
  Input,
  StyleRules,
  Tab,
  Tabs,
  TextField,
  WithStyles,
  withStyles,
} from "@material-ui/core";
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
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import clsx from "clsx";
import "./Main.css";
import { connect } from "react-redux";
import { AppState } from "Store";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
import Chip from "@material-ui/core/Chip";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import CheckIcon from "@material-ui/icons/Check";
import HomeIcon from "@material-ui/icons/Home";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

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
  });

export interface Props extends WithStyles<typeof styles> {}
interface State {
  activeMenu: number;
  showComment: boolean;
}
class Main extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeMenu: 0,
      showComment: false,
    };
  }

  public render() {
    const { classes } = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Card className={classes.root}>
          <CardHeader title="How do you convert WSDLs to Java classes using Eclipse?" />
          <CardActions>
            <Typography
              className="pl-2"
              variant="body2"
              color="textSecondary"
              component="p"
            >
              Asked 1 years, 9 months ago Active 2 months ago Viewed 2.5m times
            </Typography>
          </CardActions>
        </Card>
        <Paper elevation={3}>
          <div className="card flex-row flex-wrap">
            {/* <div className="card-header border-0">21</div>  */}
            <div className="card-block px-2">
              <Typography variant="body1" gutterBottom className="mt-5">
                I have a WSDL file (or, more precisely, its URL). I need to
                convert it to Java classes. I also need to provide tests for the
                web service it describes. I'm new to web services, so could
                someone tell me how to convert WSDLs to Java?
              </Typography>
              <div className="card cardCode">
                wsimport -keep -s (name of folder where you want to store
                generated code) urlToWsdl
              </div>
              <Typography variant="body1" gutterBottom className="mt-2 mb-3">
                I use Eclipse JEE Kepler. Maybe there are some plugins to do
                this automatically?
              </Typography>
            </div>
            <div className="w-100"></div>
            <div className="card-footer w-100 text-muted">
              <Chip size="small" label="#Java" color="primary" className="mr-1" />
              <Chip size="small" label="#WSDL" color="primary" className="mr-1" />
              <Chip size="small" label="#Soap" color="primary" className="mr-1" />
              
              <div className="float-right">
                <Typography className="lineSpace" variant="body2" gutterBottom>
                  asked Jan 17 '11 at 18:29
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Bipin
                </Typography>
              </div>
              <Avatar
                variant="square"
                className={clsx(classes.square, "float-right mr-1")}
              >
                B
              </Avatar>
            </div>
          </div>
          <Divider />
          <Paper elevation={3}>
            <Typography variant="body2" className="ml-5 mt-2" gutterBottom>
              I have two dynamic web projects in eclipse and I can only select
              the "other" project when running this wizard. They both seem to
              have the same setup. Servlet 2.5 etc. Any clues?
              <div className="float-right mr-2">
                – <span className="comment">Salil </span>Nov 18 '14 at 19:35
              </div>
            </Typography>
            <Divider />
            <Typography variant="body2" className="ml-5 mt-2" gutterBottom>
              @Salil I have the same question and I am using Eclipse Indigo I
              did right click on one of my projects there is a new other but
              there is no Web Services option after that, would you please help
              me figure it out?
              <div className="float-right mr-2">
                – <span className="comment">Bipin </span>Aug 10 '16 at 13:31
              </div>
            </Typography>
            <Divider />
            <Typography variant="subtitle2" className="ml-1" gutterBottom>
              <a
                onClick={() => this.showComment()}
                className="comment ml-1 mt-1 mb-1"
              >
                Add Comment
              </a>
            </Typography>
            {this.state.showComment ? (
              <section className="card">
                <div className="card-header">
                  <ul
                    className="nav nav-tabs card-header-tabs"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="posts-tab"
                        data-toggle="tab"
                        href="#posts"
                        role="tab"
                        aria-controls="posts"
                        aria-selected="true"
                      >
                        Make a Post
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="posts"
                      role="tabpanel"
                      aria-labelledby="posts-tab"
                    >
                      <div className="form-group">
                        <label className="sr-only">post</label>
                        <textarea
                          className="form-control"
                          id="message"
                          placeholder="Comment goes here..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <button type="submit" className="btn btn-primary">
                      Post
                    </button>
                  </div>
                </div>
              </section>
            ) : null}
          </Paper>
        </Paper>
        <Paper>
          <div className="row col-12">
            <h4 className="pt-2 pl-3 pb-2">Answers</h4>
          </div>
          <Divider />
          <div className="card flex-row flex-wrap card-horizontal">
            <div className="card-header border-0">
              <ArrowDropUpIcon />
              <h5>21</h5> <ArrowDropDownIcon /> <CheckIcon className="done" />
            </div>
            <div className="card-block px-2">
              <Typography variant="body1" gutterBottom className="mt-5">
                In Eclipse Kepler it is very easy to generate Web Service Client
                classes,You can achieve this by following steps .
              </Typography>
              <div className="card cardCode">
                RightClick on any Project-Create New Other -Web Services-Web
                Service Client-Then paste the wsdl url(or location) in Service
                Definition-Next-Finish
              </div>
              <Typography variant="body1" gutterBottom className="mt-2 mb-3">
                You will see the generated classes are inside your src folder.
                NOTE :Without eclipse also you can generate client classes from
                wsdl file by using wsimport command utility which ships with
                JDK. refer this link Create Web service client using wsdl
              </Typography>
              <Divider />
              <Paper elevation={3}>
                <Typography variant="body2" className="ml-5 mt-2" gutterBottom>
                  I have two dynamic web projects in eclipse and I can only
                  select the "other" project when running this wizard. They both
                  seem to have the same setup. Servlet 2.5 etc. Any clues?
                  <div className="float-right mr-2">
                    – <span className="comment">Salil </span>Nov 18 '14 at 19:35
                  </div>
                </Typography>
                <Divider />
                <Typography variant="body2" className="ml-5 mt-2" gutterBottom>
                  @Salil I have the same question and I am using Eclipse Indigo
                  I did right click on one of my projects there is a new other
                  but there is no Web Services option after that, would you
                  please help me figure it out?
                  <div className="float-right mr-2">
                    – <span className="comment">Bipin </span>Aug 10 '16 at 13:31
                  </div>
                </Typography>
                <Divider />
                <Typography variant="subtitle2" className="ml-1" gutterBottom>
                  <a
                    onClick={() => this.showComment()}
                    className="comment ml-1 mt-1 mb-1"
                  >
                    Add Comment
                  </a>
                </Typography>
                {this.state.showComment ? (
                  <section className="card">
                    <div className="card-header">
                      <ul
                        className="nav nav-tabs card-header-tabs"
                        id="myTab"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="posts-tab"
                            data-toggle="tab"
                            href="#posts"
                            role="tab"
                            aria-controls="posts"
                            aria-selected="true"
                          >
                            Make a Post
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="posts"
                          role="tabpanel"
                          aria-labelledby="posts-tab"
                        >
                          <div className="form-group">
                            <label className="sr-only">post</label>
                            <textarea
                              className="form-control"
                              id="message"
                              placeholder="Comment goes here..."
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <button type="submit" className="btn btn-primary">
                          Post
                        </button>
                      </div>
                    </div>
                  </section>
                ) : null}
              </Paper>
            </div>
          </div>
        </Paper>
        <div className={classes.toolbar} />
      </main>
    );
  }

  public showComment() {
    this.setState({
      showComment: this.state.showComment ? false : true,
    });
  }
}
const mapStateToProps = (state: AppState) => ({});

export default connect(mapStateToProps, {})(withStyles(styles)(Main));
