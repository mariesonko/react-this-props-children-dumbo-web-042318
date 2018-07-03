// Code Goes Here
import React from "react"
import ReactDOM from 'react-dom';

 class Panel extends React.Component {
  render() {
    return (
      <div className="panel">
        <div className="panel-header">{this.props.title}</div>
        <div className="panel-body">{this.props.children}</div>
      </div>
    );
  }
}
 class MovieBrowser extends React.Component {
  render() {
    const currentPlayingTitle = 'Mad Max: Fury Road';

    return (
      <div className="movie-browser">
        {this.props.children}
      </div>
    );
  }
}

class SomeComponent extends React.Component {
  render() {
    const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
      return (
        <div className="some-component-special-class">{child}</div>
      );
    });

    return (
      <div className="some-component">
        <p>This component has {React.Children.count(this.props.children)} children.</p>
        {childrenWithWrapperDiv}
      </div>
    );
  }
}

ReactDOM.render(
  (<Panel title="Browse for movies"
  body={
    <div>
      <div>Movie stuff...</div>
      <div>Movie stuff...</div>
      <div>Movie stuff...</div>
      <div>Movie stuff...</div>
    </div>
  }  />),
  document.getElementById('root'));
