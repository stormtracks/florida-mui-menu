import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectKey } from "../actions";
import Picker from "../components/Picker";

class KeyContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(nextDatadir) {
    const { selectKey } = this.props;
    selectKey(nextDatadir);
  }

  render() {
    const { keys, selectedKey } = this.props;
    return (
      <div>
        <Picker
          value={selectedKey}
          onChange={this.handleChange}
          options={keys}
        />
      </div>
    );
  }
}

KeyContainer.propTypes = {
  keys: PropTypes.array.isRequired,
  selectedKey: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  const { keys, selectedKey } = state;
  return {
    keys,
    selectedKey
  };
}

export default connect(mapStateToProps, { selectKey })(KeyContainer);
