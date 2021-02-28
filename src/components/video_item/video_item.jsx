import React, { memo } from 'react';
import styles from './video_item.module.css';

function VideoItem({ video, video: { snippet }, onVideoClick, display }) {
  // props 안에 있는 것을 구조분해 할당
  const displayType = display === 'list' ? styles.list : styles.grid;

  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => onVideoClick(video)}
    >
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

export default memo(VideoItem);
