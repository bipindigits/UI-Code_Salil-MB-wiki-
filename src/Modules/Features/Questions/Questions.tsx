import React from "react";
import "./Questions.css";
import {
  makeStyles,
  TextField,
  Theme,
  createStyles,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Modal,
  ButtonGroup,
  Divider,
  IconButton,
  InputBase,
  Card,
  CardActions,
  CardContent,
  Chip,
  Avatar,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import doc from "./../../../img/doc.png";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";

interface MyProps {}

interface State {
  policyNumber: string;
  open: boolean;
  result: any;
}

interface RenderTree {
  id: string;
  name: string;
  children: RenderTree[];
}

export class Questions extends React.Component<MyProps, State> {
  public viewDoc: any = false;
  constructor(props: any) {
    super(props);
    this.state = {
      policyNumber: "",
      open: false,
      result: "",
    };
  }
  public useStyles = makeStyles((theme: Theme) =>
    createStyles({
      margin: {
        margin: theme.spacing(1),
      },
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    })
  );
  public classes: any = this.useStyles;

  public render() {
    return (
      <div className="topMargin">
        <Paper className="paddingHead ml-3 w-100">
        <h4>All Questions</h4>
        <div className="row col-12 mt-5 headArea">
          <div className="col-md-6">
            <Typography variant="body1" gutterBottom>
              1025 questions
            </Typography>
          </div>
          <div className="col-md-6">
            <ButtonGroup
              color="primary"
              aria-label="outlined secondary button group"
              className="float-right"
            >
              <Button>Newest</Button>
              <Button>Active</Button>
              <Button>Bountied</Button>
              <Button>Unanswered</Button>
            </ButtonGroup>
          </div>
        </div>
        </Paper>
        <Divider className="mt-3 ml-3 w-100" />
        <div className="">
          <Paper className="col-md-12 ml-3 mt-3 row">
            <div className="paddingRound mt-2">
              <div className="gridView">
                <span className="countFont"> 0</span>{" "}
                <span className="textColr">Votes</span>
              </div>
              <div className="gridView">
                <span className="countFont"> 0</span>{" "}
                <span className="textColr">Answers</span>
              </div>
              <div className="gridView">
                <span className="countFont"> 33</span>{" "}
                <span className="textColr">Views</span>
              </div>
            </div>
            <div className="col-md-10 mt-2">
              <div>
                <Typography variant="h5" className="colorHead" gutterBottom>
                  Why is the guard invalid in this loop invariant?
                </Typography>
              </div>
              <div>
                I'm trying to create a loop invariant to check if all the
                elements of an array with an even index have the number 2on them
                (program to find prime numbers, in this step it's generating the
                SPF). ...
              </div>
              <div className="capsuleAlign">
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  className="capsuleTab pl-2 pt-1 pb-1 pr-2 mt-2 mr-2"
                >
                  java
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  className="capsuleTab pl-2 pt-1 pb-1 pr-2 mt-2 mr-2"
                >
                  React
                </Typography>
              </div>
              <div>
                <div className="float-right">
                  <Typography
                    className="lineSpace"
                    variant="body2"
                    gutterBottom
                  >
                    asked Sep 17 '21 at 18:29
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    <span className="comment">Bipin</span>
                  </Typography>
                </div>
                <Avatar variant="square" className="float-right mr-1 mb-2 mt-2">
                  B
                </Avatar>
              </div>
            </div>
          </Paper>

          <Paper className="col-md-12 ml-3 mt-3 row">
            <div className="paddingRound mt-2">
              <div className="gridView">
                <span className="countFont"> 2</span>{" "}
                <span className="textColr">Votes</span>
              </div>
              <div className="gridView">
                <span className="countFont"> 21</span>{" "}
                <span className="textColr">Answers</span>
              </div>
              <div className="gridView">
                <span className="countFont"> 326</span>{" "}
                <span className="textColr">Views</span>
              </div>
            </div>
            <div className="col-md-10 mt-2">
              <div>
                <Typography variant="h5" className="colorHead" gutterBottom>
                  How to manually fix npm vulnerabilities?
                </Typography>
              </div>
              <div>
                When I'm trying to run 'npm update' I get 31 vulnerabilities.
                npm audit fix and npm audit fix --force. Do not seem to help. I
                think I need to manually update the vulnerabilities. But how do
                I do this?
              </div>
              <div className="capsuleAlign">
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  className="capsuleTab pl-2 pt-1 pb-1 pr-2 mt-2 mr-2"
                >
                  node.js
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  className="capsuleTab pl-2 pt-1 pb-1 pr-2 mt-2 mr-2"
                >
                  react-native
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  className="capsuleTab pl-2 pt-1 pb-1 pr-2 mt-2 mr-2"
                >
                  npm
                </Typography>
              </div>
              <div>
                <div className="float-right">
                  <Typography
                    className="lineSpace"
                    variant="body2"
                    gutterBottom
                  >
                    asked Oct 28 '21 at 8:21
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    <span className="comment">Salil</span>
                  </Typography>
                </div>
                <Avatar variant="square" className="float-right mr-1 mb-2 mt-2">
                  S
                </Avatar>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}
export default Questions;
