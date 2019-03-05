import React, { Component } from 'react';
import Media from 'react-media';
import styles from './navigation.scss';
import { Link } from 'react-router-dom';
const resumeUrl = 'https://www.dropbox.com/s/se0z76jho8eh5zx/Amy%20Pedid-Art%20Director_2019%20resume.pdf?dl=0&fbclid=IwAR0nscBYTw3w8cMmsz9H0y2Hujxpr8BeFgriY15AtZFb2E2XwEmMryRDWv0';

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
            <li onClick={this.handleClick} className={styles.navListItem}><Link to="/">Work</Link></li>
            <li className={styles.navListItem}><Link to="/about">About</Link></li>
            <li className={styles.navListItem}><a href={resumeUrl} target="blank">Resume</a></li>
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
          <Link to="/"><li>Work</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to={resumeUrl}><li>Resume</li></Link>
        </ul>
      </div>
    )
  }
}

class ArrowClosed extends Component {
  render() {
    return (
      <div className={styles.arrowContainer}>
        <div onClick={this.props.onClick} className={styles.arrowDown}></div>
      </div>
    )
  }
}
