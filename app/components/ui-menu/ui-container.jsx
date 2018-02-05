import React from 'react';

export const UiContainer = (props) => {
  const { id, draggable, contextMenu, title, uiButton, children } = props;
  
  if (title === 'Tilemap Editor') {
    console.log('Container children ', children);
    console.log('Children props ', children.props);
  }

  return (
    <section
      id={ id }
      className="ui-container"
      data-draggable={ draggable }
      style={{ position: 'relative'  }}
    >
        { contextMenu }
      <h1 className={`ui-menu-bar ${ (draggable) ? 'draggable' : ''}`}>
        { title }
        { uiButton }
      </h1>
      { children }
    </section>
  );
};

export default UiContainer;
