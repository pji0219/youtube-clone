import React, { useState, useEffect } from 'react';
import style from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  // 함수 호출시 검색 API로부터 데이터 받아옴
  function search(query) {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  }

  // 처음 앱이 시작었을 때 API로부터 가장 인기 많은 영상 데이터 받아옴
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []); // 빈 배열을 두번째 인자로 주면 한번만 마운트가 되었을 때만 코드 블럭 부분이 호출 된다.
  return (
    <div className={style.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
