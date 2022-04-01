import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';

export default function Home() {
    const [count, setcount] = useState(0);

  const IncNum = () => {
    setcount(count+1);
  }

  const DecNum = () =>{
    if(count>0){

      setcount(count-1);
    }
  }

  return (
    <>
    
      <h1>{count}</h1>
      <button onClick={IncNum}>Plus one</button>
      <button onClick={DecNum}>Minus One</button>

    </>
  )
}
