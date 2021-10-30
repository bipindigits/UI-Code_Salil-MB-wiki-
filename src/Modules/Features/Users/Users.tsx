import React from "react";
import "./Users.css";
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

export class Users extends React.Component<MyProps, State> {
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
          <h4>All Users</h4>
          <div className="row headArea">
            <div className="col-md-5">
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
            <div className="col-md-7">
              <ButtonGroup
                color="primary"
                aria-label="outlined secondary button group"
                className="float-right"
              >
                <Button>New Users</Button>
                <Button>Voters</Button>
                <Button>Editors</Button>
                <Button>Moderators</Button>
              </ButtonGroup>
            </div>
          </div>
        </Paper>
        <Divider className="mt-3 ml-3 w-100" />
        <div className="row ml-3">
          <div className="col-md-3 mt-2">
            <Paper>
              <div className="displyCont mt-2">
                <div className="col-md-3 mt-2">
                  <div className="gridView">
                    <Avatar variant="square" className="float-right mr-1 mt-2">
                      B
                    </Avatar>
                  </div>
                </div>
                <div className="col-md-9 mt-2">
                  <div>
                    <p className="colorHead marginBtn">Bipin</p>
                  </div>
                  <div className="fontSize">Bangalore, India, 653</div>
                  <div className="fontCount">281</div>
                  <div className="capsuleAlign">
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      className="capsuleTab pl-1 pt-1 pb-1 pr-1 mt-1 mr-1"
                    >
                      java
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      className="capsuleTab pl-1 pt-1 pb-1 pr-1 mt-1 mr-1"
                    >
                      angular
                    </Typography>
                  </div>
                </div>
              </div>
            </Paper>
          </div>
          <div className="col-md-3 mt-2">
            <Paper>
              <div className="displyCont mt-2">
                <div className="col-md-3 mt-2">
                  <div className="gridView">
                    <Avatar variant="square" className="float-right mr-1 mt-2">
                      B
                    </Avatar>
                  </div>
                </div>
                <div className="col-md-9 mt-2">
                  <div>
                    <p className="colorHead marginBtn">Bipin</p>
                  </div>
                  <div className="fontSize">Bangalore, India, 653</div>
                  <div className="fontCount">281</div>
                  <div className="capsuleAlign">
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      className="capsuleTab pl-1 pt-1 pb-1 pr-1 mt-1 mr-1"
                    >
                      java
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      className="capsuleTab pl-1 pt-1 pb-1 pr-1 mt-1 mr-1"
                    >
                      angular
                    </Typography>
                  </div>
                </div>
              </div>
            </Paper>
          </div>

          <div className="col-md-3 mt-2">
            <Paper>
              <div className="displyCont mt-2">
                <div className="col-md-3 mt-2">
                  <div className="gridView">
                    <Avatar variant="square" className="float-right mr-1 mt-2">
                      B
                    </Avatar>
                  </div>
                </div>
                <div className="col-md-9 mt-2">
                  <div>
                    <p className="colorHead marginBtn">Bipin</p>
                  </div>
                  <div className="fontSize">Bangalore, India, 653</div>
                  <div className="fontCount">281</div>
                  <div className="capsuleAlign">
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      className="capsuleTab pl-1 pt-1 pb-1 pr-1 mt-1 mr-1"
                    >
                      java
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      className="capsuleTab pl-1 pt-1 pb-1 pr-1 mt-1 mr-1"
                    >
                      angular
                    </Typography>
                  </div>
                </div>
              </div>
            </Paper>
          </div>

          <div className="col-md-3 mt-2">
            <Paper>
              <div className="displyCont mt-2">
                <div className="col-md-3 mt-2">
                  <div className="gridView">
                    <Avatar variant="square" className="float-right mr-1 mt-2">
                      B
                    </Avatar>
                  </div>
                </div>
                <div className="col-md-9 mt-2">
                  <div>
                    <p className="colorHead marginBtn">Bipin</p>
                  </div>
                  <div className="fontSize">Bangalore, India, 653</div>
                  <div className="fontCount">281</div>
                  <div className="capsuleAlign">
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      className="capsuleTab pl-1 pt-1 pb-1 pr-1 mt-1 mr-1"
                    >
                      java
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      className="capsuleTab pl-1 pt-1 pb-1 pr-1 mt-1 mr-1"
                    >
                      angular
                    </Typography>
                  </div>
                </div>
              </div>
            </Paper>
          </div>

          <div className="col-md-3 mt-2">
            <Paper>
              <div className="displyCont mt-2">
                <div className="col-md-3 mt-2">
                  <div className="gridView">
                    <Avatar variant="square" className="float-right mr-1 mt-2">
                      B
                    </Avatar>
                  </div>
                </div>
                <div className="col-md-9 mt-2">
                  <div>
                    <p className="colorHead marginBtn">Bipin</p>
                  </div>
                  <div className="fontSize">Bangalore, India, 653</div>
                  <div className="fontCount">281</div>
                  <div className="capsuleAlign">
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      className="capsuleTab pl-1 pt-1 pb-1 pr-1 mt-1 mr-1"
                    >
                      java
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      className="capsuleTab pl-1 pt-1 pb-1 pr-1 mt-1 mr-1"
                    >
                      angular
                    </Typography>
                  </div>
                </div>
              </div>
            </Paper>
          </div>

          <div className="col-md-3 mt-2">
            <Paper>
              <div className="displyCont mt-2">
                <div className="col-md-3 mt-2">
                  <div className="gridView">
                    <Avatar variant="square" className="float-right mr-1 mt-2">
                      B
                    </Avatar>
                  </div>
                </div>
                <div className="col-md-9 mt-2">
                  <div>
                    <p className="colorHead marginBtn">Bipin</p>
                  </div>
                  <div className="fontSize">Bangalore, India, 653</div>
                  <div className="fontCount">281</div>
                  <div className="capsuleAlign">
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      className="capsuleTab pl-1 pt-1 pb-1 pr-1 mt-1 mr-1"
                    >
                      java
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      className="capsuleTab pl-1 pt-1 pb-1 pr-1 mt-1 mr-1"
                    >
                      angular
                    </Typography>
                  </div>
                </div>
              </div>
            </Paper>
          </div>

          <div className="col-md-3 mt-2">
            <Paper>
              <div className="displyCont mt-2">
                <div className="col-md-3 mt-2">
                  <div className="gridView">
                    <Avatar variant="square" className="float-right mr-1 mt-2">
                      B
                    </Avatar>
                  </div>
                </div>
                <div className="col-md-9 mt-2">
                  <div>
                    <p className="colorHead marginBtn">Bipin</p>
                  </div>
                  <div className="fontSize">Bangalore, India, 653</div>
                  <div className="fontCount">281</div>
                  <div className="capsuleAlign">
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      className="capsuleTab pl-1 pt-1 pb-1 pr-1 mt-1 mr-1"
                    >
                      java
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      className="capsuleTab pl-1 pt-1 pb-1 pr-1 mt-1 mr-1"
                    >
                      angular
                    </Typography>
                  </div>
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}
export default Users;
