import React from 'react';

const UiContainer = React.createClass({

  render() {
    return (
      <section
        id={ this.props.id }
        className="ui-container"
        data-draggable={ this.props.draggable }
      >
          { this.props.contextMenu }
        <h1 className={`ui-menu-bar ${ (this.props.draggable) ? 'draggable' : ''}`}>
          { this.props.title }
          { this.props.uiButton }
        </h1>
        { this.props.children }
      </section>
    );
  }
});

export default UiContainer;
