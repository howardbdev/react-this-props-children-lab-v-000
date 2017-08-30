import React from 'react';
import PropTypes from 'prop-types';

export default class ThemedDecorations extends React.Component {
  render() {

    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
          className: this.props.theme,
        });
      });

    return(
      <div className="themed-decorations">
        {children}
      </div>
    );
  }
}
