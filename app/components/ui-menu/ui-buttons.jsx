import React from 'react';
import { Button } from '../elements';

import './ui-menu.less';

const UiMenuButton = React.createClass({

  render() {
    return (
      <Button
        title=""
        classNames="ui-menu-button icon-th-list"
        onClick={ this.props.onClick }
      />
    );
  }
});

export default UiMenuButton;
