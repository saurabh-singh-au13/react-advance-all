import React from 'react'

const Mapping = () => {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8,9]
    const newArray = numbers.map((value, index)=> {
        return value*value

    })
    
    console.log("previous array :-", numbers, "new Array :-", newArray);

  return (
   <>
   <h1> Mapping</h1>
   </>
  )
}

export default Mapping