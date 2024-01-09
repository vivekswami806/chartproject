import React from 'react'

function Model({error,setshowErr}) {
  return (
    <div className='modelContainer' onClick={()=>{
        setshowErr(false)
    }}>
       <h1> {error} </h1>
    </div>
  )
}

export default Model