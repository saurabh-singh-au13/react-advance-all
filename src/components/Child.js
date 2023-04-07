import React from 'react'

const Child = (props) => {
  return (
   <>

   <button onClick={() => props.changeName("Saurabh")}>Change Name</button>
   </>
  )
}

export default Child