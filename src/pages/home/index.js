import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ImageCard from "../../components/ImageCard";
import Drawer from "../../components/Drawer";

const styles = theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            Build your application with pre-built responsive components
          </Typography>
          <Typography component="p">
            Sample example below. Edit Home/index.js to see the implementation.
          </Typography>
          <br />
          <ImageCard />
          <br />
          <Typography variant="h5" component="h3">
            Click below to view all the components
          </Typography>
          <Drawer />
          <br />
          <Typography variant="h5" component="h3">
            What more you get...!!!
          </Typography>

          <ul>
            <li>Pre-configured ENV variables</li>
            <li>Industry level CSS framework</li>
            <li>Run Unit test with Jasmine</li>
            <li>Login component sample</li>
            <li>Responsiveness</li>
            <li>Debug mode disabled in production</li>
            <li>Proper Folder structure</li>
            <li>React Routing Enabled</li>
            <li>Theming</li>
          </ul>

          <br />
          <Typography variant="h5" component="h3">
            Roadmap
          </Typography>
          <br />

          <ul>
            <li>Redux</li>
            <li>Story Book</li>
            <li>Realtime API with redux and axios</li>
            <li>GraphQL</li>
            <li>Deployment</li>
            <li>Docker</li>
          </ul>

          <br />
          <Typography variant="h5" component="h3">
            README
          </Typography>
          <br />

          <dl>
            <dt>Start the client</dt>
            <dd>npm start</dd>
            <dd>
              Runs the app in the development mode. Open http://localhost:3000
              to view it in the browser.The page will reload if you make edits.
              You will also see any lint errors in the console.
            </dd>
            <dt>Run the test</dt>
            <dd>npm test</dd>
            <dd>Launches the test runner in the interactive watch mode.</dd>
            <dt>Build the production bundle</dt>
            <dd>npm run build</dd>
            <dd>
              Builds the app for production to the build folder. It correctly
              bundles React in production mode and optimizes the build for the
              best performance. The build is minified and the filenames include
              the hashes.
            </dd>
            <dt>Eject the webpack</dt>
            <dd>npm run eject</dd>
            <dd>
              Note: this is a one-way operation. Once you eject, you can’t go
              back! If you aren’t satisfied with the build tool and
              configuration choices, you can eject at any time. This command
              will remove the single build dependency from your project.
            </dd>
          </dl>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
