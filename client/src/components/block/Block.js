import React, { Component } from 'react';
import styles from './block.scss';
import { Link } from 'react-router-dom';

export class DisplayBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false
    }
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onMouseEnter() {
    this.setState({ isHovering: true });
  }

  onMouseLeave() {
    this.setState({ isHovering: false });
  }
  handleClick() {
    document.getElementById('siteTop').scrollIntoView();
  }
  render() {
    return (
      <div
        className={this.props.className}
        onClick={this.handleClick}
        campid={this.props.campid}
        desc={this.props.desc}
        desc1={this.props.desc1}
        desc2={this.props.desc2}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>
        {this.state.isHovering ?
          <div className={styles.hoverBlock}>
            <h1>{this.props.desc}</h1>
            <h1>{this.props.desc1}</h1>
            <h1>{this.props.desc2}</h1>
          </div> : ''}
      </div>
    )
  }
}

export class WalmartBlock extends Component {
  render() {
    return (
      <div>
        <Link to="/walmart">
          <DisplayBlock
            className={styles.wmblock}
            campid={'walmart'}
            desc={'USER EXPERIENCE'}
            desc1={'USER INTERFACE'}
            desc2={null}
          >

          </DisplayBlock>
        </Link>

      </div>

    )
  }
}

export class CaribouBlock extends Component {
  render() {
    return (
      <Link to="/caribou">
        <DisplayBlock
          className={styles.cariblock}
          campid={'caribou'}
          desc={'SHOPPER MARKETING'}
          desc1={'OMNI-CHANNEL'}
          desc2={null}
        >
        </DisplayBlock>
      </Link>
    )
  }
}

export class TribeBlock extends Component {
  render() {
    return (
      <Link to="/tribe">
        <DisplayBlock
          className={styles.tribeblock}
          campid={'tribe'}
          desc={'PHOTOGRAPHY'}
          desc1={'SHOPPER MARKETING'}
          desc2={null}
        >
        </DisplayBlock>
      </Link>
    )
  }
}

export class ShopBlock extends Component {
  render() {
    return (
      <Link to="/shoptology">
        <DisplayBlock
          className={styles.shpblock}
          campid={'shoptology'}
          desc="ILLUSTRATIONS"
          desc1="GRAPHIC DESIGN"
          desc2={null}
        >
        </DisplayBlock>
      </Link>
    )
  }
}

