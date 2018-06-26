import React from "react";
import PropTypes from "prop-types";

import { Route, Switch } from "react-router";
import { connect } from "react-redux";

import AppChapter from "../containers/AppChapter";
import Home from "../components/Home";
import NoMatch from "../components/NoMatch";

import Admin from "../containers/Admin";

import ShowTheLocation from "./../components/ShowTheLocation";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <AppChapter />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Admin} />
          <Route path="/ch1/sec1" component={ShowTheLocation} />
          <Route path="/ch1/sec2" component={ShowTheLocation} />
          <Route path="/ch1/sec3" component={ShowTheLocation} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

Routes.propTypes = {
  selectedKey: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  const { selectedKey } = state;
  return {
    selectedKey
  };
}

export default connect(mapStateToProps)(Routes);
