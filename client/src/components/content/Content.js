import React, { Component } from 'react';
import styles from './content.scss';

export class ContentBlock extends Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    )
  }
}

export class WMContent extends Component {
  render() {
    return (
      <ContentBlock className={styles.contentContainer}>
        Hello World!!!
      </ContentBlock>
    )
  }
}

export class CBContent extends Component {
  render() {
    return (
      <ContentBlock className={styles.contentContainer}>
        Hello World Caribou!!!
      </ContentBlock>
    )
  }
}

