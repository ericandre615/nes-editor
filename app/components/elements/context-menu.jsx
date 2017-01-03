import React from 'react';
import ContextMenuItem from './context-menu-item.jsx';

import './context-menu.less';

const ContextMenu = React.createClass({
  propTypes: {
    menuItems: React.PropTypes.array
  },

  getDefaultProps() {
    return {
      menuItems: [
        {
          id: 123,
          title: 'Save as...',
          onSelect() { console.log('selected') }
        }
      ]
    };
  },

  render() {
    let menuItems = this.props.menuItems.map(item => {
      return (
        <ContextMenuItem
          key={ item.id }
          title={ item.title }
          onSelect={ item.onSelect.bind(this) } 
        />
      );
    });

    return (
      <div
        className="context-menu"
        onMouseLeave={ this.props.onMouseLeave }
        onClick={ this.props.onClick }
      >
        <ul>
          { menuItems }
        </ul>
      </div>
    );
  }
});

export default ContextMenu;
