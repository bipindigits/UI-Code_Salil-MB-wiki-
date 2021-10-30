import React from "react";
import "./Tags.css";
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

export class Tags extends React.Component<MyProps, State> {
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
          <h4>Tags</h4>
          <Typography variant="body1" gutterBottom className="mt-2">
            A tag is a keyword or label that categorizes your question with
            other, similar questions. Using the right tags makes it easier for
            others to find and answer your question.
          </Typography>
          <div className="row col-12 mt-3">
            <div className="col-md-8">
              <TextField
                id="outlined-basic"
                label="Filter by tag name"
                variant="outlined"
                size="small"
              />
              <Button className="searchIcon" variant="outlined">
                <SearchIcon />
              </Button>
            </div>
            <div className="col-md-4">
              <ButtonGroup
                color="primary"
                aria-label="outlined secondary button group"
                className="float-right"
              >
                <Button>Popular</Button>
                <Button>Name</Button>
                <Button>New</Button>
              </ButtonGroup>
            </div>
          </div>
        </Paper>
        <Divider className="mt-3 ml-3 w-100" />
        <div className="row ml-3">
          <div className="col-md-3 cardPadding">
            <Card className="mt-3">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  <Chip
                    size="small"
                    label="Java"
                    color="primary"
                    className="mr-1"
                  />
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  Java is a high-level object oriented programming language. Use
                  this tag when you're having problems using or understanding
                  the language itself.
                </Typography>
              </CardContent>
              <CardActions>
                <Typography
                  color="textSecondary"
                  variant="caption"
                  display="block"
                  gutterBottom
                >
                  212 questions
                </Typography>
              </CardActions>
            </Card>
          </div>

          <div className="col-md-3 cardPadding">
            <Card className="mt-3">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  <Chip
                    size="small"
                    label="Python"
                    color="primary"
                    className="mr-1"
                  />
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  Python is a multi-paradigm, dynamically typed, multipurpose
                  programming language. It is designed to be quick to learn.
                </Typography>
              </CardContent>
              <CardActions>
                <Typography
                  color="textSecondary"
                  variant="caption"
                  display="block"
                  gutterBottom
                >
                  50 questions
                </Typography>
              </CardActions>
            </Card>
          </div>

          <div className="col-md-3 cardPadding">
            <Card className="mt-3">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  <Chip
                    size="small"
                    label="Javascript"
                    color="primary"
                    className="mr-1"
                  />
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  For questions regarding programming in ECMAScript
                  (JavaScript/JS) and its various dialects/implementations.
                </Typography>
              </CardContent>
              <CardActions>
                <Typography
                  color="textSecondary"
                  variant="caption"
                  display="block"
                  gutterBottom
                >
                  150 questions
                </Typography>
              </CardActions>
            </Card>
          </div>

          <div className="col-md-3 cardPadding">
            <Card className="mt-3">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  <Chip
                    size="small"
                    label="C#"
                    color="primary"
                    className="mr-1"
                  />
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  C# (pronounced "see sharp") is a high level, statically typed,
                  multi-paradigm programming language developed by Microsoft.
                </Typography>
              </CardContent>
              <CardActions>
                <Typography
                  color="textSecondary"
                  variant="caption"
                  display="block"
                  gutterBottom
                >
                  10 questions
                </Typography>
              </CardActions>
            </Card>
          </div>

          <div className="col-md-3 cardPadding">
            <Card className="mt-3">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  <Chip
                    size="small"
                    label="ReactJs"
                    color="primary"
                    className="mr-1"
                  />
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  React is a JavaScript library for building user interfaces. It
                  uses a declarative, component-based paradigm and aims to be
                  both efficient and flexible.
                </Typography>
              </CardContent>
              <CardActions>
                <Typography
                  color="textSecondary"
                  variant="caption"
                  display="block"
                  gutterBottom
                >
                  310 questions
                </Typography>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
export default Tags;
