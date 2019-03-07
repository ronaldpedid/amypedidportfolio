import React, { Component } from 'react';
import styles from './walmart.scss';
import { Breadcrumbs, Crumbles, Crumble } from '../../../components/navigation/Breadcrumbs';
import { Link } from 'react-router-dom';
import wmm1 from '../../../assets/walmart/1wmm.png';
import wmm2 from '../../../assets/walmart/2wmm.png';
import wmm3 from '../../../assets/walmart/3wmm.png';
import wmm4 from '../../../assets/walmart/4wmm.png';

const wmmUrlHttp = "http://www.walmartmuseum.com/timeline"
const wmmUrl = "www.walmartmuseum.com/timeline"

export class WalmartContent extends Component {
  render() {
    return (
      <div className={styles.walmartContainer}>
        <ContentContainer />
      </div>
    );
  }
}

class ContentContainer extends Component {
  render() {
    return (
      <div className={styles.bgContainer}>
        <div className={styles.contentBlock}>
          <img className={styles.wmmBanner} src={wmm1} alt="The Walmart Museaum" />
          <h2 className={styles.blurb}>A history over 60 years old needed a solution to tell it's story online.</h2>
          <img className={styles.wmmImage} src={wmm2} alt="The Walmart Museaum" />
          <img className={styles.wmmImage} src={wmm3} alt="The Walmart Museaum" />
          <h2 className={styles.blurb}>Span years with a simple scroll and find sparks of inspiration.
            Explore the depths of Walmart's story at: <a className={styles.wmLink} href={wmmUrlHttp} target='_blank'> {wmmUrl}</a>
          </h2>

          <img className={styles.wmmSite} src={wmm4} alt="The Walmart Museaum" />
          <Breadcrumbs>
            <Crumbles>
              <Link to="/caribou"><Crumble>
                <h1>Caribou Coffee</h1>
              </Crumble></Link>
              <Link to="/shoptology">
                <Crumble>
                  <h1>Graphic Design</h1>
                </Crumble></Link>
            </Crumbles>
          </Breadcrumbs>
        </div>
      </div>
    )
  }
}

