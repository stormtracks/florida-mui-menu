import React from "react";
import PropTypes from "prop-types";

import KeyContainer from "./../containers/KeyContainer";

const GetParamsFromMatch = match => {
  const url = match.url;
  let result = url.split("/");
  let ary = [result[1], result[2]];
  return ary;
};

// A simple component that shows the pathname of the current location
class ShowTheLocation extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    // leave next line here just to show what props
    // from the react-router are actually available
    // const { match, location, history } = this.props
    const { match } = this.props;

    const result = GetParamsFromMatch(match);

    return (
      <div>
        <div>
          <KeyContainer />
        </div>
        <div>
          <h3>Chapter: {result[0]}</h3>
          <h4>Section: {result[1]}</h4>
        </div>
      </div>
    );
  }
}

export default ShowTheLocation;
