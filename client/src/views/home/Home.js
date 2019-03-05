import React, { Component } from 'react';
import {
  DisplayBlock,
  WalmartBlock,
  CaribouBlock,
  TribeBlock,
  ShopBlock
} from '../../components/block/Block';
import styles from './home.scss';

export class Home extends Component {
  render() {
    return (
      <div className={styles.homeContainer}>
        <BlockGrid />
      </div>
    );
  }
}

class BlockGrid extends Component {
  render() {
    return (
      <div className={styles.bgContainer}>
        <div className={styles.blockRow}>
          <TribeBlock />
          <CaribouBlock />
        </div>
        <div className={styles.blockRow}>
          <WalmartBlock />
          <ShopBlock />
        </div>
        <div className={styles.blockRow}>
          <DisplayBlock />
          <DisplayBlock />
        </div>
      </div>
    )
  }
}