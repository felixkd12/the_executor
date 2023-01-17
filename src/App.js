import style from './App.module.css';
import React, { useState } from "react";
import {Form} from './Form';

function App() {

  return (
    <div className={style.App}>
      <Form/>
    </div>
  );
}

export default App;