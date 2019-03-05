import React, { Component } from 'react';
import styles from './caribou.scss';
import { Breadcrumbs, Crumbles, Crumble } from '../../../components/navigation/Breadcrumbs';
import { Link } from 'react-router-dom';
import cb1 from '../../../assets/caribou/1cb.png';
import cb2 from '../../../assets/caribou/2cb.png';
import cb3 from '../../../assets/caribou/3cb.png';
import cb4 from '../../../assets/caribou/4cb.png';
import cb5 from '../../../assets/caribou/5cb.png';
import cb6 from '../../../assets/caribou/6cb.png';
import cb7 from '../../../assets/caribou/7cb.png';

export class CaribouContent extends Component {
  render() {
    return (
      <div className={styles.caribouContainer}>
        <ContentContainer />
      </div>
    );
  }
}

class ContentContainer extends Component {

  render() {
    const videoEmbed = <center><iframe className={styles.video} src="https://www.youtube.com/embed/wKoGX4vJKcg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></center>
    const blurbCopy = 'In a world where you can be easily fooled with ingredients we rewarded those who knew what is real and not real.'
    return (
      <div className={styles.bgContainer}>
        <div className={styles.contentBlock}>
          <img className={styles.caribouBanner} src={cb1} alt="Caribou Coffee" />
          <p className={styles.blurb}>{blurbCopy}</p>
          <img className={styles.caribouImage} src={cb2} alt="Caribou Coffee" />
          <img className={styles.caribouImage} src={cb3} alt="Caribou Coffee" />
          <img className={styles.caribouImage} src={cb4} alt="Caribou Coffee" />
          <img className={styles.caribouImage1} src={cb5} alt="Caribou Coffee" />
          {videoEmbed}
          <img className={styles.caribouImage2} src={cb6} alt="Caribou Coffee" />
          <img className={styles.caribouSite} src={cb7} alt="Caribou Coffee" />
          <Breadcrumbs>
            <Crumbles>
              <Link to="/tribe">
                <Crumble>
                  <h1>Tribe Hummus</h1>
                </Crumble></Link>
              <Link to="/walmart">
                <Crumble>
                  <h1>Walmart Museum</h1>
                </Crumble></Link>
            </Crumbles>
          </Breadcrumbs>
        </div>
      </div>
    )
  }
}

