import { useRouter } from 'next/router';

import React, { useState } from 'react';

import styles from '../../styles/Searchbox.module.scss';

function Searchbox() {
  const [searchBoxInput, setSearchBoxInput] = useState('');
  const [selectYear, setSelectYear] = useState('');
  const [selectCategory, setCategory] = useState('');
  const router = useRouter();

  // We are changing the which query goes to nextpage
  const handleClick = () => {
    setSearchBoxInput('');

    if (searchBoxInput.trim() !== '') {
      let queryObj = { name: searchBoxInput };
      if (selectYear !== '') {
        queryObj = { ...queryObj, year: selectYear };
      }
      if (selectCategory !== '') {
        queryObj = { ...queryObj, type: selectCategory };
      }
      router.push({
        pathname: '/search',
        query: queryObj,
      });
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  const year = [];
  for (let i = 2020; i > 1900; i--) {
    year.push(i);
  }
  return (
    <div className={styles.searchbox}>
      <div className={styles.selectbox}>
        <select
          id="years"
          name="years"
          onChange={(e) => setSelectYear(e.target.value)}
        >
          <option value="">Year</option>
          {year.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className={styles.selectbox}>
        <select
          id="types"
          name="types"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Type</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
      </div>
      <div className={styles.inputbox}>
        <input
          type="text"
          placeholder="Enter movie name here"
          className="mr-5"
          name="searchbox"
          value={searchBoxInput}
          onKeyPress={handleEnterPress}
          onChange={(e) => setSearchBoxInput(e.target.value)}
        />
        <i className="bx bx-search" />
      </div>

      <button className={styles.searchButton} type="button" onClick={handleClick}>
        <span>Search</span>
        <i className="bx bx-right-arrow-alt" />
      </button>
    </div>
  );
}

export default Searchbox;
