import Head from 'next/head'
import Image from 'next/image'

import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/Home.module.css'
import changeTheNumber from './reducers/upDown';
import { incNumber } from './actions/index';

// store.subscribe(()=> console.log(store.getState()));


export default function Home() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    
    
      
        <div className="container">
          <h3>Increament/Decreament Counter</h3>
          <h4>Using React and Redux</h4>
          <button className="btn" onClick={ ()=> dispatch(decNumber()) }>-</button>
          <div className="px-2">
          <input type="text" value={myState} />
          </div>
          <button className="btn" onClick={ ()=> dispatch(incNumber()) }>+</button>
        </div> 
    
  )
}
