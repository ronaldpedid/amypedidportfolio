import React, { Component } from 'react';
import Media from 'react-media';
import styles from './navigation.scss';
import { Link } from 'react-router-dom';
import ham from '../../assets/ham_menu.png';
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
        <h1 className={styles.navCopy}>
          <Link to={urls[0]}>Amy Pedid</Link>
        </h1>
        <Media query={{ maxWidth: 599 }}>
          {matches => matches ? (
            <div>
              {this.state.navMenuOpen ? <NavOpen onClick={this.closeMenu}
              /> : <NavClosed onClick={this.openMenu} />}
            </div>
          ) : (<ul className={styles.navList}>
            <li onClick={this.handleClick} className={styles.navListItem}>
              <Link to={urls[0]}>Work</Link></li>
            <li onClick={this.handleClick} className={styles.navListItem}>
              <Link to={urls[1]}>About</Link></li>
            <li className={styles.navListItem}><a href={urls[2]} download target="blank">Resume</a></li>
          </ul>)}
        </Media>
      </nav>
    )
  }
}

class MobileNav extends Component {
  render() {
    return (
      <div className={styles.arrowContainer}>
        <ul className={styles.navListMobile}>
          <Link to={urls[0]}><li className={styles.navListItemM}>Work</li></Link>
          <Link to={urls[1]}><li className={styles.navListItemM}>About</li></Link>
          <a href={urls[2]}><li className={styles.navListItemM}>Resume</li></a>
        </ul>
      </div>
    )
  }
}


class NavOpen extends Component {
  render() {
    return (
      <div className={styles.arrowContainer}>
        <ul className={styles.navListMobile}>
          <img src={ham} onClick={this.props.onClick} />
          <MobileNav />
        </ul>
      </div>
    )
  }
}

class NavClosed extends Component {
  render() {
    return (
      <div className={styles.arrowContainer}>
        <img src={ham} onClick={this.props.onClick} />
      </div>
    )
  }
}
