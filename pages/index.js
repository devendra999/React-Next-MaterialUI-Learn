import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);
  const [title, setTitle] = useState(0);
  useEffect(() => {
      alert('Iam Clicked');
  }, [num]);
  
  useEffect(() => {
    document.title=`you clicked ${num}`
  });


  return (
    <>
      <button onClick={() => {setNum(num+1)}}>Click Me {num}</button><br/>
      <button onClick={() => {setNums(nums+1)}}>Click Me {nums}</button>
    </>
  )
}
