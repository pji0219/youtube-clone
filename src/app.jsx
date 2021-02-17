import React, { useState, useEffect } from 'react';
import style from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  // 함수 호출시 검색 API로부터 데이터 받아옴
  function search(query) {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyD20Gd3wFas94NaVRLA3KO1vKyQkje7NV0`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => setVideos(items))
      .catch((error) => console.log('error', error));
  }

  // 처음 앱이 시작었을 때 API로부터 가장 인기 많은 영상 데이터 받아옴
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
  return (
    <div className={style.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
