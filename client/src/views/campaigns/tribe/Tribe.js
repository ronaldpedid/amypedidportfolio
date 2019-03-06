import React, { Component } from 'react';
import styles from './tribe.scss';
import trb1 from '../../../assets/tribe/1th.png';
import trb2 from '../../../assets/tribe/2th.png';
import trb3 from '../../../assets/tribe/3th.png';
import trb4 from '../../../assets/tribe/4th.png';
import trb5 from '../../../assets/tribe/5th.png';
import trb6 from '../../../assets/tribe/6th.png';
import { Breadcrumbs, Crumbles, Crumble } from '../../../components/navigation/Breadcrumbs';
import { Link } from 'react-router-dom';


export class TribeContent extends Component {
  render() {
    return (
      <div className={styles.tribeContainer}>
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
          <img className={styles.tribeBanner} src={trb1} alt="Tribe Hummus Logo" />
          <p className={styles.blurb}>We set out to make Tribe hummus the snack of choices for anyone wanting to try something new and delicious.</p>
          <img className={styles.tribeImage} src={trb2} alt="Tribe Hummus Logo" />
          <img className={styles.tribeImage} src={trb3} alt="Tribe Hummus Logo" />
          <img className={styles.tribeImageCart} src={trb4} alt="Tribe Hummus Logo" />
          <img className={styles.tribeSite} src={trb5} alt="Tribe Hummus Logo" />
          <img className={styles.tribeSite} src={trb6} alt="Tribe Hummus Logo" />
          <Breadcrumbs>
            <Crumbles>
              <Link to="/"><Crumble>
                <h1>Home</h1>
              </Crumble></Link>
              <Link to="/caribou">
                <Crumble>
                  <h1>Caribou Coffee</h1>
                </Crumble></Link>
            </Crumbles>
          </Breadcrumbs>
        </div>
      </div>
    )
  }
}
