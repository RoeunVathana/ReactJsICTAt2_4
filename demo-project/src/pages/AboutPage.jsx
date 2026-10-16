import React from 'react'
import { useParams } from 'react-router-dom'
const AboutPage = () => {
    const params = useParams();
    const nameuser = params.name
  return (
    <>
        <div>AboutPage</div>
        <h1>{nameuser}</h1>
    </>
  )
}

export default AboutPage