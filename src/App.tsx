import React from "react";
import "./App.css";
import {
  Theme,
  createStyles,
  StyleRules,
  WithStyles,
  withStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core";
import Home from "./Modules/Shared/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { blue } from "@material-ui/core/colors";
import Footer from "./Modules/Shared/Footer/Footer";


// lazy load modules
  const Tags = React.lazy(() =>
  import("./Modules/Features/Tags/Tags")
  );
  const Questions = React.lazy(() =>
  import("./Modules/Features/Questions/Questions")
  );
  const Users = React.lazy(() =>
  import("./Modules/Features/Users/Users")
  );
  const Main = React.lazy(() =>
  import("./Modules/Features/Main/Main")
  );
  const Ask = React.lazy(() =>
  import("./Modules/Features/Ask/Ask")
  );
interface MyProps extends WithStyles<typeof styles> {}

interface MyState {}

// specific styling for material ui
const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  });

// creating custom material theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
    }
  }
});
class App extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Router>
          <ThemeProvider theme={theme}>
            {/* <Home/> */}
            <React.Suspense /* lazy load loader */
              fallback={
                <div className="divLoader">
                  <svg
                    className="svgLoader"
                    viewBox="0 0 100 100"
                    width="10em"
                    height="10em"
                  >
                    <path
                      ng-attr-d="{{config.pathCmd}}"
                      ng-attr-fill="{{config.color}}"
                      stroke="none"
                      d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
                      fill="#51CACC"
                      transform="rotate(179.719 50 51)"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        calcMode="linear"
                        values="0 50 51;360 50 51"
                        keyTimes="0;1"
                        dur="1s"
                        begin="0s"
                        repeatCount="indefinite"
                      ></animateTransform>
                    </path>
                  </svg>
                </div>
              }
            >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Tags" component={Tags} />
                <Route path="/Questions" component={Questions} />
                <Route path="/Users" component={Users} />
                <Route path="/Main" component={Main} />
                <Route path="/Ask" component={Ask} />
              </Switch>
            </React.Suspense>
          </ThemeProvider>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);
