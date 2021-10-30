import React from "react";
import "./Ask.css";
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
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

interface MyProps {}

interface State {
  policyNumber: string;
  open: boolean;
  result: any;
  // editorState: EditorState;
}

interface RenderTree {
  id: string;
  name: string;
  children: RenderTree[];
}

export class Ask extends React.Component<MyProps, State> {
  public viewDoc: any = false;
  constructor(props: any) {
    super(props);

    this.state = {
      policyNumber: "",
      open: false,
      result: "",
      // editorState: EditorState.createEmpty(),
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

  public onChange() {}
  public render() {
    return (
      <div className="topMargin">
        <Paper className="paddingHead ml-3 w-100">
          <h4>Ask a public question</h4>
        </Paper>
        <Divider className="mt-3 ml-3 w-100" />
        <div className="">
          <Paper className="col-md-12 mt-3 ml-3 row qArea">
            <div className="col-12 pl-3 pt-3 pr-3 pb-3">
              <h5 className="fontCount">Title</h5>
              <p className="fontSize mt-1 mb-2">
                Be specific and imagine you’re asking a question to another
                person
              </p>
              <TextField
                id="outlined-basic"
                className="col-12"
                label="Ask question"
                variant="outlined"
              />

              <h5 className="fontCount mt-4">Body</h5>
              <p className="fontSize mt-1 mb-2">
                Include all the information someone would need to answer your
                question
              </p>
              <Editor />
              <h5 className="fontCount mt-4">Tags</h5>
              <p className="fontSize mt-1 mb-2">
                Add up to 5 tags to describe what your question is about
              </p>
              <Paper component="ul">
                <Chip label="Java" className="mt-2 mb-2 mr-2" />
                <Chip label="Python" className="mt-2 mb-2 mr-2" />
                <Chip label="node.js" className="mt-2 mb-2 mr-2" />
              </Paper>
            </div>
          </Paper>
          <button className="btn btn-primary mt-3 mb-5">
            Post your question
            <DoubleArrowIcon />
          </button>
        </div>
      </div>
    );
  }
}
export default Ask;
