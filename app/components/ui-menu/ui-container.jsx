import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

const padding = {
  top: 32,
  right: 12,
  bottom: 12,
  left: 12,
};

const defaultStyle = {
  position: 'relative',
  width: '128px',
  padding: '32px 12px 12px',
};

const flattenChildren = nodes => nodes.reduce((acc, curr) => acc.concat(
  (curr.childNodes.length) ? flattenChildren(Array.from(curr.childNodes)) : curr
), []);

const filterDOMElements = nodes => nodes.filter(node => node instanceof HTMLElement);
const getLargestValue = (nodes, prop = 'width') => nodes
  .map(child => child[prop])
  .reduce((acc, curr) => ((curr > acc) ? curr : acc), '');

export class UiContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: props.width || defaultStyle.width,
      height: props.height || defaultStyle.height,
    };

    this.getWidth = this.getWidth.bind(this);
  }

  getWidth(node) {
    const childNodes = Array.from(node.childNodes);
    const flatNodes = filterDOMElements(flattenChildren(childNodes));
    const maxWidth = getLargestValue(flatNodes, 'offsetWidth');

    this.setState({
      width: `${maxWidth + padding.right + padding.left}px`,
    });
  }

  render() {
    const { id, draggable, contextMenu, title, uiButton, children, padding } = this.props;
    const { width } = this.state

    const currentStyle = Object.assign({},
      defaultStyle,
      { width });

    return (
      <section
        id={ id }
        className="ui-container"
        data-draggable={ draggable }
        style={ currentStyle }
        ref={ this.getWidth }
      >
          { contextMenu }
        <h1 className={`ui-menu-bar ${ (draggable) ? 'draggable' : ''}`}>
          { title }
          { uiButton }
        </h1>
        { children }
      </section>
    );
  }
}

export default UiContainer;
