import React from 'react';
import PropTypes from 'prop-types';

export default class ThemedDecorations extends React.Component {
  render() {

    const children = React.Children.map(this.props.children, child => {
      return (
        <h2 className={this.props.theme}>{child}</h2>
      );
    })

    return(
      <div className="themed-decorations">
        {children}
      </div>
    );
  }
}
