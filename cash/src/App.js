import './App.css';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';


function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)
  console.log(cash)

  return (
    <div className='app'>
      <div style={{display: "flex"}}>
        <button>Пополнить счет</button>
        <button>Снять деньги+</button>
      </div>
    </div>
  );
}

export default App;