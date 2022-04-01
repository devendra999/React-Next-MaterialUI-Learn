import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  const fname = 'Devendra';
  const lname = 'Prajapati';

  return (
    <>
      <h1>{`My name is ${fname} ${lname}`}</h1>
      <p>If you want to wright js and jsx both you can you backstick {` this is string ${fname} `} </p>
    </>
  )
}
