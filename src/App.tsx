import React from 'react';
import s from './App.module.css';
import {Cards} from "./components/Cards";

function App() {
  return (
    <div className={s.app}>
      <h1 className={s.header}>Ты сегодня покормил кота?</h1>
      <Cards/>
    </div>
  );
}

export default App;
