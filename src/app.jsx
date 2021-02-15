import React, { useState, useEffect } from 'react';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }; // 리퀘스트 할 때 옵션을 전달 하는 것

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyD20Gd3wFas94NaVRLA3KO1vKyQkje7NV0',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []); // 빈 배열을 두번째 인자로 주면 한번만 마운트가 되었을 때만 코드 블럭 부분이 호출 된다.
  return <VideoList videos={videos} />;
}

export default App;
