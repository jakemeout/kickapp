import React from "react";
import Navbar from "./components/Navbar";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { connect } from "react-redux";
import { getProfileFetch } from "./redux/actions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import BrowseContainer from "./components/BrowseContainer";
import "./styles/App.css";
import "./styles/Home.css";

const engine = new Styletron();

class App extends React.Component {
  componentDidMount = () => {
    this.props.getProfileFetch();
    
  };

  render() {
    console.log("APP", this.props);
    return (
      <Router>
        <StyletronProvider value={engine}>
          <BaseProvider theme={LightTheme}>
            <Navbar {...this.props} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/browse" component={BrowseContainer} />
            </Switch>
          </BaseProvider>
        </StyletronProvider>
      </Router>
    );
  }
}
function msp(state) {
  return state;
}

const mdp = (dispatch) => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  
});

export default connect(msp, mdp)(App);
