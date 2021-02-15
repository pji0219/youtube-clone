import React from 'react';
import styles from './video_item.module.css';

function VideoItem({ video: { snippet } }) {
  // props 안에 있는 것을 구조분해 할당
  return (
    <li className={styles.container}>
      <div className={styles.video}>
        <img
          className={styles.thumbnails}
          src={snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
}

export default VideoItem;
