import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  const fname = 'Devendra';

  return (
    <>
      <h1>My name is {fname}</h1>
      <p>If you want to wright js in jsx you can use <b>{}</b></p>
    </>
  )
}
