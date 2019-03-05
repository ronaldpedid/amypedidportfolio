import React, { Component } from 'react';
import Media from 'react-media';
import styles from './breadcrumbs.scss';

export class Breadcrumbs extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    document.getElementById('siteTop').scrollIntoView();
  }
  render() {
    return (
      <div className={styles.breadcrumbs} onClick={this.handleClick}>
        {this.props.children}
      </div>
    )
  }
}

export class Crumble extends Component {
  render() {
    return (
      <div className={styles.crumble}>
        {this.props.children}
      </div>

    )
  }
}

export class Crumbles extends Component {
  render() {
    return (
      <div className={styles.crumbles}>
        {this.props.children}
      </div>
    )
  }
}