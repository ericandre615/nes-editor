import React from 'react';
import Dialog from './dialog.jsx';

export default React.createClass({
  propTypes: {
    dialog: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <Dialog dialog={ this.props.dialog } />
    );
  }
});
