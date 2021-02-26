import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // 비디오 목록에 있는 비디오 선택시 함수 호출되고 선택한 비디오로 데이터가 갱신됨
  function selectVideo(video) {
    setSelectedVideo(video);
  }

  // 함수 호출시 API로부터 검색된 데이터 받아옴
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
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
