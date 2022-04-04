import Head from 'next/head'
import Image from 'next/image'
import React, { createContext } from 'react'
import styles from '../styles/Home.module.css'
import ComA from './ComA'

const FirstName = createContext();

export default function Home() {
  return (
    <>
      <FirstName.Provider value={'Vinod Thapa'}>
        <ComA/>
      </FirstName.Provider>
    </>
  )
}

export {FirstName};