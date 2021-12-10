import React, { Component } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { change, themeSelector } from './redux/themeSlice';


function App() {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();
  
  console.log(theme)
    return (
    <div className="App_div"
      style={{
        color: theme.text_color,
        background: theme.bg_color
      }}
    >
          <p>
            — А что это за звуки, вон там? – спросила Алиса, кивнув на весьма укромные заросли какой-то симпатичной растительности на краю сада.<br/>
            — А это чудеса, – равнодушно пояснил Чеширский Кот.<br/>
            — И.. И что же они там делают? – поинтересовалась девочка, неминуемо краснея.<br/>
            —    Как и положено, – Кот зевнул. – Случаются…  
          </p>
          <h3>Алиса в Стране Чудес – Льюис Кэррол</h3>
          
          <button className="Button"
            style={{
              color: theme.text_color
            }}
            onClick={() => dispatch(change())}
            >Change color</button>
    </div> 
  );
 }

export default App;
