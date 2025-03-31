import React from 'react'
import QueryCard from './components/QueryCard'

export default function Test() {
  return (
    <div className='w-full h-screen flex p-10 justify-center items-center'>  
        <QueryCard desc="This is a test" response_count={5} onClick={()=>{console.log("clicked")}}/>
    </div>
  )
}
