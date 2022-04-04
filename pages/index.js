import Head from 'next/head'
import Image from 'next/image'
import React, { createContext } from 'react'
import styles from '../styles/Home.module.css'
import ComA from './ComA'

const FirstName = createContext();
const LastName = createContext();

export default function Home() {
  return (
    <>
      <FirstName.Provider value={'Devendra'}>
        <LastName.Provider value={'Prajapati'}>
          <ComA/>
        </LastName.Provider>
      </FirstName.Provider>
    </>
  )
}

export {FirstName, LastName};