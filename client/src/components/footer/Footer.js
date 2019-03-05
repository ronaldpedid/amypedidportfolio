import React, { Component } from 'react'
import styles from '../footer/footer.scss';

export default class Footer extends Component {
  render() {
    const twitterUrl = 'https://twitter.com/Amy_AHHA_Moment';
    return (
      <footer className={styles.footer}>
        <div className={styles.socialRow}>
          <h2 className={styles.social}><a href="mailto:amypedid@outlook.com?subject=Website Mail"><i className="far fa-envelope"></i></a></h2>
          <h2 className={styles.social}><a className={styles.socialLink} href={twitterUrl} target="_blank"><i className="fab fa-twitter"></i></a></h2>
        </div>
        <h2>Made by:<a href="mailto:ronaldpedid@live.com?subject=web_development"> The Sage Mages</a></h2>
      </footer>
    )
  }
}
