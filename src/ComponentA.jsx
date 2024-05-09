import React, { useState, createContext } from 'react'
import ComponentB from './ComponentB'

export const UserContext = createContext ();
  
const ComponentA = () => {
  
  const [user, setuser] = useState ("Qoslaye");
  return (
    <div className='box'> <h2>ComponentA</h2>
    <h2>{`Hello i'm : ${user}`}</h2>

    <p className='user'>
      <h2 className='qoslaye'> ( Qoslaye )</h2> Qoslaye is the user name that i passed into another Component using useContext 👍
    
    </p>

    <UserContext.Provider value={user}>
        <ComponentB user={user} />
    </UserContext.Provider>
   
    </div>
  )
}

export default ComponentA