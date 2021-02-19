import React from 'react';
import style from './video_detail.module.css';

function VideoDetail({ video }) {
  return <h1>{video.snippet.title}</h1>;
}

export default VideoDetail;
