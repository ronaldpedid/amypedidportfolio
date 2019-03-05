import React, { Component } from 'react';
import styles from './about.scss';
import { Breadcrumbs, Crumbles, Crumble } from '../../components/navigation/Breadcrumbs';
import { Link } from 'react-router-dom';
const resumeUrl = 'https://www.dropbox.com/s/se0z76jho8eh5zx/Amy%20Pedid-Art%20Director_2019%20resume.pdf?dl=0&fbclid=IwAR0nscBYTw3w8cMmsz9H0y2Hujxpr8BeFgriY15AtZFb2E2XwEmMryRDWv0';
const aboutParagraphText = 'It’s simple right? Design experiences that can break through the cacophony and create a way to efficiently satisfy customers. However, when new mandatories pop up or shorter deadlines emerge, that logical thinking can easily go out the window and be replaced by: anxiety, fear and bad work. That’s why in every project I am a part of I make it a priority to think big, and plan well. A tested strategy that has effectively combated substanceless decisions and avoided costly timeline pitfalls. If this collaborative and strategic environment suits you, let’s chat about how we can solve your brand and marketing problems. Together, we can think big and plan well. It’s simple right? '
export class About extends Component {
  render() {
    return (
      <div className={styles.aboutContainer}>
        <AboutContent />
      </div>
    );
  }
}

export class AboutContent extends Component {
  render() {
    const lookingFor = 'Freelance art direction and part-time design work';
    const twitterUrl = 'https://twitter.com/Amy_AHHA_Moment';
    return (
      <div className={styles.aboutContent}>
        <h1 className={styles.header}>Think Big. Plan Well.</h1>
        <p className={styles.blurb}>
          {aboutParagraphText}</p>
        <div className={styles.socialRow}>
          <h3 className={styles.social}><a href="mailto:amypedid@outlook.com"><i className="far fa-envelope"></i></a></h3>
          <h3 className={styles.social}><a className={styles.socialLink} href={twitterUrl} target="_blank"><i className="fab fa-twitter"></i></a></h3>
        </div>
        <Breadcrumbs>
          <Crumbles>
            <Link to="/shoptology"><Crumble>
              <h1>Shoptology</h1>
            </Crumble></Link>
            <a href={resumeUrl} target="_blank">
              <Crumble>
                <h1>Resume</h1>
              </Crumble>
            </a>
          </Crumbles>
        </Breadcrumbs>
      </div>
    )
  }
}