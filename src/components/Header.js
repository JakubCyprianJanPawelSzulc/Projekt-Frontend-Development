import React from 'react';
import { Link } from 'react-router-dom';
import DownloadButton from './DownloadButton.js';
import { useSelector } from 'react-redux';
import ScrollToCommentsButton from './ScrollToCommentsButton.js';

export default function Header() {
  const drinks = useSelector((state) => state.drinks);
  return (
    <div className="header">
      <h1 className="neon">PIWO WINO WÓDKA</h1>
      <div className="header-buttons">
        <button className="header-button">
          <Link to={`/`}>🏠 strona główna</Link>
        </button>
        <button className="header-button">
          <Link to={`statistics`}>📊 statystyki</Link>
        </button>
        <div className="header-button">
          <ScrollToCommentsButton />
        </div>
        <div className="header-download-button">
          <DownloadButton data={drinks} typeOfData="wszystkie przepisy" />
        </div>
      </div>
    </div>
  );
}
