import React, { useRef, memo } from 'react';
import styles from './search_header.module.css';

function SearchHeader(props) {
  const inputRef = useRef(); // input에 입력된 값을 받아옴 (DOM 조작)

  function handleSearch() {
    const value = inputRef.current.value;
    props.onSearch(value);
  }

  function onClick() {
    handleSearch();
  }

  function onKeyPress(event) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }
  console.log('Header!!!');

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>moktube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="검색"
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
}

export default memo(SearchHeader);
