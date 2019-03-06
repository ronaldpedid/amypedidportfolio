import React, { Component } from 'react';
import Media from 'react-media';
import styles from './navigation.scss';
import { Link } from 'react-router-dom';
const urls = ['/', '/about', '/resume'];

export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navMenuOpen: false
    }
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  openMenu() {
    this.setState({ navMenuOpen: true });
  }
  closeMenu() {
    this.setState({ navMenuOpen: false });
  }

  handleClick() {
    document.getElementById('siteTop').scrollIntoView();
    this.setState({ navMenuOpen: false });
  }
  render() {
    return (
      <nav className={styles.navigationContainer}>
        <h1 className={styles.navCopy}>Amy Pedid</h1>
        <Media query={{ maxWidth: 599 }}>
          {matches => matches ? (
            <div>
              {this.state.navMenuOpen ? <ArrowOpen onClick={this.closeMenu}
              /> : <ArrowClosed onClick={this.openMenu} />}
            </div>
          ) : (<ul className={styles.navList}>
            <li onClick={this.handleClick} className={styles.navListItem}><Link to={urls[0]}>Work</Link></li>
            <li onClick={this.handleClick} className={styles.navListItem}><Link to={urls[1]}>About</Link></li>
            <li className={styles.navListItem}><a href={urls[2]} download target="blank">Resume</a></li>
          </ul>)}
        </Media>
      </nav>
    )
  }
}


class ArrowOpen extends Component {
  render() {
    return (
      <div className={styles.arrowContainer}>
        <div onClick={this.props.onClick} className={styles.arrowUp}></div>
        <ul className={styles.navListMobile}>
          <Link to={urls[0]}><li>Work</li></Link>
          <Link to={urls[1]}><li>About</li></Link>
          <Link to={urls[2]}><li>Resume</li></Link>
        </ul>
      </div>
    )
  }
}

class ArrowClosed extends Component {
  render() {
    return (
      <div className={styles.arrowContainer}>
        <div onClick={this.props.onClick} className={styles.arrowUp1}></div>
      </div>
    )
  }
}
