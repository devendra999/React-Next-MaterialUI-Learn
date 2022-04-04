import React from 'react'
import { FirstName, LastName } from './index';

const ComC = () => {
  return (
    <>
        <FirstName.Consumer>
            {(fname)=>{
                return (
                    <LastName.Consumer>
                        {(lname)=>{
                            return <h1>My Name is {fname} {lname}</h1>
                        }}
                    </LastName.Consumer>
                )
            }}
        </FirstName.Consumer>
    </>
  )
}

export default ComC;