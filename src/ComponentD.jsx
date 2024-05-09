import React, {useContext} from 'react';
import { UserContext } from './ComponentA';

const ComponentD = ( ) => {
  const user = useContext (UserContext);
  return (
    <div className='box'><h2>ComponentD</h2> 
    <h2>{ `Hello i'm :  ${user}`}</h2>
    <h2 className='useContext'> useContext == React hook that allows you to share 
      values between multiple levels of 
      components whithout passing props through each level 

.</h2>
    </div>
  )
}

export default ComponentD