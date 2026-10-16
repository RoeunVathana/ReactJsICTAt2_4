import React from 'react'
import { useParams } from 'react-router-dom'
const Detail = () => {
    const params = useParams();
    const id = params.id
  return (
   <>
     <div>Detail</div>
     <h1>{id}</h1>
   </>
  )
}

export default Detail