import React, { Component } from 'react';
import styles from './shoptology.scss';
import { Breadcrumbs, Crumbles, Crumble } from '../../../components/navigation/Breadcrumbs';
import { Link } from 'react-router-dom';
import shop1 from '/public/assets/shoptology/1shp.png';
import shop2 from '/public/assets/shoptology/2shp.png';
import shop3 from '/public/assets/shoptology/3shp.png';
import shop4 from '/public/assets/shoptology/4shp.png';
import shop5 from '/public/assets/shoptology/5shp.png';




export class ShoptologyContent extends Component {
  render() {
    return (
      <div className={styles.shoptologyContainer}>
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
          <img className={styles.shoptologyBanner} src={shop1} alt="Shoptology" />
          <img className={styles.shoptologyImage} src={shop2} alt="Shoptology" />
          <img className={styles.shoptologyImage} src={shop3} alt="Shoptology" />
          <img className={styles.shoptologyImage} src={shop4} alt="Shoptology" />
          <img className={styles.shoptologyImage} src={shop5} alt="Shoptology" />
          <Breadcrumbs>
            <Crumbles>
              <Link to="/walmart"><Crumble>
                <h1>Walmart Museum</h1>
              </Crumble></Link>
              <Link to="/about">
                <Crumble>
                  <h1>About Me</h1>
                </Crumble>
              </Link>
            </Crumbles>
          </Breadcrumbs>
        </div>
      </div>
    )
  }
}

