import React from 'react';
import styles from './video_detail.module.css';

function VideoDetail({ video }) {
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        type="text/html"
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/M7lc1UVf-VE"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </section>
  );
}

export default VideoDetail;
