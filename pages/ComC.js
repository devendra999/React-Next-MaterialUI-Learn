import React, {useContext} from 'react'
import { FirstName, LastName } from './index';

const ComC = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);



  return (
    <>
        <h1>My Name is {fname} {lname}</h1>
    </>
  )
}

export default ComC;