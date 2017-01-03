import React from 'react';

export default React.createClass({
  render() {
    return(
     <button 
      onClick={ this.props.handleButton  } 
      className={ this.props.type }> 
        { this.props.text } 
      </button> 
    );
  }
});
